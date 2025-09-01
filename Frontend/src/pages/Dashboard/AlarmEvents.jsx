import React from "react";
import { FaSearch } from "react-icons/fa";
import { events } from "../../assets/ConstantData";

const AlarmEvents = () => {
  const getSeverityColor = (severity) => {
    switch (severity) {
      case "Kritisch":
        return "bg-[#DC3545] text-[#FCFDFF]";
      case "Hoch":
        return "bg-[#FBB629] text-black";
      case "Medium":
        return "bg-[#FBB629] text-black";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  // Text truncation helper
  const truncateText = (text, size) => {
    if (!text) return "";
    if (text.length <= size) return text;
    return text.slice(0, size) + "...";
  };

  // Column headers from first object
  const columns = events.length > 0 ? Object.keys(events[0]) : [];

  return (
    <div className="rounded-lg p-4 sm:p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:gap-6 mb-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
          Alarme & Events
        </h1>

        {/* Actions */}
        <div className="flex flex-col lg:flex-row justify-between items-stretch gap-4 w-full">
          {/* Left Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-1/2">
            <button className="bg-[#1976FB] hover:bg-blue-600 text-white font-[400] h-[40px] sm:h-[45px] lg:h-[50px] text-sm lg:text-base w-full lg:w-[40%] flex justify-center items-center rounded-md transition-colors">
              Bulk Ack
            </button>
            <button className="bg-[#FCFDFF] hover:bg-gray-100 text-black border border-gray-300 font-[400] h-[40px] sm:h-[45px] lg:h-[50px] text-sm lg:text-base w-full lg:w-[40%] flex justify-center items-center rounded-md transition-colors">
              CSV Export
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-1/3">
            <input
              type="text"
              placeholder="Suchen"
              className="pl-10 pr-4 w-full py-2 border border-gray-300 rounded-md bg-[#FCFDFF] focus:outline-none text-sm lg:text-base"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Table Wrapper */}
      <div className="border border-gray-300 rounded-xl overflow-hidden">
        <table className="w-full bg-[#FCFDFF] table-fixed">
          <thead className="bg-gray-100">
            <tr className="text-sm lg:text-base">
              {columns.map((col, i) => (
                <th
                  key={i}
                  className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 lg:py-5 text-left font-[600] text-black"
                >
                  {col.charAt(0).toUpperCase() + col.slice(1)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {events.map((event, rowIndex) => (
              <tr
                key={rowIndex}
                className="hover:bg-gray-50 border-t border-gray-300 text-sm lg:text-base"
              >
                {columns.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 lg:py-4 break-words text-black"
                  >
                    {col === "severity" ? (
                      <span
                        className={`w-full block text-center py-1 rounded font-medium ${getSeverityColor(
                          event[col]
                        )}`}
                      >
                        {event[col]}
                      </span>
                    ) : (
                      <>
                        {/* Small screen truncate */}
                        <span className="block sm:hidden">
                          {truncateText(event[col], 15)}
                        </span>
                        {/* Medium screen truncate */}
                        <span className="hidden sm:block md:hidden">
                          {truncateText(event[col], 30)}
                        </span>
                        {/* Large screen full text */}
                        <span className="hidden md:block">{event[col]}</span>
                      </>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AlarmEvents;
