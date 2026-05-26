import { Temporal} from "@js-temporal/polyfill";

type TemporalLike = Temporal.ZonedDateTime | Temporal.PlainDateTime | Temporal.PlainDate | Temporal.Instant  | string;

const regexDate = /^\d{4}[-/]\d{1,2}([-/]\d{1,2})?$/;
export function toTemporalZonedDateTime(date: TemporalLike, timezone: string = "UTC"): Temporal.ZonedDateTime {
 if (date instanceof Temporal.ZonedDateTime) {
   return date.withTimeZone(timezone);

 } else if (date instanceof Temporal.PlainDateTime) {
   // Set the time zone to the midnight of the specified date in the given time zone
  return date.toZonedDateTime(timezone);
 } else if (date instanceof Temporal.PlainDate) {
   return date.toPlainDateTime({ hour: 0, minute: 0, second: 0 }).toZonedDateTime(timezone);
   } else if (date instanceof Temporal.Instant) {
         return date.toZonedDateTimeISO(timezone);
   } else if (typeof date === "string" && regexDate.test(date)) {
     const [_year, _month, _day] = date.split(/[/\-]/).map(Number);
     const day = _day || 1; // Default to 1 if day is missing
     const month = _month || 1; // Default to January if month is missing
     const year = _year || new Date().getUTCFullYear(); // Default to current year if year is missing
     return Temporal.ZonedDateTime.from({
        timeZone: timezone,
        year,
        month,
        day
     });
   } else {
     throw new Error("Invalid date format");
   }
  };


export class Deadline {
  readonly name: string;
  readonly date: Temporal.ZonedDateTime;
  readonly description: string;

  constructor(name: string, date: TemporalLike, description: string, timezone: string = "UTC") {
    this.date = toTemporalZonedDateTime(date, timezone);
    this.description = description;
    this.name = name;
  }

  hasPassed(): boolean {
    const now = Temporal.Now.zonedDateTimeISO(this.date);
    return Temporal.ZonedDateTime.compare(this.date, now) < 0;
  }
}
