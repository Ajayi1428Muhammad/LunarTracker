import { DAYS_OF_WEEK, MONTHS, MONTHSTART } from "@/lib/month";

const presentDate = new Date();
const currentMonth = MONTHSTART[0];
const corMonth = MONTHS[0];

const startDate = new Date(currentMonth.startDate);
const endDate = new Date(startDate);
endDate.setUTCDate(endDate.getUTCDate() + 29);
const presentDay = new Date(presentDate.toISOString().split('T')[0])
const startDayIndex = startDate.getDay()
const dayIndex = presentDate.getDay()
const dayOfWeek = DAYS_OF_WEEK[dayIndex]

const startDay = startDate.getUTCDate();
const endDay = endDate.getUTCDate();
const endYear = endDate.getUTCFullYear();

const dateDiff = presentDay - startDate
const day = Math.floor(dateDiff / (1000 * 60 * 60 *24))

const hijriDay = Math.max(1, day + 1);
const hijriMonth = corMonth[currentMonth.month];
const nextMonth = corMonth[currentMonth.month === 12 ? 1 : currentMonth.month + 1];

const getDate = ( ) => {
    return {
      gregorian: {
        enDayOfWeek: dayOfWeek.en,
        gregorianDate: new Date().toISOString().split("T")[0],
      },
      hijri: {
        hijriDay,
        arDayOfWeek: dayOfWeek.ar,
        month: hijriMonth,
        year: currentMonth.year,
      },
    };
}

const monthCalendar = () => {
  const gregMonth = new Date(startDate).toLocaleString("en-NG", {month: "short", timeZone: "UTC"});
  const nextGregMonth = new Date(endDate).toLocaleString("en-NG", {month: "short", timeZone: "UTC"});
    return {
      hijriDay,
      hijriMonth,
      nextMonth,
      gregMonth,
      startDayIndex,
      nextGregMonth,
      startDay,
      startDate,
      endDay,
      endYear,
    };
}

export  { getDate, monthCalendar }
