import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { SitemapStream, streamToPromise } from "sitemap";

const distDir = path.resolve(process.cwd(), "dist");
const outFile = path.join(distDir, "sitemap.xml");

const SITE_URL = process.env.SITE_URL ?? "https://tmrc2026.ucsd.edu";
const BASE_PATH = process.env.BASE_PATH ?? "/";

const routes: string[] = [
  "/",
  "/invited-speaker-nominations",
  "/information",
  "/committee",
  "/program",
  "/registration",
  "/travel"
];

function joinUrl(siteUrl: string, basePath: string, routePath: string) {
  const base = basePath.startsWith("/") ? basePath : `/${basePath}`;
  const baseNormalized = base.endsWith("/") ? base : `${base}/`;
  const routeNormalized = routePath.startsWith("/") ? routePath.slice(1) : routePath;
  return new URL(`${baseNormalized}${routeNormalized}`, siteUrl).toString();
}

async function main() {
  try {
    await mkdir(distDir, { recursive: true });
  } catch (err: unknown) {
    if (err.code !== "EEXIST") throw err;
  }

  const smStream = new SitemapStream({ hostname: SITE_URL });
  for (const r of routes) {
    smStream.write({ url: joinUrl(SITE_URL, BASE_PATH, r), changefreq: "weekly" });
  }
  smStream.end();

  const xml = (await streamToPromise(smStream)).toString();
  await writeFile(outFile, xml, "utf8");
  console.log(`Wrote ${outFile}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
