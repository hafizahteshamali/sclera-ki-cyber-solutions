"use client"

import { useState } from "react"
import { FaCheck } from "react-icons/fa"

const MonitoringActivation = () => {
  const [checkboxes, setCheckboxes] = useState({
    connectDisconnect: true,
    schemaWechsel: true,
    aclTreffer: true,
    deadLetterQueue: true,
  })

  const [botToken, setBotToken] = useState("")

  const handleCheckboxChange = (key) => {
    setCheckboxes((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
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
                <span className="ml-3 text-gray-700">Connect/Disconnect</span>
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
                <span className="ml-3 text-gray-700">Schema-Wechsel</span>
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
                <span className="ml-3 text-gray-700">ACL-Treffer</span>
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
                placeholder="Bot Token"
                value={botToken}
                onChange={(e) => setBotToken(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto sm:flex-1 sm:max-w-xs sm:ml-4"
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
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 overflow-hidden w-full text-left sm:text-center">150 ms</div>
                <div className="text-sm text-gray-600 w-full text-left sm:text-center">Latenz</div>
              </div>

              {/* Nachrichtenrate */}
              <div className="flex flex-col items-start sm:items-center w-full sm:w-[25%]">
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 overflow-hidden w-full text-left sm:text-center">23 msg/s</div>
                <div className="text-sm text-gray-600 w-full text-left sm:text-center">Nachrichtenrate</div>
              </div>

              {/* Reconnects */}
              <div className="flex flex-col items-start sm:items-center w-full sm:w-[25%]">
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 overflow-hidden w-full text-left sm:text-center">3</div>
                <div className="text-sm text-gray-600 w-full text-left sm:text-center">Reconnects</div>
              </div>
            </div>
          </div>
        </div>

        {/* Status and Actions */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
          <div className="text-sm text-green-600 font-medium w-full sm:w-auto text-left sm:text-left">
            Pipeline aktiv. Status: Verbunden. Letzter Heartbeat: vor 3 s.
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors w-full sm:w-auto">
              Dry-Run
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors w-full sm:w-auto">
              Snapshot & Aktivieren
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MonitoringActivation