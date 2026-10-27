"use client"
import { useState } from "react";
import Link from "next/link";
import { CalendarIcon, HomeIcon, DocumentIcon, Bars3Icon, CalendarDaysIcon } from "@heroicons/react/24/outline";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isCalendar = pathname === "/calendar";
  const isDocs = pathname === "/docs";

  const [ menuOpen, setMenuOpen ] = useState(true);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex  items-center justify-center overflow-hidden transition-all">
      <div>
        <div onClick={() => setMenuOpen(!menuOpen)}
          className="flex justify-center bg-white/20 p-3 cursor-pointer mb-4 rounded-xl"
          title="Menu"
        >
          <Bars3Icon className="h-6 w-6 " />
        </div>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
          <div className="flex flex-col justify-between h-56 w-16 rounded-2xl border border-white/15 bg-white/10 p-3 text-white backdrop-blur ">
          <Link href={"/"}>
            <div
              className={`flex flex-col items-center justify-center cursor-pointer hover:bg-white/10 ${
                isHome ? "bg-white/10" : ""
              } p-2 rounded-xl`}
              title="Date"
            >
              <HomeIcon className="h-6 w-6 " />
            </div>
              </Link>
            <Link href={"/calendar"}>
            <div
              className={`flex flex-col items-center justify-center cursor-pointer hover:bg-white/10 p-3 rounded-xl ${
                isCalendar ? "bg-white/10" : ""
              }`}
              title="Calendar"
            >
              <CalendarDaysIcon className="h-6 w-6" />
            </div>
              </Link>
            <Link href={"/docs"}>
            <div
              className={`flex flex-col items-center justify-center cursor-pointer hover:bg-white/10 p-3 rounded-xl ${
                isDocs ? "bg-white/10" : ""
              }`}
              title="API"
            >
                <DocumentIcon className="h-6 w-6" />
            </div>
              </Link>
          </div>
          </motion.div >
        )}
      </div>
    </div>
  );
};

export default Navbar;
