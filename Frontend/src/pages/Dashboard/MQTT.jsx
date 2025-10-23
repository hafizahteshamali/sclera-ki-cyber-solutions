"use client"

import { useState } from "react"

export default function MQTTConfiguration() {
  const [formData, setFormData] = useState({
    brokerUrl: "",
    clientId: "",
    protocol: "MQTT v3.1",
    keepAlive: "60",
    cleanSession: false,
    sessionExpiry: "7200",
    maxInFlightMessages: "20",
    reconnectDelay: "1000",
    maxPayloadSize: "268435455",
    compression: "none",
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleTestConnection = () => {
    alert("Testing connection...")
  }

  const handleNext = () => {
    alert("Proceeding to next step...")
  }

  return (
    <div className="min-h-screen p-4">
      <div className="w-full mx-auto">
        {/* Header - Compact */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">MQTT-Konfiguration</h1>

        {/* Connection Settings Section - Compact */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
          <div className="bg-blue-100 px-4 py-2 border-b border-gray-200">
            <h2 className="text-sm font-semibold text-gray-800">Verbindungseinstellungen</h2>
          </div>

          <div className="px-4 py-1 space-y-2">
            {/* Broker URL */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700 w-1/3">Broker URL</label>
              <input
                type="text"
                name="brokerUrl"
                value={formData.brokerUrl}
                onChange={handleInputChange}
                placeholder="tcp://localhost:1883"
                className="w-1/2 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Client ID */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700 w-1/3">Client ID</label>
              <input
                type="text"
                name="clientId"
                value={formData.clientId}
                onChange={handleInputChange}
                placeholder=""
                className="w-1/2 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Protocol */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700 w-1/3">Protokoll</label>
              <select
                name="protocol"
                value={formData.protocol}
                onChange={handleInputChange}
                className="w-1/2 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none bg-white"
              >
                <option>MQTT v3.1</option>
                <option>MQTT v3.1.1</option>
                <option>MQTT v5.0</option>
              </select>
            </div>

            {/* Keep Alive */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700 w-1/3">Keep Alive</label>
              <input
                type="text"
                name="keepAlive"
                value={formData.keepAlive}
                onChange={handleInputChange}
                placeholder="60"
                className="w-1/2 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Clean Session */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700 w-1/3">Clean Session</label>
              <input
                type="checkbox"
                name="cleanSession"
                checked={formData.cleanSession}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 rounded focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Session Expiry */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700 w-1/3">Session Expiry</label>
              <input
                type="text"
                name="sessionExpiry"
                value={formData.sessionExpiry}
                onChange={handleInputChange}
                placeholder="7200"
                className="w-1/2 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Performance Optional Section - Compact */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
          <div className="bg-blue-100 px-4 py-2 border-b border-gray-200">
            <h2 className="text-sm font-semibold text-gray-800">Performance optional?</h2>
          </div>

          <div className="px-4 py-1 space-y-2">
            {/* Max In-Flight Messages */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700 w-1/3">Max In-Flight Messages</label>
              <input
                type="text"
                name="maxInFlightMessages"
                value={formData.maxInFlightMessages}
                onChange={handleInputChange}
                placeholder="20"
                className="w-1/2 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Reconnect Delay */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700 w-1/3">Reconnect Delay</label>
              <input
                type="text"
                name="reconnectDelay"
                value={formData.reconnectDelay}
                onChange={handleInputChange}
                placeholder="1000"
                className="w-1/2 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Max Payload Größe */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700 w-1/3">Max Payload Größe</label>
              <input
                type="text"
                name="maxPayloadSize"
                value={formData.maxPayloadSize}
                onChange={handleInputChange}
                placeholder="268435455"
                className="w-1/2 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Kompression */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700 w-1/3">Kompression</label>
              <select
                name="compression"
                value={formData.compression}
                onChange={handleInputChange}
                className="w-1/2 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none bg-white"
              >
                <option value="none">Keine</option>
                <option value="gzip">GZIP</option>
                <option value="deflate">Deflate</option>
              </select>
            </div>
          </div>
        </div>

        {/* Status and Buttons - Compact */}
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 items-center justify-between pt-2">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-green-600">Broker erreichbar.</span> Protokoll: MQTT v6.0
          </p>

          <div className="flex gap-2">
            <button
              onClick={handleTestConnection}
              className="px-4 py-2 bg-blue-100 text-gray-800 text-sm font-medium rounded hover:bg-blue-200 transition-colors"
            >
              Verbindung testen
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors"
            >
              Weiter
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}