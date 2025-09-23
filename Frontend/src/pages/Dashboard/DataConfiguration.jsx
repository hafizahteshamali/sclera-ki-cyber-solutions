import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineModelTraining } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { DataConfigStatusData } from "../../assets/ConstantData";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { useNavigate } from "react-router-dom";

const vibrationData = [
  { value: 2 },
  { value: 1.5 },
  { value: 2.3 },
  { value: 1.8 },
  { value: 2.1 },
  { value: 1.7 },
  { value: 2.2 },
  { value: 1.9 },
];

const currentData = [
  { value: 12 },
  { value: 11.8 },
  { value: 12.1 },
  { value: 11.9 },
  { value: 12.0 },
  { value: 11.7 },
  { value: 12.1 },
];

const ProgressBar = ({ value, color }) => (
  <div className="w-full bg-gray-200 rounded-full h-3">
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: `${value}%` }}
      transition={{ duration: 1.5 }}
      className={`h-3 rounded-full ${color}`}
    />
  </div>
);

const DataConfiguration = () => {
  const [activeTab, setActiveTab] = useState("MQTT");
  const navigate = useNavigate();

  const tabs = ["MQTT", "OPC UA", "REST API", "CSV Import"];

  return (
    <div className="lg:h-screen lg:overflow-hidden px-5">
      {/* Header */}
      <h1 className="text-3xl font-bold">Datenkonfiguration</h1>

      <div className="flex flex-col gap-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-3 justify-between">
          <div className="w-full lg:w-[75%]">
            {/* Left - Top Cards */}
            <div className="flex flex-wrap justify-between p-1.5 gap-2">
              {DataConfigStatusData.map((item, index) => (
                <div
                  key={index}
                  className="text-white rounded py-6 px-5 shadow bg-cover bg-center bg-no-repeat w-full sm:w-[45%] lg:w-[48%]"
                  style={{ backgroundImage: `url(${item.bgImg})` }}
                >
                  <h3 className="text-lg font-semibold">{item.text}</h3>
                  <p className="text-4xl font-[500]">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Left - Data Sources */}
            <div className="bg-white rounded shadow lg:px-4 px-2 py-2.5 flex-1 mt-1">
              <div className="w-full flex flex-col lg:flex-row justify-between items-center">
                <h3 className="font-[500] text-3xl flex items-center">
                  Datenquelle
                </h3>

                <div className="w-full lg:w-[50%] flex flex-col lg:flex-row justify-center items-center lg:gap-5 gap-2 mt-5 lg:mt-0">
                  <button className="flex justify-center cursor-pointer items-center w-full lg:w-[48%] bg-[#4DB5D81A] py-1.5 rounded gap-1">
                    <img
                      src="/assets/images/dashboard/tabler_details.svg"
                      alt=""
                      className="h-5 w-5"
                    />
                    Details anzeigen
                  </button>

                  <button onClick={()=>navigate("/dashboard/mqtt")} className="flex justify-center cursor-pointer items-center w-full lg:w-[48%] bg-[#4DB5D81A] py-1.5 rounded gap-1">
                    <img
                      src="/assets/images/dashboard/basil_add-solid.svg"
                      alt=""
                      className="h-5 w-5"
                    />
                    Neu hinzufügen
                  </button>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row justify-between items-center mt-5 lg:mt-2">
                <div className="w-full lg:w-[60%]">
                  {/* Tabs */}
                  <div className="flex flex-col lg:flex-row gap-3 justify-between lg:justify-start w-full">
                    {tabs.map((tab) => (
                      <button
                        key={tab}
                        className={`lg:px-4 px-0.5 py-2 lg:py-1 rounded text-sm ${
                          activeTab === tab
                            ? "bg-[#EDF8FB] text-[#4DB5D8] font-semibold"
                            : "bg-gray-100 text-gray-600 border-2 border-[#0000001A]"
                        }`}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <div className="mt-2">
                    {activeTab === "MQTT" && (
                      <table className="w-full text-[10px] lg:text-[12px]">
                        <thead>
                          <tr className="text-left text-[#0F8AB3] bg-[#DAF1FF]">
                            <th className="p-2 font-[400]">Quellenname</th>
                            <th className="p-2 font-[400]">
                              Verbindungsstatus
                            </th>
                            <th className="p-2 font-[400]">
                              Letzter Heartbeat
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-[#F6FBFE]">
                          <tr className="border-b border-gray-300">
                            <td className="p-2 text-[#4DB5D8]">OPC UA</td>
                            <td className="p-2 text-[#4DB5D8] flex justify-start items-center gap-1.5">
                              <div className="h-[10px] w-[10px] bg-green-600 rounded-full"></div>
                              Verbunden
                            </td>
                            <td className="p-2 text-[#4DB5D8]">Vor 5 Sek</td>
                          </tr>
                          <tr className="border-b border-gray-300">
                            <td className="p-2 text-[#4DB5D8]">MQTT</td>
                            <td className="p-2 text-[#4DB5D8] flex justify-start items-center gap-1.5">
                              <div className="h-[10px] w-[10px] bg-red-500 rounded-full"></div>
                              Getrennt
                            </td>
                            <td className="p-2 text-[#4DB5D8]">
                              Vor 2 Minuten
                            </td>
                          </tr>
                          <tr className="border-b border-gray-300">
                            <td className="p-2 text-[#4DB5D8]">REST API</td>
                            <td className="p-2 text-[#4DB5D8] flex justify-start items-center gap-1.5">
                              <div className="h-[10px] w-[10px] bg-green-600 rounded-full"></div>
                              Verbunden
                            </td>
                            <td className="p-2 text-[#4DB5D8]">Vor 12 Sek</td>
                          </tr>
                          <tr className="border-b border-gray-300">
                            <td className="p-2 text-[#4DB5D8]">CSV Import</td>
                            <td className="p-2 text-[#4DB5D8] flex justify-start items-center gap-1.5">
                              <div className="h-[10px] w-[10px] bg-[#7D7D7D] rounded-full"></div>
                              Nicht konfiguriert
                            </td>
                            <td className="p-2 text-[#4DB5D8]">--</td>
                          </tr>
                          <tr className="border-b border-gray-300">
                            <td className="p-2 text-[#4DB5D8]">MQTT 2</td>
                            <td className="p-2 text-[#4DB5D8] flex justify-start items-center gap-1.5">
                              <div className="h-[10px] w-[10px] bg-[#FF0000] rounded-full"></div>
                              Verbunden
                            </td>
                            <td className="p-2 text-[#4DB5D8]">--</td>
                          </tr>
                          <tr className="border-b border-gray-300">
                            <td className="p-2 text-[#4DB5D8]">MQTT 3</td>
                            <td className="p-2 text-[#4DB5D8] flex justify-start items-center gap-1.5">
                              <div className="h-[10px] w-[10px] bg-[#28A745] rounded-full"></div>
                              Getrennt
                            </td>
                            <td className="p-2 text-[#4DB5D8]">--</td>
                          </tr>
                          <tr className="border-b border-gray-300">
                            <td className="p-2 text-[#4DB5D8]">MQTT 4</td>
                            <td className="p-2 text-[#4DB5D8] flex justify-start items-center gap-1.5">
                              <div className="h-[10px] w-[10px] bg-[#28A745] rounded-full"></div>
                              Getrennt
                            </td>
                            <td className="p-2 text-[#4DB5D8]">--</td>
                          </tr>
                        </tbody>
                      </table>
                    )}

                    {activeTab === "OPC UA" && (
                      <div className="text-gray-500 text-sm">
                        Noch keine Daten…
                      </div>
                    )}
                    {activeTab === "REST API" && (
                      <div className="text-gray-500 text-sm">
                        Noch keine Daten…
                      </div>
                    )}
                    {activeTab === "CSV Import" && (
                      <div className="text-gray-500 text-sm">
                        Noch keine Daten…
                      </div>
                    )}
                  </div>
                </div>

                <div className="w-full lg:w-[35%] mt-5 lg:mt-0">
                  {/* Box 1 - Charts */}
                  <div className="bg-[#F8F8FA] shadow rounded p-2">
                    <div className="space-y-4">
                      <div className="w-[95%] mx-auto">
                        <div className="w-full flex justify-between items-start">
                          <div className="h-[100%] flex flex-col gap-3 justify-between items-center w-[20%] text-sm">
                            <p>V</p>
                            <p>O</p>
                          </div>
                          <div className="w-[80%] flex-col justify-center items-center gap-3">
                            <img
                              src="/assets/images/dashboard/vibration.svg"
                              className="h-[50px] w-full object-[100%]"
                              alt=""
                            />
                            <h1 className="text-center text-[12px] font-[500]">
                              Vibration (RMS)
                            </h1>
                          </div>
                        </div>

                        <div className="w-full flex justify-between items-start">
                          <div className="h-[100%] flex flex-col gap-3 text-sm justify-between items-center w-[20%]">
                            <p>20</p>
                            <p>0</p>
                          </div>
                          <div className="w-[80%] flex-col justify-center items-center gap-3">
                            <img
                              src="/assets/images/dashboard/strome.svg"
                              className="h-[50px] w-full object-[100%]"
                              alt=""
                            />
                            <h1 className="text-center text-[12px] font-[500]">
                              Stromauthahme (A)
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Box 2 - Progress bar */}
                  <div className="bg-white shadow rounded mt-2">
                    <div className="bg-blue-100 px-4 py-1 rounded-t">
                      <h2 className="text-[#0F8AB3] font-[500] text-[14px]">
                        Systemstatus
                      </h2>
                    </div>
                    <div className="px-2 py-1.5 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="w-[15%] text-gray-700 text-sm">
                          Bet...
                        </span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden mx-2 w-[80%]">
                          <motion.div
                            className="h-2 bg-green-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "88%" }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                          />
                        </div>
                        <span className="text-gray-700 text-sm w-[15%]">
                          88%
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="w-[15%] text-gray-700 text-sm">
                          Net...
                        </span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden mx-2 w-[80%]">
                          <motion.div
                            className="h-2 bg-green-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "95%" }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                          />
                        </div>
                        <span className="text-gray-700 text-sm w-[15%]">
                          95%
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="w-[15%] text-gray-700 text-sm">
                          CPU
                        </span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden mx-2 w-[80%]">
                          <motion.div
                            className="h-2 bg-green-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "60%" }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                          />
                        </div>
                        <span className="text-gray-700 text-sm w-[15%]">
                          60%
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="w-[15%] text-gray-700 text-sm">
                          GPU
                        </span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden mx-2 w-[80%]">
                          <motion.div
                            className="h-2 bg-green-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                          />
                        </div>
                        <span className="text-gray-700 text-sm w-[15%]">
                          100%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="rounded shadow md:w-[35%] flex flex-col justify-start items-start gap-5 mt-5 lg:mt-0">
            <div className="bg-white px-5 py-7 w-full">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                Berichte & Trends
              </h3>
              <img src="/assets/images/dashboard/bar.png" alt="" />
            </div>

            {/* KI Modell Status */}
            <div className="bg-white rounded shadow w-full">
              <h3 className="font-semibold text-black flex items-center gap-2 bg-[#EBEBEB] p-4">
                KI-Modell Status
              </h3>
              <div className="px-5 py-7">
              <div className="w-full flex justify-end items-center">
              <p className="mb-1 text-sm text-black">87%</p>
              </div>
              <ProgressBar value={87} color="bg-green-500" />
              <div className="w-full flex justify-end items-center mt-1">
              <p className="mb-2 text-sm text-black">Genauigkeit</p>
              </div>
              </div>
            </div>

            {/* Lizenzen */}
            <div className="bg-white rounded shadow w-full">
              <h3 className="font-semibold bg-[#EBEBEB] p-4">Lizenzen</h3>
              <div className="px-5 py-6">
              <div className="mb-4">
                <p className="text-sm text-black">Laufzeit</p>
                <ProgressBar value={78} color="bg-green-500" />
              </div>
              <div className="mb-4">
                <p className="text-sm text-black">Ablaufwarnungen</p>
                <ProgressBar value={55} color="bg-green-500" />
              </div>
              <div>
                <p className="text-sm text-black">Edge Gateway Pro</p>
                <ProgressBar value={100} color="bg-green-500" />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataConfiguration;
