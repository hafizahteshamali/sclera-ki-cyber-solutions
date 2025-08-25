import React, { useState } from "react";
import {
  FaCircle,
  FaChevronLeft,
  FaChevronRight,
  FaPlus,
  FaBell,
  FaCog,
  FaBox,
  FaClipboardList,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

const MaintenancePlanner = () => {
  const [activeTab, setActiveTab] = useState("Trends");
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

  // Sample data
  // const tickets = [
  //   { id: "T-012", status: "Offen", machine: "M-001" },
  //   { id: "T-001", status: "In Arbeit", machine: "T-005" },
  //   { id: "T-015", status: "Abgeschlossen", machine: "M-021" },
  //   { id: "T-003", status: "Offen", machine: "T-099" },
  //   { id: "T-011", status: "In Arbeit", machine: "P-003" },
  //   { id: "R-100", status: "Abgeschlossen", machine: "T-011" },
  //   { id: "R-016", status: "Offen", machine: "R-100" },
  // ];

  // Generate calendar days
  const generateCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Get first day of month and total days
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();

    // Get day of week for first day (0 = Sunday, 1 = Monday, etc.)
    const startDay = firstDay.getDay();

    // Previous month days
    const prevMonthLastDay = new Date(year, month, 0).getDate();

    const calendar = [];
    let dayCount = 1;

    // Create calendar rows
    for (let i = 0; i < 6; i++) {
      const week = [];

      // Fill week with days
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < startDay) {
          // Previous month
          week.push(prevMonthLastDay - (startDay - j - 1));
        } else if (dayCount > daysInMonth) {
          // Next month
          week.push(dayCount - daysInMonth);
          dayCount++;
        } else {
          // Current month
          week.push(dayCount);
          dayCount++;
        }
      }

      calendar.push(week);

      // Stop if we've filled all days
      if (dayCount > daysInMonth && i >= 4) break;
    }

    return calendar;
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    if (direction === "prev") {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
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
    <div className="bg-gray-50 h-screen overflow-hidden p-6 font-sans flex flex-col">
      <h1 className="text-3xl font-bold text-black mb-2">Wartungsplaner</h1>

      {/* Filter Buttons and Search Box */}
      <div className="flex justify-between w-full mb-2">
        <div className="flex gap-4 flex-1">
          <button
            onClick={() => toggleAccordion("Werk")}
            className="px-4 py-2 border border-gray-300 rounded-md bg-white text-sm flex justify-between items-center flex-1 min-w-[120px]"
          >
            Werk
            {accordionStates.Werk ? (
              <FaChevronUp className="text-xs text-gray-500" />
            ) : (
              <FaChevronDown className="text-xs text-gray-500" />
            )}
          </button>

          <button
            onClick={() => toggleAccordion("Linie")}
            className="px-4 py-2 border border-gray-300 rounded-md bg-white text-sm flex justify-between items-center flex-1 min-w-[120px]"
          >
            Linie
            {accordionStates.Linie ? (
              <FaChevronUp className="text-xs text-gray-500" />
            ) : (
              <FaChevronDown className="text-xs text-gray-500" />
            )}
          </button>

          <button
            onClick={() => toggleAccordion("Filter")}
            className="px-4 py-2 border border-gray-300 rounded-md bg-white text-sm flex justify-between items-center flex-1 min-w-[120px]"
          >
            Filter
            {accordionStates.Filter ? (
              <FaChevronUp className="text-xs text-gray-500" />
            ) : (
              <FaChevronDown className="text-xs text-gray-500" />
            )}
          </button>
        </div>

        <div className="relative flex w-64 ml-4">
          <input
            type="text"
            placeholder="Suchen"
            className="pl-8 pr-3 py-2 border border-gray-300 rounded-md bg-white w-full outline-none"
          />
          <IoSearchOutline className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
        </div>
      </div>

      {/* Dashboard Cards - Flex Layout */}
      <div className="flex justify-between gap-4 mb-2 overflow-hidden">
        {/* OEE Section - Shows when Werk accordion is open */}
        {accordionStates.Werk && (
          <div className="flex-1 h-32 border border-gray-200 rounded-lg bg-white p-4 flex flex-col justify-between">
            <h1 className="text-xl font-medium">OEE</h1>
            <h1 className="text-4xl font-bold text-black">88%</h1>
          </div>
        )}

        {/* Linie L1 Chart - Shows when Linie accordion is open */}
        {accordionStates.Linie && (
          <div className="w-[24%] h-[130px] border border-gray-200 rounded-lg bg-white gap-2.5 flex flex-col justify-start items-start p-3">
            <div className="text-base text-black flex justify-center items-center gap-3 overflow-hidden">
              <h1 className="text-2xl font-medium">Linie L1</h1>
              <img
                src="/assets/images/dashboard/microscope.svg"
                alt=""
                className="h-15 w-10 object-contain flex justify-center items-center"
              />
            </div>
            <div className="h-full w-full rounded flex items-center justify-center">
              <img
                src="/assets/images/dashboard/linie-img.svg"
                alt=""
                className="h-[100%] w-[100%]"
              />
            </div>
          </div>
        )}

        {/* Systemstatus - Shows when Filter accordion is open */}
        {accordionStates.Filter && (
          <div className="flex-1 h-32 border border-gray-200 rounded-lg bg-white p-4 flex flex-col justify-between">
            <h1 className="text-xl font-medium">Systemstatus</h1>
            <div className="flex justify-between">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  <FaCircle className="text-green-500" />
                  <span className="text-sm">Betrieb</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaCircle className="text-green-500" />
                  <span className="text-sm">Netzwerk</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  <FaCircle className="text-yellow-500" />
                  <span className="text-sm">CPU</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaCircle className="text-green-500" />
                  <span className="text-sm">GPU</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Aktive Alarme - Shows when Filter accordion is open */}
        {accordionStates.Filter && (
          <div className="flex-1 border border-gray-200 rounded-lg bg-white p-4 flex flex-col justify-between">
            <h1 className="text-xl font-medium">aktive Alarme</h1>
            <div className="flex justify-start items-center">
              <h1 className="text-5xl font-bold text-black">06</h1>
            </div>
          </div>
        )}
      </div>

      {/* Main Content Area - Flex Layout */}
      <div className="flex gap-6 overflow-hidden">
        {/* Left Column - Tickets */}
        <div className="flex flex-col w-[50%]">
          <div className="p-4 rounded-lg shadow-sm  w-[100%] h-min bg-white overflow-hidden">
            <div className="flex flex-col justify-start items-start">
              <h2 className="text-2xl font-semibold text-black mb-4 flex items-start">
                Tickets
              </h2>
              <table className="w-full">
                <thead className="">
                  <tr className="">
                    <th className="text-left font-medium text-[13px] text-black">
                      Offen
                    </th>
                    <th className="text-left font-medium text-[13px] text-black">
                      In Arbeit
                    </th>
                    <th className="text-left font-medium text-[13px] text-black">
                      Abgeschlossen
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <td className="p-1">
                      <div className="border border-gray-100 w-max p-1 rounded text-[13px]">
                        T-012
                      </div>
                    </td>
                    <td className="p-1">
                      <div className="border border-gray-100 w-max p-1 rounded text-[13px]">
                        T-012
                      </div>
                    </td>
                    <td className="p-1">
                      <div className="border border-gray-100 w-max p-1 rounded text-[13px]">
                        T-012
                      </div>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="p-1">
                      <div className="border border-gray-100 w-max p-1 rounded text-[13px]">
                        T-001
                      </div>
                    </td>
                    <td className="p-1">
                      <div className="border border-gray-100 w-max p-1 rounded text-[13px]">
                        T-001
                      </div>
                    </td>
                    <td className="p-1">
                      <div className="border border-gray-100 w-max p-1 rounded text-[13px]">
                        T-001
                      </div>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="p-1">
                      <div className="border border-gray-100 w-max p-1 rounded text-[13px]">
                        T-015
                      </div>
                    </td>
                    <td className="p-1">
                      <div className="border border-gray-100 w-max p-1 rounded text-[13px]">
                        T-015
                      </div>
                    </td>
                    <td className="p-1">
                      <div className="border border-gray-100 w-max p-1 rounded text-[13px]">
                        T-015
                      </div>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="p-1">
                      <div className="border border-gray-100 w-max p-1 rounded text-[13px]">
                        T-003
                      </div>
                    </td>
                    <td className="p-1">
                      <div className="border border-gray-100 w-max p-1 rounded text-[13px]">
                        T-003
                      </div>
                    </td>
                    <td className="p-1">
                      <div className="border border-gray-100 w-max p-1 rounded text-[13px]">
                        T-003
                      </div>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="p-1">
                      <div className="border border-gray-100 w-max p-1 rounded text-[13px]">
                        T-011
                      </div>
                    </td>
                    <td className="p-1">
                      <div className="border border-gray-100 w-max p-1 rounded text-[13px]">
                        T-011
                      </div>
                    </td>
                    <td className="p-1">
                      <div className="border border-gray-100 w-max p-1 rounded text-[13px]">
                        T-011
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1">
                      <div className="border border-gray-100 w-max p-1 rounded text-[13px]">
                        R-100
                      </div>
                    </td>
                    <td className="p-1">
                      <div className="border border-gray-100 w-max p-1 rounded text-[13px]">
                        R-100
                      </div>
                    </td>
                    <td className="p-1">
                      <div className="border border-gray-100 w-max p-1 rounded text-[13px]">
                        R-100
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-3 p-5 overflow-hidden bg-white rounded-2xl shadow">
            <h1 className="text-2xl font-bold text-black mb-2">
              Wartungsplaner
            </h1>
            <div className="flex w-full justify-start items-center gap-5">
              <button className="h-[50px] w-[45%] bg-[#1976FB] flex justify-center items-center gap-2 text-white rounded">
                <img
                  src="/assets/images/dashboard/mynaui_ticket.svg"
                  className="h-6 w-6"
                  alt=""
                />
                <span>Ticket erstellen</span>
              </button>

              <button className="h-[50px] w-[45%] bg-[#1976FB] flex justify-center items-center gap-2 text-white rounded">
                <img
                  src="/assets/images/dashboard/mynaui_ticket.svg"
                  className="h-6 w-6"
                  alt=""
                />
                <span>Ticket erstellen</span>
              </button>
            </div>
          </div>
        </div>

        <div className="w-[55%] overflow-hidden">
          <div className="w-[100%] bg-white overflow-hidden">
            {/* Middle Column - Calendar */}
            <div className="flex flex-col w-full py-[30px] px-5 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-semibold text-black">
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

              <div className="flex justify-around items-center text-center text-xs font-medium text-gray-500 mb-2">
                {dayNames.map((day) => (
                  <div key={day} className="flex">
                    {day}
                  </div>
                ))}
              </div>

              <div className="flex flex-col">
                {calendarDays.map((week, weekIndex) => (
                  <div key={weekIndex} className="flex mb-1">
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
                          className={`flex-1 text-center text-sm rounded ${
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
          </div>

          {/* Right Column - Actions & Inventory */}
          <div className="flex flex-col bg-white p-4 rounded-lg shadow-sm my-4">
            <h2 className="text-2xl font-semibold text-black mb-4 flex items-center">
              Teile-/Lagerbestand
            </h2>

            <div className="flex flex-col gap-4">
              <div>
                <h3 className="font-medium text-gray-700 mb-2">
                  Mindestbestände
                </h3>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-[#1976FB] h-4 rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-700 mb-2">
                  Mindestbestände
                </h3>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-[#1976FB] h-4 rounded-full"
                    style={{ width: "0%" }}
                  ></div>
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
