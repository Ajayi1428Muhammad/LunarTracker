import { DAYS_OF_WEEK, MONTHS, MONTHSTART } from "@/lib/month";

const toLocalDate = (dateString) => {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day);
};

const getLocalDate = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
};

const getLocalDateString = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const getCurrentMonth = () => MONTHSTART[0];
const getHijriMonth = () => MONTHS[0][getCurrentMonth().month];
const getNextHijriMonth = () =>
  MONTHS[0][getCurrentMonth().month === 12 ? 1 : getCurrentMonth().month + 1];

const getDate = () => {
  const today = getLocalDate();
  const currentMonth = getCurrentMonth();
  const dayIndex = today.getDay();
  const dayOfWeek = DAYS_OF_WEEK[dayIndex];
  const startDate = toLocalDate(currentMonth.startDate);
  const diffDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
  const hijriDay = Math.max(1, diffDays + 1);

  return {
    gregorian: {
      enDayOfWeek: dayOfWeek.en,
      gregorianDate: getLocalDateString(today),
    },
    hijri: {
      hijriDay,
      arDayOfWeek: dayOfWeek.ar,
      month: getHijriMonth(),
      year: currentMonth.year,
    },
  };
};

const monthCalendar = () => {
  const currentMonth = getCurrentMonth();
  const startDate = toLocalDate(currentMonth.startDate);
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 29);

  const today = getLocalDate();
  const diffDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
  const hijriDay = Math.max(1, diffDays + 1);

  return {
    hijriDay,
    hijriMonth: getHijriMonth(),
    nextMonth: getNextHijriMonth(),
    gregMonth: startDate.toLocaleString("en-NG", { month: "short" }),
    startDayIndex: startDate.getDay(),
    nextGregMonth: endDate.toLocaleString("en-NG", { month: "short" }),
    startDay: startDate.getDate(),
    startDate,
    endDay: endDate.getDate(),
    endYear: endDate.getFullYear(),
  };
};

export { getDate, monthCalendar };
