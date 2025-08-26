"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const HalfCircleProgress = ({ value, size = 160 }) => {
  const radius = (size - 20) / 2;
  const circumference = Math.PI * radius; // Half circle circumference
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size / 2 + 20 }}>
      <svg width={size} height={size / 2 + 20} className="transform -rotate-0">
        {/* Background arc */}
        <path
          d={`M 10 ${size / 2} A ${radius} ${radius} 0 0 1 ${size - 10} ${
            size / 2
          }`}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="20"
        />
        {/* Progress arc */}
        <motion.path
          d={`M 10 ${size / 2} A ${radius} ${radius} 0 0 1 ${size - 10} ${
            size / 2
          }`}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="20"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </svg>
      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center ">
        <span className="text-5xl overflow-hidden font-[500] text-black absolute bottom-7">{value}%</span>
        <p className="mt-2 text-gray-600 text-sm absolute bottom-2">Genauigkeit</p>
      </div>
    </div>
  );
};

const ModelsKI = () => {
  const [activeTab, setActiveTab] = useState(0);

  const systemStatus = [
    { name: "Betrieb", value: 90 },
    { name: "Netzwerk", value: 80 },
    { name: "CPU", value: 60 },
    { name: "GPU", value: 75 },
  ];

  const modelData = [
    { version: "1.2", status: "Live", retrain: "18.08.2025", drift: "Keiner" },
    {
      version: "1.1",
      status: "Prüfen",
      retrain: "22.06.2025",
      drift: "Stationär",
    },
    {
      version: "1.0",
      status: "Archiviert",
      retrain: "20.11.2025",
      drift: "Trend/Saisonalität",
    },
    { version: "1.5", status: "Live", retrain: "30.3.2025", drift: "Keiner" },
  ];

  // Only first tab has content, others are empty
  const tabContent = {
    0: { title: "Leistung", data: modelData },
    1: { title: "Drift", data: [] },
    2: { title: "Erklärbarkeit", data: [] },
    3: { title: "Feedback-Schleife", data: [] },
    4: { title: "Einsatz", data: [] },
  };

  const tabs = [
    "Leistung",
    "Drift",
    "Erklärbarkeit",
    "Feedback-Schleife",
    "Einsatz",
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">Modelle & KI</h1>

      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Systemstatus */}
        <div className="bg-white shadow rounded-xl p-4">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-3">Systemstatus</h2>
            {systemStatus.map((item, i) => (
              <div key={i}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-[16px]">{item.name}</span>
                  <div className="w-[80%] bg-gray-200 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.value}%` }}
                      transition={{ duration: 1, delay: i * 0.3 }}
                      className="h-3 rounded-full bg-green-500"
                    ></motion.div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow rounded-xl p-4 flex flex-col items-center justify-center">
          <h2 className="text-lg font-semibold mb-3">KI-Modell Status</h2>
          <HalfCircleProgress
            value={87}
            size={250}
            strokeWidth={50} // default 10 ya 12 hota hai, ise bara do
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex mb-4 rounded">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`p-2 overflow-hidden transition-colors duration-200 border border-gray-300 h-[40px] min-w-[100px] 
        ${i === 0 ? "rounded-l" : ""} 
        ${i === tabs.length - 1 ? "rounded-r" : ""} 
        ${i === activeTab ? "text-[#1976FB]" : "text-gray-600"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white shadow overflow-x-auto">
        {tabContent[activeTab].data.length > 0 ? (
          <table className="w-full">
            <thead className="bg-gray-100 text-gray-600 text-left">
              <tr>
                <th className="py-3 px-4 text-xl font-[500] text-black">
                  Modelversion
                </th>
                <th className="py-3 px-4 text-xl font-[500] text-black">
                  Status
                </th>
                <th className="py-3 px-4 text-xl font-[500] text-black">
                  letzter Retrain
                </th>
                <th className="py-3 px-4 text-xl font-[500] text-black">
                  Drift-Indikatoren
                </th>
              </tr>
            </thead>
            <tbody>
              {tabContent[activeTab].data.map((row, i) => (
                <motion.tr
                  key={i}
                  className="border-b border-gray-300 hover:bg-gray-50 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <td className="py-5 px-4 font-medium">{row.version}</td>
                  <td className="py-3 px-4">
                    {row.status === "Live" && (
                      <span className="px-3 py-1 bg-[#28A745] text-white rounded w-[100px] justify-center items-center flex font-medium">
                        {row.status}
                      </span>
                    )}
                    {row.status === "Prüfen" && (
                      <span className="px-3 py-1 bg-[#FFF58D] text-black rounded w-[100px] justify-center items-center flex font-medium">
                        {row.status}
                      </span>
                    )}
                    {row.status === "Archiviert" && (
                      <span className="px-3 py-1 bg-[#D9D9D9] text-black rounded w-[100px] justify-center items-center flex font-medium">
                        {row.status}
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-black">{row.retrain}</td>
                  <td className="py-3 px-4 text-black">{row.drift}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="p-6 text-center text-gray-400 text-sm">
            Kein Inhalt verfügbar
          </div>
        )}
      </div>
    </div>
  );
};

export default ModelsKI;
