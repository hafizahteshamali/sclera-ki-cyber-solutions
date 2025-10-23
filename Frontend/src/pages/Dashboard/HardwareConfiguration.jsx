import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { devices, NetzwerkData, sensors } from "../../assets/ConstantData";

const truncateResponsive = (text, xs = 6, sm = 8, md = 12) => {
  if (window.innerWidth < 640) return text.length > xs ? text.slice(0, xs) + "…" : text;
  if (window.innerWidth < 768) return text.length > sm ? text.slice(0, sm) + "…" : text;
  return text.length > md ? text.slice(0, md) + "…" : text;
};

const HardwareConfiguration = () => {
  const [search, setSearch] = useState("");

  const breadcrumbs = ["Werk", "Linie 1", "Maschine A"];

  return (
    <div className="flex lg:h-screen w-full bg-gray-100 px-3">
      <div className="w-full flex flex-col items-start justify-start">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-1">Hardware-Konfiguration</h1>

        <div className="w-full h-full flex flex-col lg:flex-row justify-start gap-4">
          {/* Left Content */}
          <div className="w-full lg:w-[75%] flex flex-col gap-2 overflow-hidden">
            {/* Breadcrumbs */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center bg-white border overflow-hidden border-gray-300 rounded px-2 sm:px-3 py-1 text-xs sm:text-sm text-gray-700"
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
                    <FaChevronRight className="mx-1 sm:mx-2 text-black text-xs" />
                  )}
                </div>
              ))}
            </motion.div>

            {/* Device Table */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="bg-white rounded shadow p-2 h-[185px] overflow-y-auto scrollbar-hide"
>
  <div className="overflow-x-auto">
    <table className="w-full border-collapse text-[8px] sm:text-[9px] md:text-[10px] lg:text-[14px] min-w-[360px]">
      <thead>
        <tr className="text-left border-b border-gray-300">
          <th className="p-1 w-14 sm:w-16 md:w-20">Name</th>
          <th className="p-1 w-14 sm:w-16 md:w-20">Standort</th>
          <th className="p-1 w-12 sm:w-14 md:w-16">Protokoll</th>
          <th className="p-1 w-14 sm:w-16 md:w-20">Firmware</th>
          <th className="p-1 w-16 sm:w-20 md:w-24">IP</th>
          <th className="p-1 w-14 sm:w-16 md:w-20">Status</th>
        </tr>
      </thead>
      <tbody>
        {devices.map((d, i) => (
          <tr key={i} className="border-b border-gray-300 hover:bg-gray-50">
            <td className="p-1 truncate">{truncateResponsive(d.name, 4, 6, 10)}</td>
            <td className="p-1 truncate">{truncateResponsive(d.location, 4, 6, 10)}</td>
            <td className="p-1 truncate">{truncateResponsive(d.protocol, 3, 5, 8)}</td>
            <td className="p-1 truncate">{truncateResponsive(d.fw, 4, 6, 10)}</td>
            <td className="p-1 truncate">{truncateResponsive(d.ip, 8, 10, 12)}</td>
            <td className="p-1">
              <span
                className={`flex items-center gap-1 text-[7px] sm:text-[8px] md:text-[10px] lg:text-[14px] font-medium ${
                  d.status === "OK"
                    ? "text-green-600"
                    : d.status === "Error"
                    ? "text-red-600"
                    : "text-yellow-600"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
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
  </div>
</motion.div>

            {/* Sensor Table #1 */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="bg-white rounded shadow p-2 h-[200px] overflow-y-auto scrollbar-hide"
>
  <h2 className="text-base sm:text-lg font-semibold pb-2 border-b border-gray-300">
    Sensoren
  </h2>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse text-[8px] sm:text-[9px] md:text-xs lg:text-[14px] min-w-[350px]">
      <thead>
        <tr className="text-left border-b border-gray-300">
          <th className="p-1 w-[30px] sm:w-[40px]">ID</th>
          <th className="p-1 w-[50px] sm:w-[70px]">Type</th>
          <th className="p-1 w-[40px] sm:w-[60px]">Einheit</th>
          <th className="p-1 w-[80px] sm:w-[110px]">Kalibrierungsdatum</th>
          <th className="p-1 w-[60px] sm:w-[80px]">Abtastrate</th>
          <th className="p-1 w-[90px] sm:w-[120px]">Letzter Heartbeat</th>
        </tr>
      </thead>

      <tbody>
        {sensors.map((s, i) => (
          <tr
            key={i}
            className="border-b border-gray-300 hover:bg-gray-50"
          >
            <td className="p-1 whitespace-nowrap truncate">{s.id}</td>
            <td className="p-1 whitespace-nowrap truncate">{s.type}</td>
            <td className="p-1 whitespace-nowrap truncate">{s.unit}</td>
            <td className="p-1 whitespace-nowrap truncate">{s.date}</td>
            <td className="p-1 whitespace-nowrap truncate">{s.rate}</td>
            <td className="p-1 whitespace-nowrap truncate">{s.hb}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</motion.div>

            {/* Sensor Table #2 */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  className="bg-white rounded shadow p-2 h-[200px] overflow-y-auto scrollbar-hide"
>
<h2 className="text-base sm:text-lg font-semibold pb-2 border-b border-gray-300">
    Sensoren
  </h2>
  <div className="overflow-x-auto">
    <table className="w-full border-collapse text-[8px] sm:text-[9px] md:text-[10px] lg:text-[14px] min-w-[400px]">
      <thead>
        <tr className="text-left border-b border-gray-300">
          <th className="px-1 py-0.5 w-[60px]">ID</th>
          <th className="px-1 py-0.5 w-[60px]">Type</th>
          <th className="px-1 py-0.5 w-[50px]">Einheit</th>
          <th className="px-1 py-0.5 w-[90px]">Kalibrierungsdatum</th>
          <th className="px-1 py-0.5 w-[70px]">Abtastrate</th>
          <th className="px-1 py-0.5 w-[100px]">Letzter Heartbeat</th>
        </tr>
      </thead>
      <tbody>
        {sensors.concat(sensors).map((s, i) => (
          <tr
            key={i}
            className="border-b border-gray-300 hover:bg-gray-50"
          >
            <td className="px-1 py-0.5">{s.id}</td>
            <td className="px-1 py-0.5">{s.type}</td>
            <td className="px-1 py-0.5">{s.unit}</td>
            <td className="px-1 py-0.5">{s.date}</td>
            <td className="px-1 py-0.5">{s.rate}</td>
            <td className="px-1 py-0.5">{s.hb}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</motion.div>

          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-[26%] shadow-lg flex flex-col justify-start gap-2">
            {/* Search */}
            <div className="relative w-full border border-gray-300 overflow-hidden h-[30px] rounded">
              <input
                type="text"
                placeholder="Suchen"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-8 pr-4 w-full rounded focus:outline-none text-xs sm:text-sm h-full"
              />
              <IoSearchOutline className="absolute left-2 text-[14px] sm:text-[16px] top-[50%] transform -translate-y-[50%] text-gray-400" />
            </div>

            {/* Linie */}
            <div className="w-full h-[120px] border border-gray-200 rounded bg-white gap-2 flex flex-col justify-start items-start p-2 sm:p-3">
              <div className="text-sm sm:text-base text-black flex justify-center items-center gap-2 overflow-hidden">
                <h1 className="text-base sm:text-xl font-medium">Linie L1</h1>
                <img
                  src="/predictive-maintainance/assets/images/dashboard/microscope.svg"
                  alt=""
                  className="h-10 w-7 object-contain"
                />
              </div>
              <div className="h-full w-full flex items-center justify-center">
                <img
                  src="/predictive-maintainance/assets/images/dashboard/linie-img.svg"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            {/* Netzwerk */}
            <div className="w-full border border-gray-300 p-2 bg-white rounded">
              <h3 className="font-[500] text-sm sm:text-base flex items-center">
                Netzwerk
              </h3>
              {NetzwerkData.map((item, index) => (
                <div
                  key={index}
                  className="text-[10px] sm:text-xs w-full flex justify-between items-center my-1.5"
                >
                  <div className="flex items-center gap-1">
                    <img src={item.icon} alt="" className="h-4 w-4" />
                    <p>{item.text}</p>
                  </div>
                  <p>
                    {item.percent} <sub>{item.sub}</sub>
                  </p>
                </div>
              ))}
            </div>

            {/* Server / Knoten */}
            <div className="w-full bg-white p-2 rounded shadow">
              <h3 className="text-sm sm:text-base font-semibold">Server / Knoten</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-[10px] sm:text-xs border-collapse min-w-[320px]">
                  <thead>
                    <tr className="text-left border-b border-gray-300">
                      <th className="p-1">Knoten</th>
                      <th className="p-1">CPU</th>
                      <th className="p-1">GPU</th>
                      <th className="p-1">Dienste</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="p-1">Knoten 1</td>
                      <td className="p-1">85%</td>
                      <td className="p-1">98%</td>
                      <td className="p-1 text-green-600 font-medium">OK</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-1">Knoten 2</td>
                      <td className="p-1">40%</td>
                      <td className="p-1">50%</td>
                      <td className="p-1">
                        <span className="w-3 h-3 bg-yellow-400 rounded-full inline-block"></span>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-1">Knoten 3</td>
                      <td className="p-1">70%</td>
                      <td className="p-1">85%</td>
                      <td className="p-1 text-green-600 font-medium">OK</td>
                    </tr>
                    <tr>
                      <td className="p-1">Knoten 4</td>
                      <td className="p-1">87%</td>
                      <td className="p-1">91%</td>
                      <td className="p-1 text-green-600 font-medium">OK</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Lizenzen */}
            <div className="w-full border border-gray-300 p-2 bg-white rounded">
              <h3 className="text-sm sm:text-base font-semibold mb-2">Lizenzen</h3>
              <div className="my-2">
                <p className="text-xs sm:text-sm">Laufzeit</p>
                <div className="w-full h-2 bg-gray-200 rounded">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "80%" }}
                    transition={{ duration: 1 }}
                    className="h-2 bg-green-500 rounded"
                  />
                </div>
              </div>
              <div className="my-2">
                <p className="text-xs sm:text-sm">Ablaufwarnungen</p>
                <div className="w-full h-2 bg-gray-200 rounded">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "55%" }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-2 bg-green-500 rounded"
                  />
                </div>
              </div>
              <div className="my-2">
                <p className="text-xs sm:text-sm">Edge Gateway Pro</p>
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
