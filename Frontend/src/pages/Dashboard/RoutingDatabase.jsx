"use client"

import { useState } from "react"
import { FaChevronDown, FaCopy } from "react-icons/fa"
import { FiTrash2 } from "react-icons/fi"

const RoutingDatabase = () => {
  const [formData, setFormData] = useState({
    databaseType: "TimescaleDB",
    databaseHost: "postgresqls://db.internal:5432/telemetry?sslmode=require",
    databaseName: "",
    tlsEnabled: true,
    authentication: "Interner Token",
    user: "",
    password: "",
  })

  const [mappings, setMappings] = useState([
    { id: 1, payloadField: "tenant", dbColumn: "tenant", type: "tag" },
    { id: 2, payloadField: "site", dbColumn: "site", type: "tag" },
    { id: 3, payloadField: "line", dbColumn: "line", type: "tag" },
    { id: 4, payloadField: "value", dbColumn: "value", type: "field" },
    { id: 5, payloadField: "timestamp", dbColumn: "timestamp", type: "time" },
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
  ])

  const [newMapping, setNewMapping] = useState({
    payloadField: "",
    dbColumn: "",
    type: "",
  })

  const [retentionData, setRetentionData] = useState({
    rawData: { value: "", unit: "Tage" },
    aggregate1min: { value: "", unit: "Jahre" },
    aggregate15min: { value: "", unit: "Jahre" },
    storeForwardEnabled: false,
    storeForwardPath: "",
    storeForwardMaxSize: { value: "", unit: "MB" },
    storeForwardRetention: { value: "", unit: "Stunden" },
  })

  const [dbTestResult, setDbTestResult] = useState("")

  const payloadFieldSuggestions = [
    "tenant", "site", "line", "machine", "sensor", "unit", "schema",
    "value", "q", "seq", "temperature", "vibration", "timestamp", "ts"
  ]

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

  const handleRetentionChange = (e) => {
    const { name, value } = e.target
    if (name.includes('.')) {
      const [parent, child] = name.split('.')
      setRetentionData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }))
    } else {
      setRetentionData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const validateForm = () => {
    // Check database connection fields
    if (!formData.databaseHost.trim()) {
      alert("Datenbankhost ist erforderlich")
      return false
    }
    if (!formData.databaseName.trim()) {
      alert("Datenbankname ist erforderlich")
      return false
    }
    if (formData.authentication === "Benutzer/Passwort" && (!formData.user.trim() || !formData.password.trim())) {
      alert("Benutzer und Passwort sind erforderlich")
      return false
    }

    // Check if at least one field and one time mapping exists
    const fieldMappings = mappings.filter(m => m.type === "field")
    const timeMappings = mappings.filter(m => m.type === "time")
    
    if (fieldMappings.length === 0) {
      alert("Mindestens ein Feld-Mapping ist erforderlich")
      return false
    }
    if (timeMappings.length === 0) {
      alert("Mindestens ein Time-Mapping ist erforderlich")
      return false
    }

    // Check if database test was successful
    if (!dbTestResult.includes("erreichbar")) {
      alert("Bitte testen Sie zuerst die Datenbankverbindung")
      return false
    }

    return true
  }

  const addMapping = () => {
    if (!newMapping.payloadField || !newMapping.dbColumn || !newMapping.type) {
      alert("Bitte füllen Sie alle Mapping-Felder aus")
      return
    }

    setMappings((prev) => [
      ...prev,
      {
        id: Math.max(...mappings.map((m) => m.id), 0) + 1,
        ...newMapping,
      },
    ])
    setNewMapping({ payloadField: "", dbColumn: "", type: "" })
  }

  const deleteMapping = (id) => {
    if (mappings.length <= 1) {
      alert("Mindestens ein Mapping muss vorhanden sein")
      return
    }
    setMappings((prev) => prev.filter((m) => m.id !== id))
  }

  const deleteSource = (id) => {
    if (sources.length <= 1) {
      alert("Mindestens eine Quelle muss vorhanden sein")
      return
    }
    setSources((prev) => prev.filter((s) => s.id !== id))
  }

  const handleTestDB = () => {
    if (!formData.databaseHost.trim() || !formData.databaseName.trim()) {
      alert("Bitte füllen Sie alle Datenbankfelder aus, um den Test durchzuführen")
      return
    }

    // Simulate DB test - 80% success rate
    const isSuccess = Math.random() > 0.2
    
    if (isSuccess) {
      setDbTestResult("Timescale erreichbar. Version 2.x. SSL aktiv.")
    } else {
      setDbTestResult("Verbindung fehlgeschlagen. Host/Port/TLS prüfen.")
    }
  }

  const handleTestMapping = () => {
    if (mappings.length === 0) {
      alert("Bitte fügen Sie mindestens ein Mapping hinzu, um den Test durchzuführen")
      return
    }
    
    // Simulate mapping test
    alert("Schreibtest erfolgreich (keine Daten dauerhaft gespeichert).")
  }

  const handleContinue = () => {
    if (!validateForm()) {
      return
    }
    alert("Alle Felder sind korrekt ausgefüllt. Weiterleitung...")
  }

  const loadSampleMappings = () => {
    const sampleMappings = [
      { id: Math.max(...mappings.map(m => m.id), 0) + 1, payloadField: "machine", dbColumn: "machine", type: "tag" },
      { id: Math.max(...mappings.map(m => m.id), 0) + 2, payloadField: "sensor", dbColumn: "sensor", type: "tag" },
      { id: Math.max(...mappings.map(m => m.id), 0) + 3, payloadField: "unit", dbColumn: "unit", type: "tag" },
      { id: Math.max(...mappings.map(m => m.id), 0) + 4, payloadField: "temperature", dbColumn: "temperature", type: "field" },
    ]
    
    setMappings(prev => [...prev, ...sampleMappings])
    alert("Sample-Mappings erfolgreich geladen")
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
        <div className="bg-white rounded shadow-sm mb-2">
          <div className="bg-blue-100 px-3 sm:px-4 py-1 rounded-t border-b border-blue-200">
            <h2 className="text-sm sm:text-base font-semibold text-gray-800">Datenbankverbindung</h2>
          </div>

          <div className="px-3 sm:px-4 py-1 space-y-1">
            {/* Database Type & Host - Flex Row */}
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <div className="flex-1">
                <label className="block text-xs sm:text-sm font-medium text-gray-700">Datenbanktyp </label>
                <div className="relative">
                  <select
                    name="databaseType"
                    value={formData.databaseType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-2 sm:px-3 py-0.5 border border-gray-300 rounded bg-white text-gray-900 appearance-none focus:outline-none text-[10px] sm:text-sm"
                  >
                    <option>TimescaleDB</option>
                    <option>InfluxDB</option>
                    <option>ClickHouse</option>
                  </select>
                  <FaChevronDown className="absolute right-2 sm:right-3 top-1.5 sm:top-2 w-3 h-3 text-gray-500 pointer-events-none" />
                </div>
              </div>

              <div className="flex-1">
                <label className="block text-xs sm:text-sm font-medium text-gray-700">Datenbankhost </label>
                <input
                  type="text"
                  name="databaseHost"
                  value={formData.databaseHost}
                  onChange={handleInputChange}
                  required
                  placeholder="postgresqls://db.internal:5432/telemetry?sslmode=require"
                  className="w-full px-2 sm:px-3 py-0.5 border border-gray-300 rounded focus:outline-none text-[10px] sm:text-sm"
                />
              </div>
            </div>

            {/* Database Name */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700">Datenbankname </label>
              <input
                type="text"
                name="databaseName"
                value={formData.databaseName}
                onChange={handleInputChange}
                required
                className="w-full px-2 sm:px-3 py-0.5 border border-gray-300 rounded focus:outline-none text-xs sm:text-sm"
              />
            </div>

            {/* TLS Checkbox & DB Test */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="tlsEnabled"
                  checked={formData.tlsEnabled}
                  onChange={handleInputChange}
                  required
                  className="w-4 h-4 text-blue-600 rounded cursor-pointer"
                />
                <label className="ml-2 text-xs sm:text-sm font-medium text-gray-700 cursor-pointer">TLS erzwingen </label>
              </div>
              <div className="w-full sm:w-auto flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0 sm:space-x-4">
                <span className={`text-xs whitespace-nowrap ${
                  dbTestResult.includes("erreichbar") ? "text-green-600" : 
                  dbTestResult.includes("fehlgeschlagen") ? "text-red-600" : "text-gray-600"
                }`}>
                  {dbTestResult || "Verbindung wurde noch nicht getestet"}
                </span>
                <button 
                  onClick={handleTestDB}
                  className="py-1.5 w-full sm:w-[120px] bg-[#EBEBEB] rounded text-[var(--black-color)] text-xs sm:text-sm"
                >
                  DB testen
                </button>
              </div>
            </div>

            {/* Authentication & User - Flex Row */}
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <div className="flex-1">
                <label className="block text-xs sm:text-sm font-medium text-gray-700">Authentifizierung </label>
                <div className="relative">
                  <select
                    name="authentication"
                    value={formData.authentication}
                    onChange={handleInputChange}
                    required
                    className="w-full px-2 sm:px-3 py-0.5 border border-gray-300 rounded bg-white text-gray-900 appearance-none focus:outline-none text-xs sm:text-sm"
                  >
                    <option>Interner Token</option>
                    <option>Benutzer/Passwort</option>
                  </select>
                  <FaChevronDown className="absolute right-2 sm:right-3 top-1.5 sm:top-2 w-3 h-3 text-gray-500 pointer-events-none" />
                </div>
              </div>

              {formData.authentication === "Benutzer/Passwort" && (
                <div className="flex-1">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">Benutzer </label>
                  <input
                    type="text"
                    name="user"
                    value={formData.user}
                    onChange={handleInputChange}
                    required
                    className="w-full px-2 sm:px-3 py-1 border border-gray-300 rounded focus:outline-none text-xs sm:text-sm"
                  />
                </div>
              )}
            </div>

            {/* Password - Only show for Benutzer/Passwort */}
            {formData.authentication === "Benutzer/Passwort" && (
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700">Passwort </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-2 sm:px-3 py-1 border border-gray-300 rounded focus:outline-none text-xs sm:text-sm"
                />
              </div>
            )}
          </div>
        </div>

        {/* Data Mapping Section */}
        <div className="bg-white rounded shadow-sm mb-2">
          <div className="bg-blue-100 px-3 sm:px-4 py-1 rounded-t border-b border-blue-200 flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
            <h2 className="text-sm sm:text-base font-semibold text-gray-800">Daten-Mapping (Matrix)</h2>
            <div className="flex gap-2">
              <button 
                onClick={loadSampleMappings}
                className="px-2 sm:px-3 py-1 text-[10px] lg:text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 whitespace-nowrap"
              >
                Aus Sample übernehmen
              </button>
              <button 
                onClick={addMapping}
                className="px-2 sm:px-3 py-1 text-[10px] lg:text-xs font-medium text-white bg-blue-600 rounded hover:bg-blue-700 whitespace-nowrap"
              >
                Mapping hinzufügen
              </button>
            </div>
          </div>

          <div className="px-3 sm:px-4 py-1 space-y-1">
            {/* Mapping Input Fields - Flex Row */}
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <div className="flex-1">
                <label className="block text-xs sm:text-sm font-medium text-gray-700">Payload-Feld </label>
                <input
                  type="text"
                  name="payloadField"
                  value={newMapping.payloadField}
                  onChange={handleMappingChange}
                  list="payloadSuggestions"
                  placeholder="Aus Sample auswählen"
                  className="w-full px-2 sm:px-3 py-0.5 border border-gray-300 rounded focus:outline-none text-[10px] sm:text-sm"
                />
                <datalist id="payloadSuggestions">
                  {payloadFieldSuggestions.map((suggestion, index) => (
                    <option key={index} value={suggestion} />
                  ))}
                </datalist>
              </div>

              <div className="flex-1">
                <label className="block text-xs sm:text-sm font-medium text-gray-700">DB-Spalte </label>
                <input
                  type="text"
                  name="dbColumn"
                  value={newMapping.dbColumn}
                  onChange={handleMappingChange}
                  required
                  className="w-full px-2 sm:px-3 py-0.5 border border-gray-300 rounded focus:outline-none text-[10px] sm:text-sm"
                />
              </div>

              <div className="flex-1">
                <label className="block text-xs sm:text-sm font-medium text-gray-700">Typ </label>
                <div className="relative">
                  <select
                    name="type"
                    value={newMapping.type}
                    onChange={handleMappingChange}
                    required
                    className="w-full px-2 sm:px-3 py-0.5 border border-gray-300 rounded bg-white text-gray-900 appearance-none focus:outline-none text-[10px] sm:text-sm"
                  >
                    <option value="">Bitte auswählen</option>
                    <option value="tag">tag</option>
                    <option value="field">field</option>
                    <option value="time">time</option>
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
                    <th className="text-left py-1.5 px-2 sm:px-3 font-medium text-gray-700 whitespace-nowrap w-[30%]">Payload-Feld</th>
                    <th className="text-left py-1.5 px-2 sm:px-3 font-medium text-gray-700 whitespace-nowrap w-[30%]">DB-Spalte</th>
                    <th className="text-left py-1.5 px-2 sm:px-3 font-medium text-gray-700 whitespace-nowrap w-[20%]">Typ</th>
                    <th className="text-center py-1.5 px-2 sm:px-3 font-medium text-gray-700 whitespace-nowrap w-[20%]">Aktion</th>
                  </tr>
                </thead>
                <tbody>
                  {mappings.map((mapping) => (
                    <tr key={mapping.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-1.5 px-2 sm:px-3 text-gray-600 whitespace-nowrap w-[30%]">{mapping.payloadField}</td>
                      <td className="py-1.5 px-2 sm:px-3 text-gray-600 whitespace-nowrap w-[30%]">{mapping.dbColumn}</td>
                      <td className="py-1.5 px-2 sm:px-3 text-gray-600 whitespace-nowrap w-[20%]">{mapping.type}</td>
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

        {/* Retention & Store-Forward Section */}
        <div className="bg-white rounded shadow-sm mb-2">
          <div className="bg-blue-100 px-3 sm:px-4 py-1 rounded-t border-b border-blue-200">
            <h2 className="text-sm sm:text-base font-semibold text-gray-800">Retention & Store-Forward (optional)</h2>
          </div>

          <div className="px-3 sm:px-4 py-1">
  {/* Retention Settings */}
  <div className="flex flex-col justify-start md:flex-row gap-4">
    {/* Rohdaten */}
    <div className="flex flex-col justify-start w-full lg:w-[23%]">
      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Rohdaten</label>
      <div className="flex justify-between">
        <input
          type="number"
          name="rawData.value"
          value={retentionData.rawData.value}
          onChange={handleRetentionChange}
          className="w-[45%] px-2 py-1 border border-gray-300 rounded text-xs sm:text-sm"
          placeholder="30"
        />
        <select
          name="rawData.unit"
          value={retentionData.rawData.unit}
          onChange={handleRetentionChange}
          className="w-24 px-2 py-1 border border-gray-300 rounded text-xs sm:text-sm"
        >
          <option>Tage</option>
          <option>Wochen</option>
          <option>Monate</option>
        </select>
      </div>
    </div>

    {/* Aggregat 1-min */}
    <div className="flex flex-col justify-start w-full lg:w-[23%]">
      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Aggregat 1-min</label>
      <div className="flex justify-between">
        <input
          type="number"
          name="aggregate1min.value"
          value={retentionData.aggregate1min.value}
          onChange={handleRetentionChange}
          className="w-[45%] px-2 py-1 border border-gray-300 rounded text-xs sm:text-sm"
          placeholder="1"
        />
        <select
          name="aggregate1min.unit"
          value={retentionData.aggregate1min.unit}
          onChange={handleRetentionChange}
          className="w-24 px-2 py-1 border border-gray-300 rounded text-xs sm:text-sm"
        >
          <option>Jahre</option>
          <option>Monate</option>
        </select>
      </div>
    </div>

    {/* Aggregat 15-min */}
    <div className="flex flex-col justify-start w-full lg:w-[23%]">
      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Aggregat 15-min</label>
      <div className="flex justify-between">
        <input
          type="number"
          name="aggregate15min.value"
          value={retentionData.aggregate15min.value}
          onChange={handleRetentionChange}
          className="w-[45%] px-2 py-1 border border-gray-300 rounded text-xs sm:text-sm"
          placeholder="2"
        />
        <select
          name="aggregate15min.unit"
          value={retentionData.aggregate15min.unit}
          onChange={handleRetentionChange}
          className="w-24 px-2 py-1 border border-gray-300 rounded text-xs sm:text-sm"
        >
          <option>Jahre</option>
          <option>Monate</option>
        </select>
      </div>
    </div>
  {/* Store & Forward Toggle */}
  <div className="flex items-end justify-between">
    <div className="flex items-center">
      <input
        type="checkbox"
        name="storeForwardEnabled"
        checked={retentionData.storeForwardEnabled}
        onChange={handleRetentionChange}
        className="w-4 h-4 text-blue-600 rounded cursor-pointer"
      />
      <label className="ml-2 text-xs sm:text-sm font-medium text-gray-700 cursor-pointer">
        Store & Forward aktivieren
      </label>
    </div>
  </div>

  </div>


  {/* Store & Forward Details - Only show when enabled */}
  {retentionData.storeForwardEnabled && (
    <div className="flex flex-col md:flex-row gap-4 p-3 bg-gray-50 rounded">
      <div className="flex-1">
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Pfad</label>
        <input
          type="text"
          name="storeForwardPath"
          value={retentionData.storeForwardPath}
          onChange={handleRetentionChange}
          placeholder="/var/data/store-forward"
          className="w-full px-2 py-1 border border-gray-300 rounded text-xs sm:text-sm"
        />
      </div>
      <div className="flex-1">
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Max Größe</label>
        <div className="flex gap-2">
          <input
            type="number"
            name="storeForwardMaxSize.value"
            value={retentionData.storeForwardMaxSize.value}
            onChange={handleRetentionChange}
            placeholder="100"
            className="flex-1 px-2 py-1 border border-gray-300 rounded text-xs sm:text-sm"
          />
          <select
            name="storeForwardMaxSize.unit"
            value={retentionData.storeForwardMaxSize.unit}
            onChange={handleRetentionChange}
            className="w-20 px-2 py-1 border border-gray-300 rounded text-xs sm:text-sm"
          >
            <option>MB</option>
            <option>GB</option>
          </select>
        </div>
      </div>
      <div className="flex-1">
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Retention</label>
        <div className="flex gap-2">
          <input
            type="number"
            name="storeForwardRetention.value"
            value={retentionData.storeForwardRetention.value}
            onChange={handleRetentionChange}
            placeholder="24"
            className="flex-1 px-2 py-1 border border-gray-300 rounded text-xs sm:text-sm"
          />
          <select
            name="storeForwardRetention.unit"
            value={retentionData.storeForwardRetention.unit}
            onChange={handleRetentionChange}
            className="w-20 px-2 py-1 border border-gray-300 rounded text-xs sm:text-sm"
          >
            <option>Stunden</option>
            <option>Tage</option>
          </select>
        </div>
      </div>
    </div>
  )}
</div>
        </div>

        {/* Sources Table Section */}
        <div className="bg-white rounded shadow-sm">
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
          <div className="pt-1 border-t border-gray-200 flex flex-col sm:flex-row justify-end gap-2 rounded-b-lg px-3 sm:px-4 lg:px-0">
            <button 
              onClick={handleTestMapping}
              className="px-4 py-2 w-full sm:w-[120px] lg:w-[20%] text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 whitespace-nowrap"
            >
              Mapping testen
            </button>
            <button 
              onClick={handleContinue}
              className="px-4 py-2 w-full sm:w-[120px] lg:w-[20%] text-xs font-medium text-white bg-blue-600 rounded hover:bg-blue-700 whitespace-nowrap"
            >
              Weiter
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoutingDatabase