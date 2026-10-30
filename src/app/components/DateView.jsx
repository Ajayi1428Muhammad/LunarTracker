"use client";
import { useState, useRef } from "react";
import {
  CalendarDaysIcon,
  MoonIcon,
  ClipboardIcon,
  CheckIcon,
  ShareIcon,
  CameraIcon
} from "@heroicons/react/24/outline";
import { toBlob } from "html-to-image";

const pill =
  "flex-1 min-w-0 rounded-3xl border-t border-white/40 bg-white/10 px-2 py-2 text-center text-xs sm:text-sm font-medium shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] transition-all duration-300 ease-in-out hover:bg-white/20 focus:outline-none sm:px-3 lg:px-5 flex items-center justify-center gap-2 shrink-0";

const DateView = ({ gregorian, hijri }) => {
  const [view, setView] = useState("hijri");
  const [copied, setCopied] = useState(false);
  const [copyingShot, setCopyingShot] = useState(false);
  const [copiedShot, setCopiedShot] = useState(false);
  
  const cardRef = useRef(null);
  const dateTextRef = useRef(null);
  const siteUrl = "https://lunartracker-ng.vercel.app";
  const siteName = "LunarTracker";

  const handleCopyImage = async () => {
    if (!cardRef.current) return;

    setCopyingShot(true);

    try {
      const blob = await toBlob(cardRef.current, {
        cacheBust: true,
        pixelRatio: 2, 
      });

      if (!blob) throw new Error("Blob generation failed");

      // 2. Write the image directly to the clipboard
      await navigator.clipboard.write([
        new ClipboardItem({ [blob.type]: blob }),
      ]);

      setCopiedShot(true);
      setTimeout(() => setCopiedShot(false), 2500);
    } catch (err) {
      console.error("Failed to copy image to clipboard:", err);
    } finally {
      setCopyingShot(false);
    }
  };
  const getText = () => {
    const visibleText = dateTextRef.current.innerText;
    return `${visibleText} \n\n ©️ ${siteName} (${siteUrl})`;
  }
  const getShareText = () => {
    const visibleText = dateTextRef.current.innerText;
    return `${visibleText} \n\n ©️ ${siteName} \n`;
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(getText());
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleShare = async () => {
    if(navigator.share) {
      try {
        await navigator.share({
          title: siteName,
          text: getShareText(),
          url: siteUrl
        })
      } catch (error) {
        console.error("error sharing:", error);
      }
    } else {
      handleCopy();
    }
  }
  return (
    <div>
      <button
        onClick={handleCopyImage}
        disabled={copyingShot}
        className="flex items-center gap-2 px-4 py-2 bg-white text-black text-xs font-semibold rounded-xl hover:bg-neutral-200 transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
      >
        {copiedShot ? (
          <>
            <CheckIcon className="w-4 h-4 text-emerald-600" />
            <span>Image Copied to Clipboard!</span>
          </>
        ) : (
          <>
            <CameraIcon className="w-4 h-4 text-black" />
            <span>{copyingShot ? "Capturing..." : "Copy Card as Image"}</span>
          </>
        )}
      </button>
      <div
        className="flex flex-col items-center justify-center h-screen p-5"
        ref={cardRef}
      >
        {/* DateHead */}
        <div className="bg-white/10 p-8 rounded-xl mb-3">
          <div className="text-lg font-bold flex justify-center">
            {hijri.arDayOfWeek}
          </div>
          <div className="-mx-6 h-px bg-linear-to-r from-transparent via-white/50 to-transparent my-4 " />
          <h1 className="text-9xl">{hijri.hijriDay}</h1>
        </div>
        {/* DateView */}
        <div className="w-[calc(100%-2rem)]  mx-auto">
          <div className="w-full max-w-full overflow-hidden">
            <div className="flex flex-col">
              <div className="mb-2 grid grid-cols-2 ms:grid-cols-3 w-full items-stretch gap-2 sm:gap-4">
                <button
                  className={`${pill} ${view === "hijri" ? "bg-white/20" : ""}`}
                  onClick={() => setView("hijri")}
                >
                  <MoonIcon className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                  <span className="truncate">Hijri</span>
                </button>
                <button
                  className={`${pill} ${view === "gregorian" ? "bg-white/20" : ""}`}
                  onClick={() => setView("gregorian")}
                >
                  <CalendarDaysIcon className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                  <span className="truncate">Gregorian</span>
                </button>
                <button
                  className={`${pill} ${view === "both" ? "bg-white/20" : ""}`}
                  onClick={() => setView("both")}
                >
                  <MoonIcon className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                  <CalendarDaysIcon className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                  <span className="truncate">Both</span>
                </button>
              </div>
              {view === "hijri" && (
                <div className="relative bg-white/10 p-12 rounded-xl border border-white/15 backdrop-blur-3xl">
                  <div className="fixed top-4 right-4 flex gap-2">
                    <div>
                      <ShareIcon
                        className="w-4 h-4 cursor-pointer"
                        onClick={handleShare}
                        title="Share"
                      />
                    </div>
                    <div className=" transition-all ease-in-out">
                      {copied ? (
                        <CheckIcon className="w-4 h-4" />
                      ) : (
                        <ClipboardIcon
                          className="w-4 h-4 cursor-pointer"
                          onClick={handleCopy}
                          title="Copy to clipboard"
                        />
                      )}
                    </div>
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
                    {copied ? (
                      <CheckIcon className="w-4 h-4" />
                    ) : (
                      <ClipboardIcon
                        className="w-4 h-4 cursor-pointer"
                        onClick={handleCopy}
                      />
                    )}
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
                    {copied ? (
                      <CheckIcon className="w-4 h-4" />
                    ) : (
                      <ClipboardIcon
                        className="w-4 h-4 cursor-pointer"
                        onClick={handleCopy}
                      />
                    )}
                  </div>
                  <p ref={dateTextRef}>
                    Today's date is{" "}
                    <span className="font-bold font-moderno uppercase">
                      {gregorian.enDayOfWeek}, {hijri.hijriDay} {hijri.month}{" "}
                      {hijri.year}AH in correspondent to {gregorian.enDayOfWeek}
                      , {gregorian.gregorianDate.day}th of{" "}
                      {gregorian.gregorianDate.monthName}{" "}
                      {gregorian.gregorianDate.year}
                      CE
                    </span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateView;
