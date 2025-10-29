import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const SubscribeAndSample = () => {
  const [payload, setPayload] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasReceivedPayload, setHasReceivedPayload] = useState(false);

  const [formData, setFormData] = useState({
    topicFilter: "tenant/{tenant}/site/{site}/+/+/sensor/+",
    qos: "1",
    retained: false,
  });

  // Input change handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Sample retrieval function
  const handleSample = () => {
    const { topicFilter, qos } = formData;
    if (!topicFilter.trim() || !qos) {
      alert("⚠️ Bitte füllen Sie alle erforderlichen Felder aus!");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsLoading(false);
      
      // Simulate success response 70% of the time
      const isSuccess = Math.random() > 0.3;
      
      if (isSuccess) {
        const samplePayload = `{
  "tenant": "tenantA",
  "site": "lab01",
  "machine": "machine01",
  "sensor": "sensorA",
  "value": 18.54,
  "unit": "°C",
  "timestamp": 1713779850
}`;
        setPayload(samplePayload);
        setHasReceivedPayload(true);
      } else {
        // Simulate timeout error
        setPayload("Keine Nachricht empfangen (Timeout 3s).");
        setHasReceivedPayload(false);
      }
    }, 1500);
  };

  // Auto mapping function
  const handleAutoMap = () => {
    if (!hasReceivedPayload || !payload || payload === "Keine Nachricht empfangen (Timeout 3s).") {
      alert("⚠️ Bitte erst einen Sample-Payload abrufen!");
      return;
    }
    
    try {
      const parsedPayload = JSON.parse(payload);
      const keys = Object.keys(parsedPayload);
      alert(`✅ Automatisches Mapping vorgeschlagen für: ${keys.join(", ")}`);
    } catch (error) {
      alert("❌ Konnte Payload nicht parsen für automatisches Mapping.");
    }
  };

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
            name="topicFilter"
            value={formData.topicFilter}
            onChange={handleChange}
            placeholder="tenant/{tenant}/site/{site}/+/+/sensor/+"
            className="w-full border border-gray-300 rounded px-2 py-0.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
        </div>

        {/* QoS Level */}
        <div className="mb-1 px-3">
          <label className="block text-sm font-medium mb-0.5">QoS Level</label>
          <div className="relative">
            <select
              name="qos"
              value={formData.qos}
              onChange={handleChange}
              className="appearance-none w-full border border-gray-300 rounded px-2 py-0.5 pr-6 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            <FaChevronDown className="absolute right-2 top-1.5 text-gray-500 text-sm pointer-events-none" />
          </div>
        </div>

        {/* Retained Messages */}
        <div className="mb-1 px-3 flex justify-between items-center">
          <label htmlFor="retained" className="text-sm font-medium">
            Retained Messages verarbeiten
          </label>
          <input
            type="checkbox"
            id="retained"
            name="retained"
            checked={formData.retained}
            onChange={handleChange}
            className="w-3 h-3"
          />
        </div>

        {/* Button */}
        <div className="flex justify-end mb-1 px-3">
          <button
            onClick={handleSample}
            disabled={isLoading}
            className={`px-3 py-2 text-sm rounded shadow ${
              isLoading 
                ? "bg-gray-400 cursor-not-allowed text-white" 
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            {isLoading ? "Lädt..." : "Sample abrufen"}
          </button>
        </div>
      </div>

      {/* Sample Payload Section */}
      <div className="w-full bg-white shadow-md rounded-lg border border-gray-100">
        <h2 className="text-base font-semibold px-3 py-3 bg-[#DAF1FF]">Sample-Payload</h2>

        <div className="w-full p-2">
          <div className={`border rounded p-2 font-mono text-sm max-h-60 overflow-y-auto ${
            payload === "Keine Nachricht empfangen (Timeout 3s)." 
              ? "border-red-300 bg-red-50 text-red-700" 
              : "border-gray-300 bg-white"
          }`}>
            {payload ? (
              <pre className="whitespace-pre-wrap">{payload}</pre>
            ) : (
              <div className="text-gray-500 italic">
                {isLoading ? "Empfange Nachricht..." : "Klicken Sie auf 'Sample abrufen' um Daten zu erhalten"}
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-2">
            <button 
              onClick={handleAutoMap}
              disabled={!hasReceivedPayload}
              className={`px-2 py-2 text-sm rounded ${
                hasReceivedPayload 
                  ? "bg-blue-500 hover:bg-blue-600 text-white" 
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Automatisch mappen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeAndSample;