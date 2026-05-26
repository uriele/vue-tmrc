import { describe, expect, it } from "vitest";
//import { Deadline } from "../Deadline";
import { Temporal } from "@js-temporal/polyfill";
import { toTemporalZonedDateTime } from "../Deadline";
const dateAsString = "2024-12-31";
const temporalPlainDateTime = Temporal.PlainDateTime.from("2024-12-31T00:00:00");
const temporalPlainDate = Temporal.PlainDate.from("2024-12-31");
const temporalZonedDateTime = Temporal.ZonedDateTime.from("2024-12-31T00:00:00[Europe/Rome]");
const timezone = "Europe/Rome";

describe("toTemporalZonedDateTime Function", () => {
  it("should convert a string date to Temporal.ZonedDateTime", () => {
    const result = toTemporalZonedDateTime(dateAsString, timezone);
    expect(result.toPlainDateTime().toString()).toBe("2024-12-31T00:00:00");
    expect(result.timeZoneId).toBe("Europe/Rome");
  });

  it("should convert a Temporal.ZonedDateTime to itself", () => {
    const result = toTemporalZonedDateTime(temporalZonedDateTime, timezone);
    expect(result.toPlainDateTime().toString()).toBe("2024-12-31T00:00:00");
    expect(result.timeZoneId).toBe("Europe/Rome");
  });

  it("should convert a Temporal.PlainDateTime to Temporal.ZonedDateTime", () => {
    const result = toTemporalZonedDateTime(temporalPlainDateTime, timezone);
    expect(result.toPlainDateTime().toString()).toBe("2024-12-31T00:00:00");
    expect(result.timeZoneId).toBe("Europe/Rome");
  });

  it("should convert a Temporal.PlainDate to Temporal.ZonedDateTime", () => {
    const result = toTemporalZonedDateTime(temporalPlainDate, timezone);
    expect(result.toPlainDateTime().toString()).toBe("2024-12-31T00:00:00");
    expect(result.timeZoneId).toBe("Europe/Rome");
  });

  it("should throw an error for invalid date formats", () => {
    expect(() => toTemporalZonedDateTime("invalid-date", timezone)).toThrow();
  });
});

