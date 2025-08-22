import React from "react";
import {
  FaCircle,
} from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import {
  maschinenData,
  WerkOverviewFilterData,
} from "../../../assets/ConstantData";
import { MdError } from "react-icons/md";

const WerkOverview = () => {
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <div className="mx-auto p-6">
        {/* Header */}
        <h1 className="text-5xl font-[500] text-[var(--black-color)] overflow-hidden my-4">
          Werk-Overview
        </h1>

        {/* Zu Tickets Section */}
        <div className="flex justify-start items-center gap-3 mb-4">
          <div className="bg-blue-500 px-4 py-1 flex justify-center rounded items-center">
            <h3 className="text-lg font-[400] text-white">Zu Tickets</h3>
          </div>
          <div className="bg-blue-500 px-4 py-1 flex justify-center rounded items-center">
            <h3 className="text-lg font-[400] text-white">Zu Trends</h3>
          </div>
        </div>

        <div className="flex flex-row gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-4 flex-grow lg:w-2/3">
            <div className="bg-white rounded-lg shadow py-5 px-6 flex flex-col gap-5">
              {/* Filter Section */}
              <div className="flex justify-between items-center">
                <div className="bg-gray-50 px-4 py-2 rounded-lg flex justify-start items-center gap-3 w-[78%]">
                  <IoFilter className="text-2xl font-[400] text-gray-800" />
                  <h3 className="font-medium text-gray-800 flex items-center">
                    Filter
                  </h3>
                </div>

                <div className="bg-gray-50 px-4 py-2 rounded-lg flex justify-start items-center gap-3 w-[20%]">
                  <LuCalendarDays className="text-2xl font-[400] text-gray-800" />
                  <h3 className="font-medium text-gray-800 flex items-center">
                    Date
                  </h3>
                </div>
              </div>

              <div className="flex justify-between items-center">
                {WerkOverviewFilterData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex-grow bg-gray-100 rounded-lg p-5 flex flex-col justify-center items-center gap-2 mr-4 last:mr-0"
                    >
                      <p className="text-[16px] font-[400] text-[var(--black-color)] w-full">
                        {item.text}
                      </p>
                      <h1 className="text-5xl font-[500] text-[var(--black-color)] w-full">
                        {item.num}
                      </h1>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Maschinenliste Section */}
            <div className="pt-4 rounded-t-lg lg:w-full bg-[var(--white-color)]">
              {/* Header with filter options */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 px-5">
                <h2 className="font-[400] text-xl mb-2 sm:mb-0">
                  Maschinenliste (Ampel)
                </h2>
                <div className="flex space-x-3 items-center">
                  <select className="rounded p-2 bg-[#F8F8F8] text-sm flex justify-between items-center">
                    <option>Stat: Alle</option>
                  </select>
                  <select className="rounded p-2 bg-[#F8F8F8] text-sm flex justify-between items-center">
                    <option>Ringe: Alle</option>
                  </select>
                </div>
              </div>

              {/* Table header */}
              <div className="">
                {/* Table Header */}
                <div className="hidden sm:flex text-sm text-[var(--black-color)] bg-[#F8F8F8] mb-2 py-2 px-3">
                  <div className="w-2/5 text-[16px]">Maschinenliste</div>
                  <div className="w-1/5 text-[16px]">Status</div>
                  <div className="w-1/5 text-[16px]">OEE</div>
                  <div className="w-1/5 text-[16px]">Anomalie-Score</div>
                </div>

                {/* Table Rows */}
                <div className="flex flex-col">
                {maschinenData.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col sm:flex-row text-sm py-3 px-3 shadow"
                    >
                      <div className="w-full sm:w-2/5 font-medium">
                        {item.name}
                      </div>
                      <div
                        className={`w-full sm:w-1/5 text-${item.statusColor}-600 flex items-center`}
                      >
                        <FaCircle className={`text-[13px] text-${item.statusColor}-500 mr-1`} />
                        {item.status}
                      </div>
                      <div className="w-full sm:w-1/5">{item.oee}</div>
                      <div className="w-full sm:w-1/5">{item.anomaly}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-3 lg:w-1/3">
            {/* Berichte & Trends Section */}
            <div className="bg-white rounded-lg shadow px-5 py-3.5">
              <div>
              <h2 className="text-xl font-semibold text-[var(--black-color)] mb-4">
                Berichte & Trends
              </h2>
                <img src="/assets/images/dashboard/chart.svg" className="object-contain" alt="" />
              </div>
            </div>

            {/* Berichte & Trends Section */}
            <div className="bg-white rounded-lg shadow px-5 py-3.5">
              <div>
              <h2 className="text-xl font-semibold text-[var(--black-color)] mb-4">
              KI-Modell Status
              </h2>
                <img src="/assets/images/dashboard/flow.svg" className="object-contain mx-auto" alt="" />
              </div>
            </div>

            <div className="flex justify-between items-center">
              {/* Letzte Alarme Section */}
            <div className="bg-white rounded-lg shadow p-3 w-[48%]">
              <div className="bg-gray-50 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                Letzte Alarme
              </h2>
              
                <ul className="space-y-2">
                  <li className="flex items-center text-[var(--black-color)]">
                  <MdError className="mr-2 text-red-500" />{" "}
                    Überhitzung
                  </li>
                  <li className="flex items-center text-[var(--black-color)]">
                    <MdError className="mr-2 text-red-500" />{" "}
                    Stromausfall
                  </li>
                  <li className="flex items-center text-[var(--black-color)]">
                    <MdError className="mr-2 text-red-500" /> CPU
                  </li>
                </ul>
              </div>
            </div>

            {/* Letzte Alarme Section */}
            <div className="bg-white rounded-lg shadow p-3 w-[48%]">
              <div className="bg-gray-50 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
              Systemstatus
              </h2>
              
                <ul className="space-y-2">
                  <li className="flex items-center text-[var(--black-color)]">
                    <FaCircle className="mr-2 text-green-500" />{" "}
                    Betrieb
                  </li>
                  <li className="flex items-center text-[var(--black-color)]">
                    <FaCircle className="mr-2 text-green-500" />{" "}
                    Wartung fällig
                  </li>
                  <li className="flex items-center text-[var(--black-color)]">
                    <FaCircle className="mr-2 text-yellow-500" />{" "}
                    CPU
                  </li>
                </ul>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WerkOverview;
