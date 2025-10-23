"use client"

import { useState } from "react"
import { FaCircle, FaChevronDown, FaChevronUp } from "react-icons/fa"
import { IoSearchOutline } from "react-icons/io5"
import { machinesTableHeadingName } from "../../assets/ConstantData"

const LineMachines = () => {
  const [activeTab, setActiveTab] = useState("Trends")
  const [accordionStates, setAccordionStates] = useState({
    Werk: true,
    Linie: true,
    Filter: true,
  })

  const toggleAccordion = (section) => {
    setAccordionStates((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const machineData = [
    {
      line: "L1",
      machine: "Pressmaschine 1",
      status: "Ok",
      oee: 95,
      anomalie: 0.05,
      lastMaintenance: "25.05.2025",
      nextMaintenance: "25.05.2026",
      action: null,
    },
    {
      line: "L2",
      machine: "Pressmaschine 2",
      status: "Warnung",
      oee: 80,
      anomalie: 0.12,
      lastMaintenance: "05.12.2024",
      nextMaintenance: "05.12.2025",
      action: null,
    },
    {
      line: "L3",
      machine: "Extruder 1",
      status: "Warnung",
      oee: 70,
      anomalie: 0.16,
      lastMaintenance: "22.09.2024",
      nextMaintenance: "22.09.2025",
      action: null,
    },
    {
      line: "L3",
      machine: "Spritzgießmaschine",
      status: "Kritisch",
      oee: 55,
      anomalie: 0.25,
      lastMaintenance: "15.01.2024",
      nextMaintenance: "15.01.2025",
      action: null,
    },
    {
      line: "L3",
      machine: "Montagelinie 1",
      status: "Ok",
      oee: 90,
      anomalie: 0.04,
      lastMaintenance: "30.01.2025",
      nextMaintenance: "30.01.2026",
      action: null,
    },
    {
      line: "L3",
      machine: "Abfüllanlage",
      status: "Alarm",
      oee: 44,
      anomalie: 0.28,
      lastMaintenance: "09.12.2023",
      nextMaintenance: "09.12.2024",
      action: "Alarm",
    },
    {
      line: "L2",
      machine: "Montagelinie 2",
      status: "Ok",
      oee: 95,
      anomalie: 0.05,
      lastMaintenance: "25.05.2025",
      nextMaintenance: "25.05.2026",
      action: null,
    },
    {
      line: "L2",
      machine: "Förderband",
      status: "Ok",
      oee: 98,
      anomalie: 0.03,
      lastMaintenance: "13.08.2025",
      nextMaintenance: "13.08.2026",
      action: null,
    },
  ]

  const getTruncatedText = (text, maxLength) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + "..."
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Ok":
        return "#ffffff"
      case "Warnung":
        return "#ffffff"
      case "Kritisch":
        return "#ffffff"
      case "Alarm":
        return "#ffffff"
      default:
        return "#ffffff"
    }
  }

  const getStatusBg = (status) => {
    switch (status) {
      case "Ok":
        return "#28A745"
      case "Warnung":
        return "#FFC107"
      case "Kritisch":
        return "#DC3545"
      case "Alarm":
        return "#DC3545"
      default:
        return "#6b7280"
    }
  }

  // Responsive heading names based on screen size
  const getResponsiveHeading = (heading) => {
    switch(heading) {
      case "Linie":
        return "Linie"
      case "Maschine":
        return window.innerWidth < 640 ? "Masch." : "Maschine"
      case "Status":
        return "Status"
      case "OEE %":
        return window.innerWidth < 640 ? "OEE%" : "OEE %"
      case "Anomalie":
        return window.innerWidth < 640 ? "Anom." : "Anomalie"
      case "Letzte Wartung":
        return window.innerWidth < 640 ? "Letzte" : window.innerWidth < 768 ? "Letzte W." : "Letzte Wartung"
      case "Nächste Wartung":
        return window.innerWidth < 640 ? "Nächste" : window.innerWidth < 768 ? "Nächste W." : "Nächste Wartung"
      case "Aktion":
        return "Aktion"
      default:
        return heading
    }
  }

  return (
    <div className="font-sans bg-slate-50 h-screen p-2 flex flex-col mt-1.5">
      {/* Header */}
      <div className="flex-shrink-0">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">Linien & Maschinen</h1>

        <div className="flex flex-col sm:flex-row justify-between w-full p-1 mb-2 gap-2 sm:gap-0">
          <div className="flex flex-row gap-1 sm:gap-2 w-full sm:w-[72%]">
            <button
              onClick={() => toggleAccordion("Werk")}
              className="px-2 sm:px-3 md:px-4 py-2 border border-gray-300 rounded-md bg-white text-xs sm:text-sm flex justify-between items-center gap-1 sm:gap-2 flex-1 sm:w-[32%]"
            >
              <span className="truncate">Werk</span>
              {accordionStates.Werk ? (
                <FaChevronUp className="text-xs text-gray-500 flex-shrink-0" />
              ) : (
                <FaChevronDown className="text-xs text-gray-500 flex-shrink-0" />
              )}
            </button>

            <button
              onClick={() => toggleAccordion("Linie")}
              className="px-2 sm:px-3 md:px-4 py-2 border border-gray-300 rounded-md bg-white text-xs sm:text-sm flex justify-between items-center gap-1 sm:gap-2 flex-1 sm:w-[32%]"
            >
              <span className="truncate">Linie</span>
              {accordionStates.Linie ? (
                <FaChevronUp className="text-xs text-gray-500 flex-shrink-0" />
              ) : (
                <FaChevronDown className="text-xs text-gray-500 flex-shrink-0" />
              )}
            </button>

            <button
              onClick={() => toggleAccordion("Filter")}
              className="px-2 sm:px-3 md:px-4 py-2 border border-gray-300 rounded-md bg-white text-xs sm:text-sm flex justify-between items-center gap-1 sm:gap-2 flex-1 sm:w-[32%]"
            >
              <span className="truncate">Filter</span>
              {accordionStates.Filter ? (
                <FaChevronUp className="text-xs text-gray-500 flex-shrink-0" />
              ) : (
                <FaChevronDown className="text-xs text-gray-500 flex-shrink-0" />
              )}
            </button>
          </div>

          <div className="relative flex w-full sm:w-[25%]">
            <input
              type="text"
              placeholder="Suchen"
              className="pl-8 pr-3 py-2 border border-gray-300 rounded-md bg-white w-full outline-none text-xs sm:text-sm"
            />
            <IoSearchOutline className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 text-lg sm:text-2xl" />
          </div>
        </div>
      </div>

      {/* Main Dashboard with Accordions */}
      <div className="flex flex-col overflow-hidden">
        {/* Content with Flex Layout */}
        <div className="flex flex-col gap-2 sm:gap-3 mb-2 sm:mb-3 flex-1 overflow-hidden">
          <div className="flex flex-col sm:flex-row justify-start items-stretch w-full flex-shrink-0 gap-2 sm:gap-3 md:gap-5">
            {/* OEE Section - Shows when Werk accordion is open */}
            {accordionStates.Werk && (
              <div className="w-full sm:w-[24%] h-[100px] sm:h-[130px] border border-gray-200 rounded-lg bg-white gap-1 sm:gap-2.5 flex flex-col justify-start items-start p-2 sm:p-3">
                <h1 className="text-lg sm:text-xl md:text-2xl font-medium">OEE</h1>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black overflow-hidden">88%</h1>
              </div>
            )}

            {/* Linie L1 Chart - Shows when Linie accordion is open */}
            {accordionStates.Linie && (
              <div className="w-full sm:w-[24%] h-[100px] sm:h-[130px] border border-gray-200 rounded-lg bg-white gap-1 sm:gap-2.5 flex flex-col justify-start items-start p-2 sm:p-3">
                <div className="text-base text-black flex justify-center items-center gap-2 sm:gap-3 overflow-hidden">
                  <h1 className="text-lg sm:text-xl md:text-2xl font-medium">Linie L1</h1>
                  <img
                    src="/predictive-maintainance/assets/images/dashboard/microscope.svg"
                    alt=""
                    className="h-8 sm:h-10 md:h-15 w-6 sm:w-8 md:w-10 object-contain flex justify-center items-center"
                  />
                </div>
                <div className="h-full w-full rounded flex items-center justify-center">
                  <img src="/predictive-maintainance/assets/images/dashboard/chart.png" alt="" className="h-[100%] w-[100%]" />
                </div>
              </div>
            )}

            {/* Systemstatus & Tickets - Shows when Filter accordion is open */}
            {accordionStates.Filter && (
              <>
                <div className="w-full sm:w-[24%] h-[100px] sm:h-[130px] border border-gray-200 rounded-lg bg-white gap-1 flex flex-col justify-around items-start p-2 sm:p-3">
                  <h1 className="text-lg sm:text-xl md:text-2xl font-medium">Systemstatus</h1>
                  <div className="flex justify-between items-center w-full mb-1 sm:mb-2">
                    <div className="flex items-center gap-1">
                      <FaCircle className="text-green-500 text-xs sm:text-sm" />
                      <h3 className="text-xs sm:text-sm">Betrieb</h3>
                    </div>

                    <div className="flex items-center gap-1">
                      <FaCircle className="text-yellow-500 text-xs sm:text-sm" />
                      <h3 className="text-xs sm:text-sm">CPU</h3>
                    </div>
                  </div>

                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-1">
                      <FaCircle className="text-green-500 text-xs sm:text-sm" />
                      <h3 className="text-xs sm:text-sm">Netzwerk</h3>
                    </div>

                    <div className="flex items-center gap-1">
                      <FaCircle className="text-green-500 text-xs sm:text-sm" />
                      <h3 className="text-xs sm:text-sm">GPU</h3>
                    </div>
                  </div>
                </div>

                <div className="w-full sm:w-[24%] h-[100px] sm:h-[130px] border border-gray-200 rounded-lg bg-white gap-1 flex flex-col justify-around items-start p-2 sm:p-3">
                  <h1 className="text-lg sm:text-xl md:text-2xl font-medium">Tickets</h1>
                  <div className="w-full flex justify-between items-center overflow-hidden">
                    <ul className="flex flex-col gap-1 sm:gap-2">
                      <li className="text-[10px] font-medium">Offen</li>
                      <li className="text-[10px] font-medium">In Arbeit</li>
                      <li className="text-[10px] font-medium">Abgeschlossen</li>
                    </ul>

                    <ul className="flex flex-col gap-1 sm:gap-2">
                      <li className="text-[10px] font-normal">Extruder 1</li>
                      <li className="text-[10px] font-normal">Filterproblem</li>
                      <li className="text-[10px] font-normal">Ventilproblem</li>
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="flex-1 overflow-x-auto">
            <div className="min-w-full">
              <table className="w-full border-collapse text-sm bg-white">
                <thead>
                  <tr className="border border-gray-100">
                    {machinesTableHeadingName.map((head, index) => (
                      <th 
                        key={index} 
                        className="p-1 sm:p-2 text-left font-semibold text-gray-700 border border-gray-100 text-[10px] sm:text-[13px] whitespace-nowrap"
                        title={head} // Full text on hover
                      >
                        {/* Responsive heading text */}
                        {head === "Linie" && "Linie"}
                        {head === "Maschine" && (
                          <>
                            <span className="hidden sm:inline">Maschine</span>
                            <span className="sm:hidden">Masch.</span>
                          </>
                        )}
                        {head === "Status" && "Status"}
                        {head === "OEE %" && (
                          <>
                            <span className="hidden sm:inline">OEE %</span>
                            <span className="sm:hidden">OEE%</span>
                          </>
                        )}
                        {head === "Anomalie" && (
                          <>
                            <span className="hidden md:inline">Anomalie</span>
                            <span className="md:hidden hidden sm:inline">Anom.</span>
                            <span className="sm:hidden">Anom</span>
                          </>
                        )}
                        {head === "Letzte Wartung" && (
                          <>
                            <span className="hidden lg:inline">Letzte Wartung</span>
                            <span className="lg:hidden hidden md:inline">Letzte W.</span>
                            <span className="md:hidden hidden sm:inline">L. Wart.</span>
                            <span className="sm:hidden">Letzte</span>
                          </>
                        )}
                        {head === "Nächste Wartung" && (
                          <>
                            <span className="hidden lg:inline">Nächste Wartung</span>
                            <span className="lg:hidden hidden md:inline">Nächste W.</span>
                            <span className="md:hidden hidden sm:inline">N. Wart.</span>
                            <span className="sm:hidden">Nächste</span>
                          </>
                        )}
                        {head === "Aktion" && "Aktion"}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {machineData.slice(0, 6).map((row, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="p-1 sm:p-2 border border-gray-100 text-[10px] sm:text-[13px]">{row.line}</td>
                      <td className="p-1 sm:p-2 border border-gray-100 text-[10px] sm:text-[13px] truncate" title={row.machine}>
                        <span className="hidden lg:inline">{row.machine}</span>
                        <span className="lg:hidden hidden md:inline">{getTruncatedText(row.machine, 12)}</span>
                        <span className="md:hidden hidden sm:inline">{getTruncatedText(row.machine, 8)}</span>
                        <span className="sm:hidden">{getTruncatedText(row.machine, 6)}</span>
                      </td>
                      <td className="p-1 sm:p-2 border border-gray-100 text-[10px] sm:text-[13px]">
                        <span
                          className="px-1 sm:px-2 py-1 rounded text-xs font-medium"
                          style={{
                            backgroundColor: getStatusBg(row.status),
                            color: getStatusColor(row.status),
                          }}
                        >
                          <span className="hidden sm:inline">{row.status}</span>
                          <span className="sm:hidden">
                            {row.status === "Ok" ? "Ok" : 
                             row.status === "Warnung" ? "Warn" : 
                             row.status === "Kritisch" ? "Krit" : "Alarm"}
                          </span>
                        </span>
                      </td>
                      <td className="p-1 sm:p-2 border border-gray-100 text-[10px] sm:text-[13px]">{row.oee}</td>
                      <td className="p-1 sm:p-2 border border-gray-100 text-[10px] sm:text-[13px]">{row.anomalie}</td>
                      <td className="p-1 sm:p-2 border border-gray-100 text-[10px] sm:text-[13px] truncate" title={row.lastMaintenance}>
                        <span className="hidden md:inline">{row.lastMaintenance}</span>
                        <span className="md:hidden hidden sm:inline">{getTruncatedText(row.lastMaintenance, 8)}</span>
                        <span className="sm:hidden">{getTruncatedText(row.lastMaintenance, 5)}</span>
                      </td>
                      <td className="p-1 sm:p-2 border border-gray-100 text-[10px] sm:text-[13px] truncate" title={row.nextMaintenance}>
                        <span className="hidden md:inline">{row.nextMaintenance}</span>
                        <span className="md:hidden hidden sm:inline">{getTruncatedText(row.nextMaintenance, 8)}</span>
                        <span className="sm:hidden">{getTruncatedText(row.nextMaintenance, 5)}</span>
                      </td>
                      <td className="p-1 sm:p-2 border border-gray-100 text-[10px] sm:text-[13px]">
                        {row.action && (
                          <span className="px-1 sm:px-2 py-1 rounded text-xs font-medium bg-[#DC3545] text-white">
                            <span className="hidden sm:inline">{row.action}</span>
                            <span className="sm:hidden">Alarm</span>
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 bg-white flex-shrink-0">
          <div className="flex overflow-x-auto">
            {["Trends", "Empfehlungen", "Zustand", "Historie", "Dokumente"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 min-w-0 text-center p-2 font-medium text-xs sm:text-sm border-r border-gray-200 last:border-r-0 whitespace-nowrap ${
                  activeTab === tab ? "text-blue-500 bg-blue-50" : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                <span className="hidden sm:inline">{tab}</span>
                <span className="sm:hidden">{getTruncatedText(tab, 6)}</span>
              </button>
            ))}
          </div>

          <div className="p-2 sm:p-3">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">Aktionen</h3>
            <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-0">
              <button className="flex items-center justify-center gap-1 sm:gap-2 h-[40px] w-full sm:w-[32%] border border-gray-200 rounded-lg bg-white text-xs sm:text-sm text-gray-700">
                <span className="text-sm sm:text-lg">🎫</span>
                <span className="hidden sm:inline">Ticket erstellen</span>
                <span className="sm:hidden">Ticket</span>
              </button>

              <button className="flex items-center justify-center gap-1 sm:gap-2 h-[40px] w-full sm:w-[32%] border border-gray-200 rounded-lg bg-white text-xs sm:text-sm text-gray-700">
                <span className="text-sm sm:text-lg">⚠️</span>
                <span className="hidden sm:inline">Alarm quittieren</span>
                <span className="sm:hidden">Alarm</span>
              </button>

              <button className="flex items-center justify-center gap-1 sm:gap-2 h-[40px] w-full sm:w-[32%] border border-gray-200 rounded-lg bg-white text-xs sm:text-sm text-gray-700">
                <span className="text-sm sm:text-lg">⚙️</span>
                <span className="hidden sm:inline">Schwellen ändern</span>
                <span className="sm:hidden">Schwellen</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LineMachines