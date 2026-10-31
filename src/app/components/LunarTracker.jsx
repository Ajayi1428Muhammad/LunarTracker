import { getDate } from "@/lib/date"
import { connection } from "next/server";
import { Suspense } from "react";
import DateView from "@/app/components/DateView";


async function TrackerContent () {

    await connection();
    const { gregorian, hijri } = getDate();
    return (
      <div className="flex items-center justify-center h-screen p-5">
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

