import React from "react";
import {
  FaFilePdf,
  FaFileCsv,
  FaCalendarAlt,
  FaCog,
  FaChartLine,
  FaWrench,
  FaBell,
  FaExclamationTriangle,
  FaEnvelope,
  FaSearch,
  FaRegFileAlt,
} from "react-icons/fa";
import { HiArrowDownTray } from "react-icons/hi2";
import { IoMdMail } from "react-icons/io";

const Reports = () => {
  const predefinedReports = [
    {
      title: "OEE by Line",
      icon: <FaChartLine className="text-blue-500" />,
      formats: ["PDF", "CSV"],
    },
    {
      title: "MTBF/MTTR",
      icon: <FaWrench className="text-green-500" />,
      formats: ["PDF", "CSV"],
    },
    {
      title: "Alarmhäufigkeit",
      icon: <FaBell className="text-red-500" />,
      formats: ["PDF", "CSV"],
    },
    {
      title: "Top-Ursachen",
      icon: <FaExclamationTriangle className="text-yellow-500" />,
      formats: ["PDF", "CSV"],
    },
  ];

  return (
    <div className="p-6 w-full mx-auto !h-screen overflow-hidden">
      {/* Header with search */}
      <div className="flex justify-between items-center mb-5 overflow-hidden">
        <h1 className="text-4xl font-bold text-gray-800">Berichte</h1>
        <div className="relative w-[35%]">
          <input
            type="text"
            placeholder="Suchen"
            className="pl-10 pr-4 w-full py-2 border border-gray-300 rounded-md focus:outline-none bg-white"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      {/* Vordefiniert Section */}
      <div className="bg-white p-5 rounded-xl">
        <h2 className="text-3xl font-[400] text-black mb-4">Vordefiniert</h2>
        <div className="flex flex-wrap justify-between -mx-2">
          {predefinedReports.map((report, index) => (
            <div key={index} className="w-full md:w-[24%] px-2 mb-4">
              <div className="border border-gray-200 rounded-lg p-4 h-full bg-[#F9F9FB]">
                <div className="flex items-center mb-3">
                  <h3 className="font-medium text-black text-xl">
                    {report.title}
                  </h3>
                </div>
                <div className="flex space-x-3">
                  {report.formats.map((format, idx) => (
                    <button
                      key={idx}
                      className={`flex justify-center items-center gap-2 text-sm h-[35px] w-[45%] rounded-md ${
                        format == "PDF"
                          ? "bg-[#1976FB] text-white hover:bg-[#1977fbe3]"
                          : "bg-[#FCFDFF] text-black border border-gray-300 hover:bg-gray-200"
                      } transition-colors`}
                    >
                      <HiArrowDownTray className="text-xl" />
                      {format}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benutzerdefinierter Berichtsgenerator Section */}
        <div className="my-4">
          <h2 className="text-3xl font-[400] text-black mb-4">
            Benutzerdefinierter Berichtsgenerator
          </h2>
          <div className="flex w-full flex-wrap justify-start items-center min-h-[200px] bg-[#F9F9FB] p-2 border border-gray-300 rounded-lg">
            <div className="w-full md:w-1/3 p-5">
              <h2 className="text-2xl font-[400]">Spalten</h2>
              <input
                type="text"
                className="h-[45px] w-full rounded border border-gray-300 mt-5 outline-none px-5"
              />
            </div>

            <div className="w-full md:w-1/3 p-5">
              <h2 className="text-2xl font-[400]">Gruppen</h2>
              <input
                type="text"
                className="h-[45px] w-full rounded border border-gray-300 mt-5 outline-none px-5"
              />
            </div>

            <div className="w-full md:w-1/3 p-5">
              <h2 className="text-2xl font-[400]">Zeitraum</h2>
              <input
                type="text"
                className="h-[45px] w-full rounded border border-gray-300 mt-5 outline-none px-5"
              />
            </div>

            <div className="w-full p-5">
              <button className="h-[45px] w-full md:w-[25%] rounded bg-[#1976FB] text-white">
                Erzeugen
              </button>
            </div>
          </div>
        </div>

        {/* Export Section */}
        <div>
          <h2 className="text-3xl font-[500] text-black mb-4">Export</h2>
          <div className="flex flex-wrap gap-4">
            <button className="flex justify-center gap-2 w-full md:w-[30%] text-xl h-[50px] items-center bg-[#1976FB] hover:bg-[#1565c0] text-white py-2 px-4 rounded-md transition-colors">
              <FaRegFileAlt className="text-2xl font-bold" />
              PDF
              <HiArrowDownTray className="text-2xl font-bold" />
            </button>
            <button className="flex justify-center gap-2 w-full md:w-[30%] text-xl h-[50px] items-center bg-[#F9F9FB] hover:bg-[#e8e8eb] text-black py-2 px-4 rounded-md transition-colors border border-gray-300">
              <img
                src="/assets/images/dashboard/csv.svg"
                alt="CSV Icon"
                className="w-6 h-6"
              />
              CSV
              <HiArrowDownTray className="text-2xl font-bold" />
            </button>
            <button className="flex justify-center gap-2 w-full md:w-[30%] text-xl h-[50px] items-center bg-[#F9F9FB] hover:bg-[#e8e8eb] text-black py-2 px-4 rounded-md transition-colors border border-gray-300">
              <IoMdMail className="text-2xl font-bold" />
              E-Mail-Planung
              <HiArrowDownTray className="text-2xl font-bold" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
