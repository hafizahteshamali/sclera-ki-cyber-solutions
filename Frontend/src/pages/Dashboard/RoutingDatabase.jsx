"use client"

import { useState } from "react"
import { FaChevronDown, FaCopy } from "react-icons/fa"
import { FiTrash2 } from "react-icons/fi"

const RoutingDatabase = () => {
  const [formData, setFormData] = useState({
    databaseType: "TimescaleDB",
    databaseHost: "postgresql://user:password@localhost:5432",
    databaseName: "",
    tlsEnabled: true,
    authentication: "Benutzername/Passwort",
    user: "admin-Knut",
    password: "••••••••",
  })

  const [mappings, setMappings] = useState([
    { id: 1, tags: "tenant", payloadField: "tenantId", dbColumn: "TimescaleDB" },
    { id: 2, tags: "site", payloadField: "site", dbColumn: "InfluxDB" },
    { id: 3, tags: "line", payloadField: "line2", dbColumn: "ClickHouse" },
  ])

  const [sources, setSources] = useState([
    {
      id: 1,
      source: "MQTT_Extruder01",
      type: "MQTT",
      quality: "86%",
      relevance: "Hoch",
      reliability: "94%",
      lastChecked: "Vor 3 Sekunde",
      status: "green",
    },
    {
      id: 2,
      source: "MQTT_Pump05",
      type: "MQTT",
      quality: "72%",
      relevance: "Mittel",
      reliability: "81%",
      lastChecked: "vor 10 Tagen",
      status: "yellow",
    },
    {
      id: 3,
      source: "MQTT_Pump02",
      type: "MQTT",
      quality: "90%",
      relevance: "Hoch",
      reliability: "97%",
      lastChecked: "vor 2 Monaten",
      status: "green",
    },
    {
      id: 4,
      source: "REST_EnergyAPI",
      type: "REST API",
      quality: "78%",
      relevance: "Niedrig",
      reliability: "89%",
      lastChecked: "vor 7 Monaten",
      status: "red",
    },
  ])

  const [newMapping, setNewMapping] = useState({
    tags: "",
    payloadField: "",
    dbColumn: "",
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleMappingChange = (e) => {
    const { name, value } = e.target
    setNewMapping((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const addMapping = () => {
    if (newMapping.tags && newMapping.payloadField && newMapping.dbColumn) {
      setMappings((prev) => [
        ...prev,
        {
          id: Math.max(...mappings.map((m) => m.id), 0) + 1,
          ...newMapping,
        },
      ])
      setNewMapping({ tags: "", payloadField: "", dbColumn: "" })
    }
  }

  const deleteMapping = (id) => {
    setMappings((prev) => prev.filter((m) => m.id !== id))
  }

  const deleteSource = (id) => {
    setSources((prev) => prev.filter((s) => s.id !== id))
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "green":
        return "bg-green-500"
      case "yellow":
        return "bg-yellow-500"
      case "red":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="min-h-screen px-2 sm:px-3 md:px-4">
      <div className="w-full mx-auto">
        {/* Header */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Routing & Datenbank</h1>

        {/* Database Connection Section */}
        <div className="bg-white rounded-lg shadow-sm mb-2">
          <div className="bg-blue-100 px-3 sm:px-4 py-1 rounded-t-lg border-b border-blue-200">
            <h2 className="text-sm sm:text-base font-semibold text-gray-800">Datenbankverbindung</h2>
          </div>

          <div className="px-3 sm:px-4 py-1.5 space-y-1">
            {/* Database Type & Host - Flex Row */}
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <div className="flex-1">
                <label className="block text-xs sm:text-sm font-medium text-gray-700">Datenbanktyp</label>
                <div className="relative">
                  <select
                    name="databaseType"
                    value={formData.databaseType}
                    onChange={handleInputChange}
                    className="w-full px-2 sm:px-3 py-1 border border-gray-300 rounded-md bg-white text-gray-900 appearance-none focus:outline-none text-xs sm:text-sm"
                  >
                    <option>TimescaleDB</option>
                    <option>PostgreSQL</option>
                    <option>MySQL</option>
                  </select>
                  <FaChevronDown className="absolute right-2 sm:right-3 top-1.5 sm:top-2 w-3 h-3 text-gray-500 pointer-events-none" />
                </div>
              </div>

              <div className="flex-1">
                <label className="block text-xs sm:text-sm font-medium text-gray-700">Datenbankhost</label>
                <input
                  type="text"
                  name="databaseHost"
                  value={formData.databaseHost}
                  onChange={handleInputChange}
                  className="w-full px-2 sm:px-3 py-1 border border-gray-300 rounded-md focus:outline-none text-xs sm:text-sm"
                />
              </div>
            </div>

            {/* Database Name */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700">Datenbankname</label>
              <input
                type="text"
                name="databaseName"
                value={formData.databaseName}
                onChange={handleInputChange}
                className="w-full px-2 sm:px-3 py-1 border border-gray-300 rounded-md focus:outline-none text-xs sm:text-sm"
              />
            </div>

            {/* TLS Checkbox */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="tlsEnabled"
                  checked={formData.tlsEnabled}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 rounded cursor-pointer"
                />
                <label className="ml-2 text-xs sm:text-sm font-medium text-gray-700 cursor-pointer">TLS erzwingen</label>
              </div>
              <div className="w-full sm:w-auto flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0 sm:space-x-4">
                <span className="text-xs text-green-600 whitespace-nowrap">Verbindung verschlüsselt. Version 2.0. 86%</span>
                <button className="py-1.5 w-full sm:w-[120px] bg-[#EBEBEB] rounded text-[var(--black-color)] text-xs sm:text-sm">
                  DB testen
                </button>
              </div>
            </div>

            {/* Authentication & User - Flex Row */}
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <div className="flex-1">
                <label className="block text-xs sm:text-sm font-medium text-gray-700">Authentifizierung</label>
                <div className="relative">
                  <select
                    name="authentication"
                    value={formData.authentication}
                    onChange={handleInputChange}
                    className="w-full px-2 sm:px-3 py-1 border border-gray-300 rounded-md bg-white text-gray-900 appearance-none focus:outline-none text-xs sm:text-sm"
                  >
                    <option>Benutzername/Passwort</option>
                    <option>API Key</option>
                    <option>OAuth</option>
                  </select>
                  <FaChevronDown className="absolute right-2 sm:right-3 top-1.5 sm:top-2 w-3 h-3 text-gray-500 pointer-events-none" />
                </div>
              </div>

              <div className="flex-1">
                <label className="block text-xs sm:text-sm font-medium text-gray-700">Benutzer</label>
                <input
                  type="text"
                  name="user"
                  value={formData.user}
                  onChange={handleInputChange}
                  className="w-full px-2 sm:px-3 py-1 border border-gray-300 rounded-md focus:outline-none text-xs sm:text-sm"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700">Passwort</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-2 sm:px-3 py-1 border border-gray-300 rounded-md focus:outline-none text-xs sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Data Mapping Section */}
        <div className="bg-white rounded-lg shadow-sm mb-4">
          <div className="bg-blue-100 px-3 sm:px-4 py-1.5 rounded-t-lg border-b border-blue-200 flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
            <h2 className="text-sm sm:text-base font-semibold text-gray-800">Daten-Mapping</h2>
            <div className="flex gap-2">
              <button className="px-2 sm:px-3 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 whitespace-nowrap">
                Aus Sample übernehmen
              </button>
              <button className="px-2 sm:px-3 py-1 text-xs font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 whitespace-nowrap">
                Mapping hinzufügen
              </button>
            </div>
          </div>

          <div className="px-3 sm:px-4 py-2 space-y-2">
            {/* Mapping Input Fields - Flex Row */}
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <div className="flex-1">
                <label className="block text-xs sm:text-sm font-medium text-gray-700">Payload-Feld</label>
                <input
                  type="text"
                  name="payloadField"
                  value={newMapping.payloadField}
                  onChange={handleMappingChange}
                  className="w-full px-2 sm:px-3 py-1 border border-gray-300 rounded-md focus:outline-none text-xs sm:text-sm"
                />
              </div>

              <div className="flex-1">
                <label className="block text-xs sm:text-sm font-medium text-gray-700">DB-Spalte</label>
                <input
                  type="text"
                  name="dbColumn"
                  value={newMapping.dbColumn}
                  onChange={handleMappingChange}
                  className="w-full px-2 sm:px-3 py-1 border border-gray-300 rounded-md focus:outline-none text-xs sm:text-sm"
                />
              </div>

              <div className="flex-1">
                <label className="block text-xs sm:text-sm font-medium text-gray-700">Typ</label>
                <div className="relative">
                  <select
                    name="tags"
                    value={newMapping.tags}
                    onChange={handleMappingChange}
                    className="w-full px-2 sm:px-3 py-1 border border-gray-300 rounded-md bg-white text-gray-900 appearance-none focus:outline-none text-xs sm:text-sm"
                  >
                    <option value="">tags</option>
                    <option value="tenant">tenant</option>
                    <option value="site">site</option>
                    <option value="line">line</option>
                  </select>
                  <FaChevronDown className="absolute right-2 sm:right-3 top-1.5 sm:top-2 w-3 h-3 text-gray-500 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Mappings Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-xs min-w-[500px] sm:min-w-0">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-1.5 px-2 sm:px-3 font-medium text-gray-700 whitespace-nowrap w-[20%]">Tags</th>
                    <th className="text-left py-1.5 px-2 sm:px-3 font-medium text-gray-700 whitespace-nowrap w-[30%]">Payload-Feld</th>
                    <th className="text-left py-1.5 px-2 sm:px-3 font-medium text-gray-700 whitespace-nowrap w-[30%]">DB-Spalte</th>
                    <th className="text-center py-1.5 px-2 sm:px-3 font-medium text-gray-700 whitespace-nowrap w-[20%]">Aktion</th>
                  </tr>
                </thead>
                <tbody>
                  {mappings.map((mapping) => (
                    <tr key={mapping.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-1.5 px-2 sm:px-3 text-gray-600 whitespace-nowrap w-[20%]">{mapping.tags}</td>
                      <td className="py-1.5 px-2 sm:px-3 text-gray-600 whitespace-nowrap w-[30%]">{mapping.payloadField}</td>
                      <td className="py-1.5 px-2 sm:px-3 text-gray-600 whitespace-nowrap w-[30%]">{mapping.dbColumn}</td>
                      <td className="py-1.5 px-2 sm:px-3 text-center w-[20%]">
                        <button
                          onClick={() => deleteMapping(mapping.id)}
                          className="text-gray-400 hover:text-red-600 transition-colors"
                        >
                          <FiTrash2 className="w-3 h-3" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sources Table Section */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-xs min-w-[700px] sm:min-w-0">
              <thead>
                <tr className="bg-blue-100 border-b border-blue-200">
                  <th className="text-left py-1.5 px-2 sm:px-4 font-semibold text-gray-800 whitespace-nowrap w-[15%]">Quelle</th>
                  <th className="text-left py-1.5 px-2 sm:px-4 font-semibold text-gray-800 whitespace-nowrap w-[10%]">Typ</th>
                  <th className="text-left py-1.5 px-2 sm:px-4 font-semibold text-gray-800 whitespace-nowrap w-[12%]">Datenqualität</th>
                  <th className="text-left py-1.5 px-2 sm:px-4 font-semibold text-gray-800 whitespace-nowrap w-[12%]">Relevanz</th>
                  <th className="text-left py-1.5 px-2 sm:px-4 font-semibold text-gray-800 whitespace-nowrap w-[15%]">Zuverlässigkeit</th>
                  <th className="text-left py-1.5 px-2 sm:px-4 font-semibold text-gray-800 whitespace-nowrap w-[16%]">Zuletzt geprüft</th>
                  <th className="text-center py-1.5 px-2 sm:px-4 font-semibold text-gray-800 whitespace-nowrap w-[10%]">Status</th>
                  <th className="text-center py-1.5 px-2 sm:px-4 font-semibold text-gray-800 whitespace-nowrap w-[10%]">Aktion</th>
                </tr>
              </thead>
              <tbody>
                {sources.map((source) => (
                  <tr key={source.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-1.5 px-2 sm:px-4 text-gray-900 font-medium whitespace-nowrap w-[15%]">{source.source}</td>
                    <td className="py-1.5 px-2 sm:px-4 text-gray-600 whitespace-nowrap w-[10%]">{source.type}</td>
                    <td className="py-1.5 px-2 sm:px-4 text-gray-600 whitespace-nowrap w-[12%]">{source.quality}</td>
                    <td className="py-1.5 px-2 sm:px-4 text-gray-600 whitespace-nowrap w-[12%]">{source.relevance}</td>
                    <td className="py-1.5 px-2 sm:px-4 text-gray-600 whitespace-nowrap w-[15%]">{source.reliability}</td>
                    <td className="py-1.5 px-2 sm:px-4 text-gray-600 whitespace-nowrap w-[16%]">{source.lastChecked}</td>
                    <td className="py-1.5 px-2 sm:px-4 text-center w-[10%]">
                      <div className={`w-2 h-2 rounded-full mx-auto ${getStatusColor(source.status)}`}></div>
                    </td>
                    <td className="py-1.5 px-2 sm:px-4 text-center w-[10%]">
                      <div className="flex justify-center gap-1">
                        <button className="text-gray-400 hover:text-blue-600 transition-colors">
                          <FaCopy className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => deleteSource(source.id)}
                          className="text-gray-400 hover:text-red-600 transition-colors"
                        >
                          <FiTrash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer Buttons */}
          <div className="py-3 border-t border-gray-200 flex flex-col sm:flex-row justify-end gap-2 rounded-b-lg px-3 sm:px-4">
            <button className="px-4 py-2 w-full sm:w-[120px] lg:w-[20%] text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 whitespace-nowrap">
              Mapping testen
            </button>
            <button className="px-4 py-2 w-full sm:w-[120px] lg:w-[20%] text-xs font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 whitespace-nowrap">
              Weiter
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoutingDatabase