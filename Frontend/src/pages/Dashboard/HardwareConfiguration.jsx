import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaNetworkWired, FaServer } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { devices, NetzwerkData, sensors } from "../../assets/ConstantData";

const HardwareConfiguration = () => {
  const [search, setSearch] = useState("");

  const breadcrumbs = ["Werk", "Linie 1", "Maschine A"];

  return (
    <div className="flex h-screen w-full bg-gray-100 p-5">
      <div className="w-full flex flex-col items-start justify-start">
        {/* Heading */}
        <h1 className="text-3xl font-bold mb-2">Hardware-Konfiguration</h1>
        {/* Left Content */}
        <div className="w-[100%] h-full flex justify-start gap-4">
          <div className="w-[75%] flex flex-col gap-4 !overflow-hidden">
            {/* Breadcrumbs */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center bg-white border border-gray-300 rounded px-3 py-1 text-sm text-gray-700"
            >
              {breadcrumbs.map((item, index) => (
                <div key={index} className="flex items-center">
                  <span
                    className={`${
                      index === breadcrumbs.length - 1
                        ? "font-semibold text-black"
                        : ""
                    }`}
                  >
                    {item}
                  </span>
                  {index < breadcrumbs.length - 1 && (
                    <FaChevronRight className="mx-2 text-black text-xs" />
                  )}
                </div>
              ))}
            </motion.div>

            {/* Device Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded shadow p-2 h-[180px] overflow-y-auto scrollbar-hide"
            >
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="text-left border-b border-gray-300">
                    <th className="p-1 text-sm font-[500]">Name</th>
                    <th className="p-1 text-sm font-[500]">Standort</th>
                    <th className="p-1 text-sm font-[500]">Protokoll</th>
                    <th className="p-1 text-sm font-[500]">Firmware</th>
                    <th className="p-1 text-sm font-[500]">IP</th>
                    <th className="p-1 text-sm font-[500]">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {devices.map((d, i) => (
                    <tr
                      key={i}
                      className="border-b border-gray-300 hover:bg-gray-50"
                    >
                      <td className="p-1">{d.name}</td>
                      <td className="p-1">{d.location}</td>
                      <td className="p-1">{d.protocol}</td>
                      <td className="p-1">{d.fw}</td>
                      <td className="p-1">{d.ip}</td>
                      <td className="p-1">
                        <span
                          className={`flex items-center gap-1 text-sm ${
                            d.status === "OK"
                              ? "text-green-600"
                              : d.status === "Error"
                              ? "text-red-600"
                              : "text-yellow-600"
                          }`}
                        >
                          <span
                            className={`w-2 h-2 rounded-full ${
                              d.status === "OK"
                                ? "bg-green-500"
                                : d.status === "Error"
                                ? "bg-red-500"
                                : "bg-yellow-500"
                            }`}
                          ></span>
                          {d.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            {/* Sensor Table #1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded shadow p-2 h-[200px] overflow-y-auto scrollbar-hide"
            >
              <h2 className="text-lg font-semibold py-2 border-b border-gray-300">
                Sensoren
              </h2>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="text-left border-b border-gray-300">
                    <th className="p-1 font-[500]">ID</th>
                    <th className="p-1 font-[500]">Type</th>
                    <th className="p-1 font-[500]">Einheit</th>
                    <th className="p-1 font-[500]">Kalibrierungsdatum</th>
                    <th className="p-1 font-[500]">Abtastrate</th>
                    <th className="p-1 font-[500]">Letzter Heartbeat</th>
                  </tr>
                </thead>
                <tbody>
                  {sensors.map((s, i) => (
                    <tr
                      key={i}
                      className="border-b border-gray-300 hover:bg-gray-50"
                    >
                      <td className="p-1 font-[400]">{s.id}</td>
                      <td className="p-1 font-[400]">{s.type}</td>
                      <td className="p-1 font-[400]">{s.unit}</td>
                      <td className="p-1 font-[400]">{s.date}</td>
                      <td className="p-1 font-[400]">{s.rate}</td>
                      <td className="p-1 font-[400]">{s.hb}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            {/* Sensor Table #2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded shadow p-2 h-[200px] overflow-y-auto scrollbar-hide"
            >
              <h2 className="text-lg font-semibold mb-2">Sensoren</h2>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="text-left border-b border-gray-300">
                    <th className="p-1 font-[500]">ID</th>
                    <th className="p-1 font-[500]">Type</th>
                    <th className="p-1 font-[500]">Einheit</th>
                    <th className="p-1 font-[500]">Kalibrierungsdatum</th>
                    <th className="p-1 font-[500]">Abtastrate</th>
                    <th className="p-1 font-[500]">Letzter Heartbeat</th>
                  </tr>
                </thead>
                <tbody>
                  {sensors.concat(sensors).map((s, i) => (
                    <tr
                      key={i}
                      className="border-b border-gray-300 hover:bg-gray-50"
                    >
                      <td className="p-1">{s.id}</td>
                      <td className="p-1">{s.type}</td>
                      <td className="p-1">{s.unit}</td>
                      <td className="p-1">{s.date}</td>
                      <td className="p-1">{s.rate}</td>
                      <td className="p-1">{s.hb}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
          {/* Right Sidebar */}
          <div className="w-[26%] shadow-lg flex flex-col justify-start gap-1">
            {/* Search */}
            <div className="relative w-[100%] border border-gray-300 overflow-hidden h-[30px] rounded">
              <input
                type="text"
                placeholder="Suchen"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 pr-4 w-full rounded focus:outline-none text-sm h-[100%]"
              />
              <IoSearchOutline className="absolute left-3 text-[16px] top-[50%] transform -translate-y-[50%] text-gray-400" />
            </div>

            {/* Linie */}
            <div className="w-[100%] h-[120px] border border-gray-200 rounded bg-white gap-2.5 flex flex-col justify-start items-start p-3">
              <div className="text-base text-black flex justify-center items-center gap-3 overflow-hidden">
                <h1 className="text-xl font-medium">Linie L1</h1>
                <img
                  src="/assets/images/dashboard/microscope.svg"
                  alt=""
                  className="h-13 w-8 object-contain flex justify-center items-center"
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

            {/* Netzwerk */}
            <div className="w-[100%] border border-gray-300 p-2 bg-white rounded overflow-hidden">
              <h3 className="font-[500] flex items-center text-xl">Netzwerk</h3>
              {NetzwerkData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="text-sm w-full flex justify-between items-center my-1.5"
                  >
                    <div className="flex items-center gap-1.5">
                      <img src={item.icon} alt="" />
                      <p className="text-[12px]">{item.text}</p>
                    </div>
                    <p className="text-[12px]">
                      {item.percent} <sub>{item.sub}</sub>
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Server / Knoten */}
            <div className="w-[100%] bg-white p-2 rounded overflow-hidden shadow">
              <h3 className="text-xl font-semibold">Server / Knoten</h3>

              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="text-left border-b border-gray-300">
                    <th className="p-1 text-[12px]">Knoten</th>
                    <th className="p-1 text-[12px]">CPU</th>
                    <th className="p-1 text-[12px]">GPU</th>
                    <th className="p-1 text-[12px]">Dienste</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-300">
                    <td className="p-1 text-[12px]">Knoten 1</td>
                    <td className="p-1 text-[12px]">85%</td>
                    <td className="p-1 text-[12px]">98%</td>
                    <td className="p-1 text-[12px] text-green-600 font-medium">
                      OK
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-1 text-[12px]">Knoten 2</td>
                    <td className="p-1 text-[12px]">40%</td>
                    <td className="p-1 text-[12px]">50%</td>
                    <td className="p-1 text-[12px]">
                      <span className="w-4 h-4 bg-yellow-400 rounded-full inline-block"></span>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-1 text-[12px]">Knoten 3</td>
                    <td className="p-1 text-[12px]">70%</td>
                    <td className="p-1 text-[12px]">85%</td>
                    <td className="p-1 text-[12px] text-green-600 font-medium">
                      OK
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1 text-[12px]">Knoten 4</td>
                    <td className="p-1 text-[12px]">87%</td>
                    <td className="p-1 text-[12px]">91%</td>
                    <td className="p-1 text-[12px] text-green-600 font-medium">
                      OK
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Lizenzen with Progress Bars */}
            <div className="w-[100%] border border-gray-300 p-2 bg-white rounded !overflow-hidden">
              <h3 className="font-semibold mb-2">Lizenzen</h3>
              <div className="my-3">
                <p className="text-sm">Laufzeit</p>
                <div className="w-full h-2 bg-gray-200 rounded">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "80%" }}
                    transition={{ duration: 1 }}
                    className="h-2 bg-green-500 rounded"
                  />
                </div>
              </div>
              <div className="my-3">
                <p className="text-sm">Ablaufwarnungen</p>
                <div className="w-full h-2 bg-gray-200 rounded">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "55%" }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-2 bg-green-500 rounded"
                  />
                </div>
              </div>
              <div className="mb-3">
                <p className="text-sm">Edge Gateway Pro</p>
                <div className="w-full h-2 bg-gray-200 rounded">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="h-2 bg-green-500 rounded"
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

export default HardwareConfiguration;
