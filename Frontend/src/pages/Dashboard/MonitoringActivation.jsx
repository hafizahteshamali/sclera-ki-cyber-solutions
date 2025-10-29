"use client"

import { useState, useEffect } from "react"
import { FaCheck } from "react-icons/fa"

const MonitoringActivation = () => {
  const [checkboxes, setCheckboxes] = useState({
    connectDisconnect: true,
    schemaWechsel: true,
    aclTreffer: true,
    deadLetterQueue: true,
  })

  const [dlqTopic, setDlqTopic] = useState("")
  const [isPipelineActive, setIsPipelineActive] = useState(false)
  const [metrics, setMetrics] = useState({
    latency: "150 ms",
    messageRate: "23 msg/s",
    reconnects: "3"
  })

  const handleCheckboxChange = (key) => {
    setCheckboxes((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const handleDryRun = () => {
    // Simulate dry run
    alert("Dry-Run erfolgreich. Alle Komponenten sind bereit.")
  }

  const handleSaveAndActivate = () => {
    // Validate DLQ topic if DLQ is enabled
    if (checkboxes.deadLetterQueue && !dlqTopic.trim()) {
      alert("Bitte geben Sie einen DLQ Topic ein, wenn Dead Letter Queue aktiviert ist.")
      return
    }

    // Activate pipeline
    setIsPipelineActive(true)
    
    // Simulate live metrics updates
    const interval = setInterval(() => {
      setMetrics(prev => ({
        latency: `${140 + Math.floor(Math.random() * 20)} ms`,
        messageRate: `${20 + Math.floor(Math.random() * 10)} msg/s`,
        reconnects: `${2 + Math.floor(Math.random() * 2)}`
      }))
    }, 3000)

    // Cleanup interval on component unmount
    return () => clearInterval(interval)
  }

  return (
    <div className="min-h-screen px-4 py-2">
      <div className="w-full mx-auto py-6 lg:py-0">
        {/* Title */}
        <h1 className="text-2xl lg:text-4xl font-bold mb-2 text-gray-900">Monitoring & Aktivieren</h1>

        {/* Monitoring & Audit Section */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="bg-blue-100 px-6 py-3 rounded-t-lg">
            <h2 className="text-lg font-semibold text-gray-800">Monitoring & Audit</h2>
          </div>

          <div className="p-6">
            {/* Connect/Disconnect */}
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center cursor-pointer">
                <span className="ml-3 text-gray-700">Connect/Disconnect Logging</span>
              </label>
              <input
                type="checkbox"
                checked={checkboxes.connectDisconnect}
                onChange={() => handleCheckboxChange("connectDisconnect")}
                className="w-5 h-5 rounded border-gray-300 text-blue-600 cursor-pointer"
              />
            </div>

            {/* Schema-Wechsel */}
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center cursor-pointer">
                <span className="ml-3 text-gray-700">Schema-Wechsel Logging</span>
              </label>
              <input
                type="checkbox"
                checked={checkboxes.schemaWechsel}
                onChange={() => handleCheckboxChange("schemaWechsel")}
                className="w-5 h-5 rounded border-gray-300 text-blue-600 cursor-pointer"
              />
            </div>

            {/* ACL-Treffer */}
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center cursor-pointer">
                <span className="ml-3 text-gray-700">ACL-Treffer Logging</span>
              </label>
              <input
                type="checkbox"
                checked={checkboxes.aclTreffer}
                onChange={() => handleCheckboxChange("aclTreffer")}
                className="w-5 h-5 rounded border-gray-300 text-blue-600 cursor-pointer"
              />
            </div>

            {/* Dead Letter Queue */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
              <div className="flex items-center flex-1 w-full sm:w-auto">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={checkboxes.deadLetterQueue}
                    onChange={() => handleCheckboxChange("deadLetterQueue")}
                    className="w-5 h-5 rounded border-gray-300 text-blue-600 cursor-pointer"
                  />
                  <span className="ml-3 text-gray-700">Dead Letter Queue aktivieren</span>
                </label>
              </div>
              <input
                type="text"
                placeholder="DLQ Topic"
                value={dlqTopic}
                onChange={(e) => setDlqTopic(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto sm:flex-1 sm:max-w-xs sm:ml-4"
                disabled={!checkboxes.deadLetterQueue}
              />
            </div>
          </div>
        </div>

        {/* Metriken Section */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="bg-blue-100 px-6 py-3 rounded-t-lg">
            <h2 className="text-lg font-semibold text-gray-800">Metriken</h2>
          </div>

          <div className="px-6 py-2">
            <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-6 sm:gap-0">
              {/* Latenz */}
              <div className="flex flex-col items-start sm:items-center w-full sm:w-[25%]">
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 overflow-hidden w-full text-left sm:text-center">{metrics.latency}</div>
                <div className="text-sm text-gray-600 w-full text-left sm:text-center">Latenz</div>
              </div>

              {/* Nachrichtenrate */}
              <div className="flex flex-col items-start sm:items-center w-full sm:w-[25%]">
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 overflow-hidden w-full text-left sm:text-center">{metrics.messageRate}</div>
                <div className="text-sm text-gray-600 w-full text-left sm:text-center">Nachrichtenrate</div>
              </div>

              {/* Reconnects */}
              <div className="flex flex-col items-start sm:items-center w-full sm:w-[25%]">
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 overflow-hidden w-full text-left sm:text-center">{metrics.reconnects}</div>
                <div className="text-sm text-gray-600 w-full text-left sm:text-center">Reconnects</div>
              </div>
            </div>
          </div>
        </div>

        {/* Status and Actions */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
          {isPipelineActive && (
            <div className="text-sm text-green-600 font-medium w-full sm:w-auto text-left sm:text-left">
              Pipeline aktiv. Status: Verbunden. Letzter Heartbeat: vor 3 s.
            </div>
          )}
          
          {!isPipelineActive && (
            <div className="text-sm text-gray-600 font-medium w-full sm:w-auto text-left sm:text-left">
              Pipeline inaktiv. Bitte aktivieren Sie die Pipeline.
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button 
              onClick={handleDryRun}
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors w-full sm:w-auto"
            >
              Dry-Run
            </button>
            <button 
              onClick={handleSaveAndActivate}
              className="px-6 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors w-full sm:w-auto"
            >
              Speichern & Aktivieren
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MonitoringActivation