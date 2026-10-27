'use client'
import { useState , useRef} from "react";
import { CalendarDaysIcon, MoonIcon, ClipboardIcon, CheckIcon } from "@heroicons/react/24/outline";

const pill =
  "rounded-3xl bg-white/10 p-2 border-t border-white/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] px-5 flex items-center gap-2 cursor-pointer hover:bg-white/20 transition-all duration-300 ease-in-out";

const DateView = ({ gregorian, hijri }) => {
    const [view, setView] = useState("hijri");
    const [ copied, setCopied] = useState(false);
    const dateTextRef = useRef(null);
    const handleCopy = () => {
        const currentText = dateTextRef.current.innerText
        navigator.clipboard.writeText(currentText)
        setCopied(true);
        setTimeout( () => {
            setCopied(false);
        }, 2000 )
    }
  return (
    <div className="flex flex-col">
      <div className="flex justify-between gap-4 mx-4 mb-2">
        <button
          className={`${pill} ${view === "hijri" ? "bg-white/20" : ""}`}
          onClick={() => setView("hijri")}
        >
          <MoonIcon className="h-5 w-5" />
          Hijri
        </button>
        <button
          className={`${pill} ${view === "gregorian" ? "bg-white/20" : ""}`}
          onClick={() => setView("gregorian")}
        >
          <CalendarDaysIcon className="h-5 w-5" />
          Gregorian
        </button>
        <button
          className={`${pill} ${view === "both" ? "bg-white/20" : ""}`}
          onClick={() => setView("both")}
        >
          <MoonIcon className="h-5 w-5" />
          <CalendarDaysIcon className="h-5 w-5" />
          Both
        </button>
      </div>
      {view === "hijri" && (
        <div className="relative bg-white/10 p-12 rounded-xl border border-white/15 backdrop-blur-3xl">
          <div className="fixed top-4 right-4 transition-all ease-in-out">
            { copied? <CheckIcon className="w-4 h-4" /> : 
            <ClipboardIcon
              className="w-4 h-4 cursor-pointer"
              onClick={handleCopy}
            />
            }
          </div>
          <p ref={dateTextRef}>
            Today's date is{" "}
            <span className="font-bold font-moderno">
              {gregorian.enDayOfWeek}, {hijri.hijriDay} {hijri.month}{" "}
              {hijri.year}AH
            </span>
          </p>
        </div>
      )}
      {view === "gregorian" && (
        <div className="relative bg-white/10 p-12 rounded-xl border border-white/15 backdrop-blur-3xl">
          <div className="fixed top-4 right-4">
            { copied? <CheckIcon className="w-4 h-4" /> : 
            <ClipboardIcon
              className="w-4 h-4 cursor-pointer"
              onClick={handleCopy}
            />
            }
          </div>
          <p ref={dateTextRef}></p>
          <p ref={dateTextRef}>
            Today's date is{" "}
            <span className="font-bold font-moderno">
              {" "}
              {gregorian.enDayOfWeek}, {gregorian.gregorianDate.day}
              th of {gregorian.gregorianDate.monthName}{" "}
              {gregorian.gregorianDate.year}CE
            </span>
          </p>
        </div>
      )}
      {view === "both" && (
        <div className="relative bg-white/10 p-12 rounded-xl border border-white/15 backdrop-blur-3xl">
          <div className="fixed top-4 right-4">
            { copied? <CheckIcon className="w-4 h-4" /> : 
            <ClipboardIcon
              className="w-4 h-4 cursor-pointer"
              onClick={handleCopy}
            />
            }   
          </div>
          <p ref={dateTextRef}>
            Today's date is{" "}
            <span className="font-bold font-moderno uppercase">
              {gregorian.enDayOfWeek}, {hijri.hijriDay} {hijri.month}{" "}
              {hijri.year}AH in correspondent to {gregorian.enDayOfWeek},{" "}
              {gregorian.gregorianDate.day}th of{" "}
              {gregorian.gregorianDate.monthName} {gregorian.gregorianDate.year}
              CE
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default DateView;
