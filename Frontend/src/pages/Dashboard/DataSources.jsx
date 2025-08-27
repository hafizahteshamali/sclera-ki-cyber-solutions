"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const dataSources = [
  { name: "Linie", status: "connected", bullet: false },
  { name: "Quellenname", status: "connected", bullet: true },
  { name: "OPC UA", status: "connected", bullet: true },
  { name: "MQTT", status: "connected", bullet: true },
  { name: "Modbus", status: "disconnected", bullet: true },
  { name: "CSV-import", status: "connected", bullet: true },
  { name: "Historian", status: "disconnected", bullet: true },
  { name: "REST", status: "connected", bullet: true },
];

const DataSources = () => {
  return (
    <div className="p-6 bg-gray-50 h-screen overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-4xl font-[500]">Datenquellen</h1>
        <div className="flex items-center rounded px-3 py-2 bg-white shadow-sm w-[25%]">
          <FiSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Suchen"
            className="outline-none text-sm bg-transparent flex-1"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden mb-2">
        {dataSources.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="w-[98%] mx-auto flex justify-between px-4 py-2 border-b border-gray-300 text-sm items-center"
          >
            <div className="">{item.name}</div>
            <div className="min-w-[10%] justify-start flex ">
            <div className="w-[100%] flex justify-start items-center">
              {item.bullet && (
                <FaCircle
                className={`mr-2 ${
                  item.status === "connected" ? "text-green-500" : "text-red-500"
                }`}
              />
              )}
              {item.status === "connected" ? "Verbunden" : "Getrennt"}
            </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Sections */}
      <div className="flex flex-wrap gap-4 mb-2 overflow-hidden">
        {/* Quelle konfigurieren */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white shadow rounded-lg p-4 flex-1 min-w-[250px]"
        >
          <h2 className="font-[700] mb-2">Quelle konfigurieren</h2>
          <ul className="space-y-1">
            <li>● Verbindung</li>
            <li>● Mapping</li>
            <li>● Frequenz/Resampling</li>
            <li>● Datenlücken Strategie</li>
            <li>● Einneiten</li>
          </ul>
        </motion.div>

        {/* Validierung */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white shadow rounded-lg p-4 flex-1 min-w-[250px]"
        >
          <h2 className="font-[700] mb-2">Validierung</h2>
          <ul className="space-y-1">
            <li>● Grenzwerte</li>
            <li>● Kalibrierintervalle</li>
            <li>● Heartbeat</li>
          </ul>
        </motion.div>

        {/* Monitoring */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white shadow rounded-lg p-4 flex-1 min-w-[250px]"
        >
          <h2 className="font-[700] mb-2">Monitoring</h2>
          <ul className=" space-y-1">
            <li>● Grenzwerte</li>
            <li>● Kalibrierintervalle</li>
            <li>● Heartbeat</li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-wrap gap-4">
        {/* Teile-/Lagerbestand */}
        <div className="bg-white shadow rounded-lg p-2 flex-1 min-w-[250px]">
          <h2 className="font-[500] mb-4">Teile-/Lagerbestand</h2>
          <div className="mb-3">
            <p className="text-sm font-medium mb-1">Mindestbestände</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="bg-blue-500 h-2.5 rounded-full"
              ></motion.div>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium mb-1">Reservierungen</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "25%" }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
                className="bg-gray-400 h-2.5 rounded-full"
              ></motion.div>
            </div>
          </div>
        </div>

        {/* Aktionen */}
        <div className="bg-white shadow rounded-lg p-2 flex-1 min-w-[500px]">
          <h2 className="font-[500] text-3xl mb-4">Aktionen</h2>
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-blue-500 hover:bg-blue-600 text-white h-[50px] w-[40%] rounded shadow text-sm flex justify-center items-center gap-1.5"
            >
              <img src="/assets/images/dashboard/ticket.svg" alt="" />
              Ticket erstellen
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-blue-500 hover:bg-blue-600 text-white h-[50px] w-[40%] rounded shadow text-sm flex justify-center items-center gap-1.5"
            >
              <img src="/assets/images/dashboard/Vector.svg" alt="" />
              erstellen trends
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataSources;