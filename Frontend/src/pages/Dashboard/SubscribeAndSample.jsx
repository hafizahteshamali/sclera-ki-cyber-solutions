import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const SubscribeAndSample = () => {
  const [payload, setPayload] = useState(`{
  "tenant": "tenantA",
  "site": "lab01",
  "machine": "machine01",
  "sensor": "sensorA",
  "value": 18.54,
  "unit": "°C",
  "timestamp": 1713779850
}`);

  return (
    <div className="min-h-screen flex flex-col items-start w-full px-4 py-6 lg:py-2">
      {/* Title */}
      <h1 className="text-2xl lg:text-4xl font-bold mb-1">Subscribe & Sample</h1>

      {/* Subscribe Section */}
      <div className="w-full bg-white shadow-md rounded-lg mb-2 border border-gray-100">
        <h2 className="text-base font-semibold px-3 py-3 bg-[#DAF1FF]">Subscribe</h2>

        {/* Topic Filter */}
        <div className="mb-1 px-3">
          <label className="block text-sm font-medium mb-0.5">Topic Filter</label>
          <input
            type="text"
            placeholder="Select or enter a topic filter to subscribe"
            className="w-full border border-gray-300 rounded px-2 py-0.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
        </div>

        {/* QoS Level */}
        <div className="mb-1 px-3">
          <label className="block text-sm font-medium mb-0.5">QoS Level</label>
          <div className="relative">
            <select className="appearance-none w-full border border-gray-300 rounded px-2 py-0.5 pr-6 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400">
              <option>1</option>
              <option>0</option>
              <option>2</option>
            </select>
            <FaChevronDown className="absolute right-2 top-1.5 text-gray-500 text-sm pointer-events-none" />
          </div>
        </div>

        {/* Retained Messages */}
        <div className="mb-1 px-3 flex justify-between items-center">
          <label htmlFor="retained" className="text-sm font-medium">
            Retained Messages verarbeiten
          </label>
          <input type="checkbox" id="retained" className="w-3 h-3" />
        </div>

        {/* TLS Version */}
        <div className="mb-1 px-3">
          <label className="block text-sm font-medium mb-0.5">TLS Version</label>
          <div className="relative">
            <select className="appearance-none w-full border border-gray-300 rounded px-2 py-0.5 pr-6 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400">
              <option>1.2</option>
              <option>1.3</option>
            </select>
            <FaChevronDown className="absolute right-2 top-1.5 text-gray-500 text-sm pointer-events-none" />
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-end mb-1 px-3">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 text-sm rounded shadow">
            Sample abrufen
          </button>
        </div>
      </div>

      {/* Sample Payload Section */}
      <div className="w-full bg-white shadow-md rounded-lg border border-gray-100">
        <h2 className="text-base font-semibold px-3 py-3 bg-[#DAF1FF]">Sample-Payload</h2>

        <div className="w-full p-2">
        <textarea
          value={payload}
          onChange={(e) => setPayload(e.target.value)}
          rows="6"
          className="w-full border border-gray-300 rounded p-2 font-mono text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
        />

        {/* Buttons */}
        <div className="flex justify-between mt-2">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 text-sm rounded">
            Automatisch mappen
            </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeAndSample;