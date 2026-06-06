import { Temporal} from "@js-temporal/polyfill";

type TemporalLike = Temporal.ZonedDateTime | Temporal.PlainDateTime | Temporal.PlainDate ;

export function sortDeadlines(
  deadlines: readonly Deadline[],
  order: "ascendent" | "descendent" = "ascendent",
): Deadline[] {
  console.log("Sorting deadlines with order:", order);
  const direction = order === "ascendent" ? 1 : -1;

  return [...deadlines].sort((first, second) => {
    const dateComparison = Temporal.PlainDate.compare(first.date, second.date);

    if (dateComparison !== 0) {
      return dateComparison * direction;
    }

    return first.description.localeCompare(second.description) * direction;
  });
}

export class Deadline {
  readonly date: Temporal.PlainDate;
  readonly description: string;
  readonly link?:URL;

  constructor(date: TemporalLike, description: string, link?:URL) {
    this.date = Temporal.PlainDate.from(date);
    this.description = description;
    this.link = link;
  }

  hasPassed(today: Temporal.PlainDate = Temporal.Now.plainDateISO()): boolean {
    return Temporal.PlainDate.compare(this.date, today) < 0;
  }
}
