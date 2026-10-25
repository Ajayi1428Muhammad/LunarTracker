"use client";

import { Suspense } from "react";
import { monthCalendar } from "@/lib/date";

const calendarResource = (() => {
  let status = "pending";
  let result = null;
  let promise = null;

  return {
    read() {
      if (status === "success") {
        return result;
      }

      if (!promise) {
        promise = new Promise((resolve) => {
          setTimeout(() => {
            result = monthCalendar();
            status = "success";
            resolve(result);
          }, 0);
        });
      }

      throw promise;
    },
  };
})();

const CalendarSkeleton = () => (
  <div className="m-4 mx-auto max-w-140 p-4">
    <div className="animate-pulse rounded-lg bg-neutral-900/60 border border-neutral-800/80 p-6">
      <div className="h-8 w-52 rounded bg-neutral-800/80" />
      <div className="mt-3 h-8 w-72 rounded bg-neutral-800/80" />
      <div className="mt-6 h-64 w-full rounded bg-neutral-800/80" />
    </div>
  </div>
);

const CalendarContent = () => {
  const {
    hijriDay,
    hijriMonth,
    gregMonth,
    startDayIndex,
    nextGregMonth,
    startDay,
    startDate,
    endDay,
    endYear,
    nextMonth,
  } = calendarResource.read();

  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const startDayIndices = startDayIndex === 0 ? 6 : startDayIndex - 1;
  const today = hijriDay;

  return (
    <div className="m-4 mx-auto max-w-140 p-4 ">
      <h1 className="font-bold text-2xl">{hijriMonth} 1448AH</h1>
      <h1 className="font-bold text-2xl">
        {startDay} {gregMonth} - {endDay} {nextGregMonth} {endYear}
      </h1>
      <div className="mt-4 rounded-lg bg-neutral-900/60 border border-neutral-800/80 p-6 overflow-x-auto scrollbar-thin scrollbar-track-white/30 scrollbar-thumb-white/50 max-w-140 mx-auto">
        <div className="flex flex-col min-w-125 gap-2 ">
          <div className="grid grid-cols-7 gap-2 ">
            {days.map((day, i) => (
              <div
                key={i}
                className="flex justify-center items-center text-neutral-200 font-bold mb-1"
              >
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1  ">
            {[...Array(startDayIndices)].map((_, i) => (
              <div key={`empty-${i}`} className="p-4"></div>
            ))}
            {[...Array(30)].map((_, i) => {
              const currentGregDay = new Date(startDate);
              currentGregDay.setDate(startDate.getDate() + i);
              const gregDay = currentGregDay.getDate();
              const currentDay = i + 1;
              const isToday = currentDay === today;
              const day30 = i === 29;
              return (
                <div
                  key={i}
                  className={`aspect-square  rounded-lg flex flex-col justify-center items-center ${
                    isToday
                      ? "bg-blue-500/40 border border-white"
                      : day30
                        ? "bg-neutral-900/60 border-2 border-dashed border-amber-200/40"
                        : "bg-neutral-900/60 border border-neutral-800/80"
                  } `}
                >
                  <span className="text-lg sm:text-base"> {i + 1} </span>
                  <span className="text-xs! sm:text-base text-neutral-400">
                    {" "}
                    {gregDay}{" "}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-4 mb-4 flex gap-2">
        <div className="flex items-center gap-2">
          <div className="bg-neutral-900/60 border border-dashed border-amber-200/40 h-6 w-6 rounded" />
          <span className="font-semibold tracking-wide">Tentative</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-blue-500/40 border border-white h-6 w-6 rounded" />
          <span className="font-semibold tracking-wide">Today</span>
        </div>
      </div>
      <div className="mt-6">
        <span className="font-bold text-neutral-400">
          Day 30 is tentative so if the moon is sighted on the night of 29th,
          the next day becomes the first of {nextMonth}, else it remains the
          30th of {hijriMonth}.
        </span>
      </div>
    </div>
  );
};

const Calendar = () => (
  <Suspense fallback={<CalendarSkeleton />}>
    <CalendarContent />
  </Suspense>
);

export default Calendar;
