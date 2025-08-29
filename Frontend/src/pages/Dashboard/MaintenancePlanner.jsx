import React, { useState } from "react";
import {
  FaCircle,
  FaChevronLeft,
  FaChevronRight,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const MaintenancePlanner = () => {
  const [accordionStates, setAccordionStates] = useState({
    Werk: true,
    Linie: true,
    Filter: true,
  });

  const toggleAccordion = (section) => {
    setAccordionStates((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const [currentDate, setCurrentDate] = useState(new Date(2025, 7, 1)); // August 2025

  // Calendar logic
  const generateCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDay = firstDay.getDay();
    const prevMonthLastDay = new Date(year, month, 0).getDate();

    const calendar = [];
    let dayCount = 1;

    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < startDay) {
          week.push(prevMonthLastDay - (startDay - j - 1));
        } else if (dayCount > daysInMonth) {
          week.push(dayCount - daysInMonth);
          dayCount++;
        } else {
          week.push(dayCount);
          dayCount++;
        }
      }
      calendar.push(week);
      if (dayCount > daysInMonth && i >= 4) break;
    }
    return calendar;
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    if (direction === "prev") newDate.setMonth(newDate.getMonth() - 1);
    else newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  const calendarDays = generateCalendar();
  const monthNames = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ];
  const dayNames = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];

  return (
    <div className="bg-gray-50 lg:h-screen lg:overflow-hidden p-4 md:p-6 font-sans flex flex-col">
      <h1 className="text-2xl md:text-3xl font-bold text-black mb-2">
        Wartungsplaner
      </h1>

      {/* Filter Buttons + Search */}
      <div className="flex flex-col lg:flex-row lg:justify-between w-full mb-2 gap-3">
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 w-full lg:w-[75%]">
          {["Werk", "Linie", "Filter"].map((btn) => (
            <button
              key={btn}
              onClick={() => toggleAccordion(btn)}
              className="px-4 py-2 border border-gray-300 rounded-md bg-white text-sm flex justify-between items-center w-full sm:w-[48%] lg:w-[32%] hover:shadow-md transition"
            >
              {btn}
              {accordionStates[btn] ? (
                <FaChevronUp className="text-xs text-gray-500" />
              ) : (
                <FaChevronDown className="text-xs text-gray-500" />
              )}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative flex w-full sm:w-[70%] md:w-[50%] lg:w-[23%]">
          <input
            type="text"
            placeholder="Suchen"
            className="pl-8 pr-3 py-2 border border-gray-300 rounded-md bg-white w-full outline-none"
          />
          <IoSearchOutline className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
        </div>
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-2 overflow-hidden">
        {accordionStates.Werk && (
          <div className="h-[120px] border border-gray-200 rounded-lg bg-white p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition">
            <h1 className="text-lg md:text-xl font-medium">OEE</h1>
            <h1 className="text-3xl md:text-4xl font-bold text-black">88%</h1>
          </div>
        )}

        {accordionStates.Linie && (
          <div className="h-[120px] border border-gray-200 rounded-lg bg-white p-3 flex flex-col shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-xl md:text-2xl font-medium">Linie L1</h1>
              <img
                src="/assets/images/dashboard/microscope.svg"
                alt=""
                className="h-8 w-8 object-contain"
              />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <img
                src="/assets/images/dashboard/linie-img.svg"
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        )}

        {accordionStates.Filter && (
          <div className="h-[120px] border border-gray-200 rounded-lg bg-white p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition">
            <h1 className="text-lg md:text-xl font-medium">Systemstatus</h1>
            <div className="flex justify-between text-sm">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  <FaCircle className="text-green-500" />
                  <span>Betrieb</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaCircle className="text-green-500" />
                  <span>Netzwerk</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  <FaCircle className="text-yellow-500" />
                  <span>CPU</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaCircle className="text-green-500" />
                  <span>GPU</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {accordionStates.Filter && (
          <div className="h-[120px] border border-gray-200 rounded-lg bg-white p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition">
            <h1 className="text-lg md:text-xl font-medium">aktive Alarme</h1>
            <div className="flex items-center">
              <h1 className="text-4xl md:text-5xl font-bold text-black">06</h1>
            </div>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Tickets Column */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="p-4 rounded-lg shadow-sm bg-white">
            <h2 className="text-xl font-semibold text-black mb-2">
              Tickets
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="text-left font-medium text-black">Offen</th>
                    <th className="text-left font-medium text-black">
                      In Arbeit
                    </th>
                    <th className="text-left font-medium text-black">
                      Abgeschlossen
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {["T-012", "T-001", "T-015", "T-003", "T-011", "R-100"].map(
                    (ticket) => (
                      <tr key={ticket}>
                        <td className="p-1">
                          <div className="border border-gray-100 w-max p-1 rounded">
                            {ticket}
                          </div>
                        </td>
                        <td className="p-1">
                          <div className="border border-gray-100 w-max p-1 rounded">
                            {ticket}
                          </div>
                        </td>
                        <td className="p-1">
                          <div className="border border-gray-100 w-max p-1 rounded">
                            {ticket}
                          </div>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Buttons */}
          <div className="p-5 bg-white rounded-lg shadow flex flex-col sm:flex-row gap-3">
            <button className="h-12 flex-1 bg-[#1976FB] flex justify-center items-center gap-2 text-white rounded hover:bg-blue-600 transition">
              <img
                src="/assets/images/dashboard/mynaui_ticket.svg"
                className="h-6 w-6"
                alt=""
              />
              <span>Ticket erstellen</span>
            </button>
            <button className="h-12 flex-1 bg-[#1976FB] flex justify-center items-center gap-2 text-white rounded hover:bg-blue-600 transition">
              <img
                src="/assets/images/dashboard/mynaui_ticket.svg"
                className="h-6 w-6"
                alt=""
              />
              <span>Ticket erstellen</span>
            </button>
          </div>
        </div>

        {/* Calendar + Inventory */}
        <div className="w-full lg:w-1/2 flex flex-col gap-2">
          {/* Calendar */}
          <div className="bg-white p-5 rounded-lg shadow overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-semibold text-black">
                Wochenkalender
              </h2>
              <div className="flex items-center">
                <button
                  onClick={() => navigateMonth("prev")}
                  className="p-1 text-gray-500 hover:text-gray-700"
                >
                  <FaChevronLeft />
                </button>
                <span className="mx-2 font-medium">
                  {monthNames[currentDate.getMonth()]}{" "}
                  {currentDate.getFullYear()}
                </span>
                <button
                  onClick={() => navigateMonth("next")}
                  className="p-1 text-gray-500 hover:text-gray-700"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 text-left text-xs font-medium text-gray-500 mb-2">
              {dayNames.map((day) => (
                <div key={day}>{day}</div>
              ))}
            </div>

            <div className="flex flex-col gap-1">
              {calendarDays.map((week, weekIndex) => (
                <div key={weekIndex} className="grid grid-cols-7 gap-1">
                  {week.map((day, dayIndex) => {
                    const isCurrentMonth =
                      weekIndex > 0 ||
                      dayIndex >=
                        new Date(
                          currentDate.getFullYear(),
                          currentDate.getMonth(),
                          1
                        ).getDay();
                    const isToday =
                      day === new Date().getDate() &&
                      currentDate.getMonth() === new Date().getMonth() &&
                      currentDate.getFullYear() === new Date().getFullYear();

                    return (
                      <div
                        key={dayIndex}
                        className={`py-1 text-sm rounded ${
                          isToday
                            ? "bg-blue-100 text-blue-600 font-medium"
                            : isCurrentMonth
                            ? "text-gray-700"
                            : "text-gray-400"
                        }`}
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Inventory */}
          <div className="bg-white p-3 rounded-lg shadow overflow-hidden">
            <h2 className="text-xl font-semibold text-black mb-4">
              Teile-/Lagerbestand
            </h2>
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="font-medium text-black mb-1">Mindestbestände</h3>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <motion.div
                    className="bg-[#1976FB] h-4 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "65%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-black mb-1">Reservierungen</h3>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <motion.div
                    className="bg-[#1976FB] h-4 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "40%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePlanner;
