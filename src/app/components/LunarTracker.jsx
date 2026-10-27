import { getDate } from "@/lib/date"
import { connection } from "next/server";
import { Suspense } from "react";
import DateView from "@/app/components/DateView";


async function TrackerContent () {

    await connection();
    const { gregorian, hijri } = getDate();
    return (
      <div className="flex flex-col items-center justify-center h-screen p-5">
        <div className="bg-white/10 p-8 rounded-xl mb-3">
          <div className="text-lg font-bold flex justify-center">
            {hijri.arDayOfWeek}
          </div>
          <div className="-mx-6 h-px bg-linear-to-r from-transparent via-white/50 to-transparent my-4 " />
          <h1 className="text-9xl">{hijri.hijriDay}</h1>
        </div>
        <DateView gregorian={gregorian} hijri={hijri} />
      </div>
    );
}



export default function LunarTracker () {
  return (
      <Suspense fallback={<div>Loading...</div>}>
        <TrackerContent />
      </Suspense>
  )
}

