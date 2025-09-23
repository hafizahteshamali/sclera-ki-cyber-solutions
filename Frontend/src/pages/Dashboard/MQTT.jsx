"use client"

import { useState } from "react"
import { FaCircle } from "react-icons/fa"
import { MonitoringData, steps, tableData } from "../../assets/ConstantData"

const MQTT = () => {
  const [activeTab, setActiveTab] = useState(1)

  return (
    <div className="bg-[#f5f7fa] lg:h-screen lg:overflow-hidden px-2">
      {/* Stepper Tabs */}
      <div className="flex flex-col gap-2 lg:gap-0 lg:flex-wrap lg:flex-row lg:mb-1 items-start lg:items-center justify-between lg:justify-start my-5 lg:my-0">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center justify-start">
            {/* Step Circle */}
            <button
              onClick={() => setActiveTab(index + 1)}
              className={`flex items-center justify-center lg:w-6 w-10 lg:h-6 h-10 rounded-full border-2 text-[16px] lg:text-[10px] font-bold
                ${activeTab === index + 1 ? "bg-sky-500 text-white border-sky-500" : "border-sky-200 text-sky-200"}`}
            >
              {index + 1}
            </button>

            {/* Step Label */}
            <span
              onClick={() => setActiveTab(index + 1)}
              className={`ml-1 text-[16px] lg:text-[11px] font-medium cursor-pointer ${
                activeTab === index + 1 ? "text-sky-500" : "text-sky-200"
              }`}
            >
              {step}
            </span>

            {/* Connector Line */}
            {index < steps.length - 1 && <div className="lg:w-10 h-px bg-sky-200 mx-4"></div>}
          </div>
        ))}
      </div>

      {/* Content */}
      {activeTab === 1 && (
        <div className="flex flex-col lg:flex-row gap-2">
          {/* Left Side - Form */}
          <div className="flex-1 flex flex-col gap-3">
            {/* Verbindungseinstellungen */}
            <div className="bg-white rounded shadow border border-gray-300">
              <h2 className="text-[14px] font-semibold text-black bg-[#DAF1FF] p-2">Verbindungseinstellungen</h2>
              <div className="flex flex-col px-2">
                <div className="flex justify-between items-center border-b py-0.5 border-gray-300">
                  <label className="text-sm">Broker-URL</label>
                  <input
                    type="text"
                    className="border border-gray-300 rounded px-2 w-[50%]"
                    placeholder="tcp://localhost:port"
                  />
                </div>
                <div className="flex justify-between items-center border-b py-0.5 border-gray-300">
                  <label className="text-sm">Kunden-ID</label>
                  <input
                    type="text"
                    className="border border-gray-300 rounded px-2 w-[50%]"
                    placeholder="Nachrichten-ID"
                  />
                </div>
                <div className="flex justify-between items-center border-b py-0.5 border-gray-300">
                  <label className="text-sm">Protokoll</label>
                  <select className="w-[50%] border border-gray-300 rounded px-2">
                    <option>MQTT v3.1</option>
                  </select>
                </div>
                <div className="flex justify-between items-center border-b py-0.5 border-gray-300">
                  <label className="text-sm">Bleib am Leben</label>
                  <input type="text" className="w-[50%] border border-gray-300 rounded px-2" />
                </div>
                <div className="flex justify-start items-center border-b py-0.5 border-gray-300">
                  <label className="text-sm w-[50%]">Saubere Sitzung</label>
                  <input type="checkbox" className="h-[20px] w-[20px]" />
                </div>
                <div className="flex justify-between items-center border-b py-0.5 border-gray-300">
                  <label className="text-sm">Sitzungsdauer</label>
                  <input type="number" className="w-[50%] border border-gray-300 rounded px-2" />
                </div>
              </div>
            </div>

            {/* Subscribe Einstellungen */}
            <div className="bg-white rounded shadow border border-gray-300">
              <h2 className="text-[14px] font-semibold text-black bg-[#DAF1FF] p-2">Subscribe Einstellungen</h2>
              <div className="flex flex-col p-2">
                <div className="flex justify-between items-center border-b py-0.5 border-gray-300">
                  <label className="text-sm">Themenfilter</label>
                  <select className="w-[50%] border border-gray-300 rounded px-2 py-0.5 mt-1">
                    <option>selectOne</option>
                  </select>
                </div>
                <div className="flex justify-between items-center border-b py-0.5 border-gray-300">
                  <label className="text-sm">QoS-Ebene</label>
                  <select className="w-[50%] border border-gray-300 rounded px-2 py-0.5 mt-1">
                    <option>0</option>
                  </select>
                </div>
                <div className="flex justify-between items-center border-b py-0.5 border-gray-300">
                  <label className="text-sm">Zurückbehaltene Nachrichten verarbeiten</label>
                  <input type="checkbox" />
                </div>
              </div>
            </div>

            {/* Leistung */}
            <div className="bg-white rounded shadow border border-gray-300">
              <h2 className="text-[14px] font-semibold text-black p-2 bg-[#DAF1FF]">Leistung</h2>
              <div className="flex flex-col px-2 py-0.5">
                <div className="flex justify-between items-center border-b py-0.5 border-gray-300">
                  <label className="text-sm">Max. Nachrichten während des Flugs</label>
                  <input type="number" className="w-[50%] border border-gray-300 rounded px-2" />
                </div>
                <div className="flex justify-between items-center border-b py-0.5 border-gray-300">
                  <label className="text-sm">Wiederverbindungsverzögerung</label>
                  <input type="number" className="w-[50%] border border-gray-300 rounded px-2" />
                </div>
                <div className="flex justify-between items-center border-b py-0.5 border-gray-300">
                  <label className="text-sm">Maximale Nutzlast</label>
                  <input type="number" className="w-[50%] border border-gray-300 rounded px-2" />
                </div>
                <div className="flex justify-between items-center border-b py-0.5 border-gray-300">
                  <label className="text-sm">Kompression</label>
                  <select className="w-[50%] border border-gray-300 rounded px-2">
                    <option>Keine</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 space-x-4">
              <button className="bg-[#DAF1FF] text-[#3A3A3A] px-4 py-1.5 rounded shadow">Testkonfiguration</button>
              <button className="bg-[#1976FB] text-white px-4 py-1.5 rounded shadow">Neben der Sicherheit</button>
            </div>
          </div>

          {/* Right Side - Table */}
          <div className="flex-1 bg-white rounded shadow border border-gray-300 overflow-x-auto">
            <table className="w-full border-collapse text-[10px] sm:text-[11px] md:text-[12px]">
              <thead>
                <tr className="bg-[#DAF1FF] text-left">
                  <th className="px-1 py-3 font-[400] text-[9px] sm:text-[10px] md:text-[12px] w-[120px] sm:w-[140px]">
                    <div className="flex items-center space-x-1">
                      <input
                        type="checkbox"
                        className="form-checkbox h-3 w-3 sm:h-4 sm:w-4 text-purple-600 outline-none"
                      />
                      <span>Quellenname</span>
                    </div>
                  </th>
                  <th className="px-1 py-3 font-[400] text-[9px] sm:text-[10px] md:text-[12px] w-[100px] sm:w-[120px]">
                    Verbindungsstatus
                  </th>
                  <th className="px-1 py-3 font-[400] text-[9px] sm:text-[10px] md:text-[12px] w-[100px] sm:w-[120px]">
                    Letzter Heartbeat
                  </th>
                  <th className="px-1 py-3 font-[400] text-[9px] sm:text-[10px] md:text-[12px] w-[80px] sm:w-[100px]">
                    Konfig
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    {/* Quellenname with checkbox */}
                    <td className="px-1 py-3 text-[9px] sm:text-[10px] md:text-[12px]">
                      <div className="flex items-center space-x-1">
                        <input
                          type="checkbox"
                          className="form-checkbox h-3 w-3 sm:h-4 sm:w-4 text-purple-600 outline-none"
                        />
                        <span>{row.name}</span>
                      </div>
                    </td>

                    {/* Verbindungsstatus */}
                    <td className="px-1 py-3 flex items-center space-x-1 text-[9px] sm:text-[10px] md:text-[12px]">
                      {row.status === "Verbunden" && <FaCircle className="text-green-500 h-2 w-2 sm:h-3 sm:w-3" />}
                      {row.status === "Getrennt" && <FaCircle className="text-red-500 h-2 w-2 sm:h-3 sm:w-3" />}
                      {row.status === "Nicht konfiguriert" && (
                        <FaCircle className="text-[#7D7D7D] h-2 w-2 sm:h-3 sm:w-3" />
                      )}
                      <span>{row.status}</span>
                    </td>

                    {/* Letzter Heartbeat */}
                    <td className="px-1 py-3 text-[9px] sm:text-[10px] md:text-[12px]">{row.heartbeat}</td>

                    {/* Konfig actions */}
                    <td className="px-1 py-3 flex space-x-1 text-[9px] sm:text-[10px] md:text-[12px]">
                      <button className="text-black bg-[#1976FB1A] px-1 py-0.5 rounded">Edit</button>
                      <button className="text-black border border-[#00000033] px-1 py-0.5 rounded">Löschen</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 2 && (
        <div className="flex flex-col lg:flex-row gap-2">
          {/* Left Side */}
          <div className="flex-1 flex flex-col gap-3 overflow-y-auto lg:overflow-hidden">
            {/* Authentifizierung */}
            <div className="bg-white rounded shadow border border-gray-300">
              <h2 className="text-[14px] font-[400] text-black bg-[#DAF1FF] p-2">Authentifizierung</h2>
              <div className="flex flex-col px-2 py-1">
                <div className="flex justify-between items-center border-b py-1 border-gray-300">
                  <label className="text-sm">Methode</label>
                  <select className="border border-gray-300 rounded px-2 w-[50%]">
                    <option>mTLS</option>
                  </select>
                </div>
                <div className="flex justify-between items-center border-b py-1 border-gray-300">
                  <label className="text-sm">Benutzername</label>
                  <input
                    type="text"
                    className="border border-gray-300 rounded px-2 w-[50%]"
                    placeholder="Heider.Juan"
                  />
                </div>
                <div className="flex justify-between items-center py-1">
                  <label className="text-sm">Passwort</label>
                  <input
                    type="password"
                    className="border border-gray-300 rounded px-2 w-[50%]"
                    placeholder="********"
                  />
                </div>
              </div>
            </div>

            {/* Zertifikate */}
            <div className="bg-white rounded shadow border border-gray-300">
              <h2 className="text-[14px] font-[400] text-black bg-[#DAF1FF] p-2">Zertifikate</h2>
              <div className="flex flex-col px-2 py-1">
                <div className="flex justify-between items-center border-b py-1 border-gray-300">
                  <label className="text-sm">CA Zertifikat</label>
                  <button className="text-sm px-2 rounded border border-gray-300 lg:w-[25%] w-[50%]">
                    Wählen Sie Datei
                  </button>
                </div>
                <div className="flex justify-between items-center border-b py-1 border-gray-300">
                  <label className="text-sm">Client Zertifika</label>
                  <button className="text-sm px-2 rounded border border-gray-300 lg:w-[25%] w-[50%]">
                    Wählen Sie Datei
                  </button>
                </div>
                <div className="flex justify-between items-center border-b py-1 border-gray-300">
                  <label className="text-sm">Privater Clientschlüssel</label>
                  <button className="text-sm px-2 rounded border border-gray-300 lg:w-[25%] w-[50%]">
                    Wählen Sie Datei
                  </button>
                </div>
                <div className="flex justify-between items-center py-1">
                  <label className="text-sm">TLS Version</label>
                  <select className="text-sm px-2 rounded border border-gray-300 lg:w-[25%] w-[50%]">
                    <option>1.2</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Zugriffskontrolle */}
            <div className="bg-white rounded shadow border border-gray-300">
              <h2 className="text-[14px] font-[400] text-black bg-[#DAF1FF] p-2">Zugriffskontrolle</h2>
              <div className="flex flex-col px-2 py-1">
                <div className="flex justify-between items-center border-b py-1 border-gray-300">
                  <label className="text-sm">Themenmuster zulassen</label>
                  <input type="text" className="border border-gray-300 rounded px-2 w-[50%]" />
                </div>
                <div className="flex justify-between items-center border-b py-1 border-gray-300">
                  <label className="text-sm">Muster "Thema ablehnen"</label>
                  <input type="text" className="border border-gray-300 rounded px-2 w-[50%]" />
                </div>
                <div className="flex justify-start items-center py-1">
                  <label className="text-sm w-[50%]">ACL aktivieren</label>
                  <input type="checkbox" className="h-[20px] w-[20px]" />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col lg:flex-row gap-4 py-2">
              <button className="bg-[#DAF1FF] text-[#3A3A3A] px-4 py-1.5 rounded shadow">Testkonfiguration</button>
              <button className="bg-[#1976FB] text-white px-4 py-1.5 rounded shadow">Neben der Payload & Schema</button>
            </div>
          </div>

          {/* Right Side - Table */}
          <div className="flex-1 bg-white rounded shadow border border-gray-300 overflow-x-auto">
            <table className="w-full border-collapse text-[10px] sm:text-[11px] md:text-[12px]">
              <thead>
                <tr className="bg-[#DAF1FF] text-left">
                  <th className="px-1 py-3 font-[400] text-[9px] sm:text-[10px] md:text-[12px] w-[120px] sm:w-[140px]">
                    <div className="flex items-center space-x-1">
                      <input
                        type="checkbox"
                        className="form-checkbox h-3 w-3 sm:h-4 sm:w-4 text-purple-600 outline-none"
                      />
                      <span>Quellenname</span>
                    </div>
                  </th>
                  <th className="px-1 py-3 font-[400] text-[9px] sm:text-[10px] md:text-[12px] w-[100px] sm:w-[120px]">
                    Verbindungsstatus
                  </th>
                  <th className="px-1 py-3 font-[400] text-[9px] sm:text-[10px] md:text-[12px] w-[100px] sm:w-[120px]">
                    Letzter Heartbeat
                  </th>
                  <th className="px-1 py-3 font-[400] text-[9px] sm:text-[10px] md:text-[12px] w-[80px] sm:w-[100px]">
                    Konfig
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    {/* Quellenname with checkbox */}
                    <td className="px-1 py-3 text-[9px] sm:text-[10px] md:text-[12px]">
                      <div className="flex items-center space-x-1">
                        <input
                          type="checkbox"
                          className="form-checkbox h-3 w-3 sm:h-4 sm:w-4 text-purple-600 outline-none"
                        />
                        <span>{row.name}</span>
                      </div>
                    </td>

                    {/* Verbindungsstatus */}
                    <td className="px-1 py-3 flex items-center space-x-1 text-[9px] sm:text-[10px] md:text-[12px]">
                      {row.status === "Verbunden" && <FaCircle className="text-green-500 h-2 w-2 sm:h-3 sm:w-3" />}
                      {row.status === "Getrennt" && <FaCircle className="text-red-500 h-2 w-2 sm:h-3 sm:w-3" />}
                      {row.status === "Nicht konfiguriert" && (
                        <FaCircle className="text-[#7D7D7D] h-2 w-2 sm:h-3 sm:w-3" />
                      )}
                      <span>{row.status}</span>
                    </td>

                    {/* Letzter Heartbeat */}
                    <td className="px-1 py-3 text-[9px] sm:text-[10px] md:text-[12px]">{row.heartbeat}</td>

                    {/* Konfig actions */}
                    <td className="px-1 py-3 flex space-x-1 text-[9px] sm:text-[10px] md:text-[12px]">
                      <button className="text-black bg-[#1976FB1A] px-1 py-0.5 rounded">Edit</button>
                      <button className="text-black border border-[#00000033] px-1 py-0.5 rounded">Löschen</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 3 && (
        <div className="flex flex-col lg:flex-row gap-2 lg:h-[calc(100vh-150px)]">
          {/* Left Side - Form */}
          <div className="flex-1 flex flex-col gap-3 overflow-y-auto lg:overflow-hidden">
            {/* Payload Format */}
            <div className="bg-white rounded shadow border border-gray-300">
              <h2 className="text-[14px] font-semibold text-black bg-[#DAF1FF] p-2">Payload Format</h2>
              <div className="flex flex-col px-2 py-2">
                <div className="flex justify-between items-center border-b py-1 border-gray-300">
                  <label className="text-sm">Format</label>
                  <select className="w-[50%] border border-gray-300 rounded px-2">
                    <option>JSON</option>
                  </select>
                </div>
                <div className="flex justify-between items-center border-b py-1 border-gray-300">
                  <label className="text-sm">Schema</label>
                  <select className="w-[50%] border border-gray-300 rounded px-2">
                    <option>v1</option>
                  </select>
                </div>
                <div className="flex justify-between items-center border-b py-1 border-gray-300">
                  <label className="text-sm">Timestamp</label>
                  <select className="w-[50%] border border-gray-300 rounded px-2">
                    <option>Payload</option>
                  </select>
                </div>
                <div className="flex justify-between items-center py-1">
                  <label className="text-sm">Zeitzone</label>
                  <input type="text" placeholder="UTC" className="w-[50%] border border-gray-300 rounded px-2" />
                </div>
              </div>
            </div>

            {/* Deduplizierung */}
            <div className="bg-white rounded shadow border border-gray-300">
              <h2 className="text-[14px] font-semibold text-black bg-[#DAF1FF] p-2">Deduplizierung</h2>
              <div className="flex flex-col px-2 py-2">
                <div className="flex justify-between items-center border-b py-1 border-gray-300">
                  <label className="text-sm">Deduplizierungs-Schlüssel</label>
                  <input
                    type="text"
                    placeholder="Feldkennzeichen für Deduplizierung"
                    className="w-[50%] border border-gray-300 rounded px-2"
                  />
                </div>
                <div className="flex justify-start items-center py-1">
                  <label className="text-sm w-[50%]">Deduplizierung aktivieren</label>
                  <input type="checkbox" className="h-[20px] w-[20px]" />
                </div>
              </div>
            </div>

            {/* Beispiel-Payload */}
            <div className="bg-white rounded shadow border border-gray-300">
              <h2 className="text-[14px] font-semibold text-black bg-[#DAF1FF] p-2">Beispiel-Payload</h2>
              <div className="px-2 py-2 text-sm text-gray-500">Anzeige eines Beispiel-JSON</div>
            </div>

            {/* Einheiten-Policy */}
            <div className="bg-white rounded shadow border border-gray-300">
              <h2 className="text-[14px] font-semibold text-black bg-[#DAF1FF] p-2">Einheiten-Policy</h2>
              <div className="flex justify-between items-center px-2 py-2">
                <label className="text-sm">Policy</label>
                <select className="w-[50%] border border-gray-300 rounded px-2">
                  <option>Aus Payload übernehmen</option>
                </select>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col lg:flex-row gap-4 py-2">
              <button className="bg-[#DAF1FF] text-[#3A3A3A] px-4 py-1.5 rounded shadow">Testkonfiguration</button>
              <button className="bg-[#1976FB] text-white px-4 py-1.5 rounded shadow">Neben der Routing & DB</button>
            </div>
          </div>

          {/* Right Side - Table */}
          <div className="flex-1 bg-white rounded shadow border border-gray-300 overflow-x-auto">
            <table className="w-full border-collapse text-[10px] sm:text-[11px] md:text-[12px]">
              <thead>
                <tr className="bg-[#DAF1FF] text-left">
                  <th className="px-1 py-3 font-[400] text-[9px] sm:text-[10px] md:text-[12px] w-[120px] sm:w-[140px]">
                    <div className="flex items-center space-x-1">
                      <input
                        type="checkbox"
                        className="form-checkbox h-3 w-3 sm:h-4 sm:w-4 text-purple-600 outline-none"
                      />
                      <span>Quellenname</span>
                    </div>
                  </th>
                  <th className="px-1 py-3 font-[400] text-[9px] sm:text-[10px] md:text-[12px] w-[100px] sm:w-[120px]">
                    Verbindungsstatus
                  </th>
                  <th className="px-1 py-3 font-[400] text-[9px] sm:text-[10px] md:text-[12px] w-[100px] sm:w-[120px]">
                    Letzter Heartbeat
                  </th>
                  <th className="px-1 py-3 font-[400] text-[9px] sm:text-[10px] md:text-[12px] w-[80px] sm:w-[100px]">
                    Konfig
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    {/* Quellenname with checkbox */}
                    <td className="px-1 py-3 text-[9px] sm:text-[10px] md:text-[12px]">
                      <div className="flex items-center space-x-1">
                        <input
                          type="checkbox"
                          className="form-checkbox h-3 w-3 sm:h-4 sm:w-4 text-purple-600 outline-none"
                        />
                        <span>{row.name}</span>
                      </div>
                    </td>

                    {/* Verbindungsstatus */}
                    <td className="px-1 py-3 flex items-center space-x-1 text-[9px] sm:text-[10px] md:text-[12px]">
                      {row.status === "Verbunden" && <FaCircle className="text-green-500 h-2 w-2 sm:h-3 sm:w-3" />}
                      {row.status === "Getrennt" && <FaCircle className="text-red-500 h-2 w-2 sm:h-3 sm:w-3" />}
                      {row.status === "Nicht konfiguriert" && (
                        <FaCircle className="text-[#7D7D7D] h-2 w-2 sm:h-3 sm:w-3" />
                      )}
                      <span>{row.status}</span>
                    </td>

                    {/* Letzter Heartbeat */}
                    <td className="px-1 py-3 text-[9px] sm:text-[10px] md:text-[12px]">{row.heartbeat}</td>

                    {/* Konfig actions */}
                    <td className="px-1 py-3 flex space-x-1 text-[9px] sm:text-[10px] md:text-[12px]">
                      <button className="text-black bg-[#1976FB1A] px-1 py-0.5 rounded">Edit</button>
                      <button className="text-black border border-[#00000033] px-1 py-0.5 rounded">Löschen</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 4 && (
        <div className="flex flex-col lg:flex-row gap-2">
          {/* Left Side - Form */}
          <div className="flex-1 flex flex-col gap-1.5">
            {/* Payload Format */}
            <div className="bg-white rounded shadow border border-gray-300">
              <h2 className="text-[14px] font-semibold text-black bg-[#DAF1FF] px-2 py-1">Datenbank Verbindung</h2>
              <div className="flex flex-col px-2">
                <div className="flex justify-between items-center border-b py-1 border-gray-300">
                  <label className="text-sm">Datenbanktyp</label>
                  <select className="w-[50%] border border-gray-300 rounded px-2">
                    <option>InfluxDB</option>
                  </select>
                </div>
                <div className="flex justify-between items-center border-b py-1 border-gray-300">
                  <label className="text-sm">Datenbankhost</label>
                  <input
                    type="text"
                    placeholder="Geben Sie hier ein"
                    className="w-[50%] border border-gray-300 rounded px-2"
                  />
                </div>
                <div className="flex justify-between items-center py-1">
                  <label className="text-sm">Datenbankname</label>
                  <input
                    type="text"
                    placeholder="Geben Sie hier ein"
                    className="w-[50%] border border-gray-300 rounded px-2"
                  />
                </div>
              </div>
            </div>

            {/* Deduplizierung */}
            <div className="bg-white rounded shadow border border-gray-300">
              <h2 className="text-[14px] font-semibold text-black bg-[#DAF1FF] px-2 py-1">Daten Mapping</h2>
              <div className="flex flex-col px-2 py-1">
                <div className="flex justify-between items-center border-b py-1 border-gray-300">
                  <label className="text-sm">Measurement/Collection</label>
                  <input
                    type="text"
                    placeholder="sensor_telemetry"
                    className="w-[50%] border border-gray-300 rounded px-2"
                  />
                </div>
                <div className="flex justify-between items-center border-b py-1 border-gray-300">
                  <label className="text-sm">Tags</label>
                  <select className="w-[50%] border border-gray-300 rounded px-2">
                    <option>tenant</option>
                  </select>
                </div>
                <div className="flex justify-between items-center py-1">
                  <label className="text-sm">Fields</label>
                  <select className="w-[50%] border border-gray-300 rounded px-2">
                    <option>seq</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Beispiel-Payload */}
            <div className="bg-white rounded shadow border border-gray-300">
              <h2 className="text-[14px] font-semibold text-black bg-[#DAF1FF] px-2 py-1">Retention Policy</h2>
              <div className="flex flex-col px-2 py-1">
                <div className="flex justify-between items-center border-b py-1 border-gray-300">
                  <label className="text-sm">Rohdaten</label>
                  <select className="w-[50%] border border-gray-300 rounded px-2">
                    <option>1 Monate</option>
                  </select>
                </div>
                <div className="flex justify-between items-center border-b py-1 border-gray-300">
                  <label className="text-sm">Aggregat 1-mint</label>
                  <select className="w-[50%] border border-gray-300 rounded px-2">
                    <option>4 Jahre</option>
                  </select>
                </div>
                <div className="flex justify-between items-center py-1">
                  <label className="text-sm">Aggregat 15-min</label>
                  <select className="w-[50%] border border-gray-300 rounded px-2">
                    <option>1 Wochen</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Einheiten-Policy */}
            <div className="bg-white rounded shadow border border-gray-300">
              <h2 className="text-[14px] font-semibold text-black bg-[#DAF1FF] px-2 py-1">Offline-Puffer</h2>
              <div className="flex flex-col px-2 py-1">
                <div className="flex justify-between items-center py-1">
                  <label className="text-sm w-[50%]">Store & Forward aktivieren</label>
                  <input type="checkbox" className="h-[20px] w-[20px]" />
                </div>
                <div className="flex justify-between items-center border-b py-1 border-gray-300">
                  <label className="text-sm">Pfad</label>
                  <input type="text" className="w-[50%] border border-gray-300 rounded px-2" />
                </div>
                <div className="flex justify-between items-center py-1">
                  <label className="text-sm">Max Größe</label>
                  <select className="w-[50%] border border-gray-300 rounded px-2">
                    <option>MB</option>
                  </select>
                </div>
                <div className="flex justify-between items-center py-1">
                  <label className="text-sm">Retention</label>
                  <select className="w-[50%] border border-gray-300 rounded px-2">
                    <option>Stunden</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col lg:flex-row lg:justify-end items-center gap-4">
              <button className="bg-[#DAF1FF] text-[#3A3A3A] px-4 py-1.5 rounded shadow">Testkonfiguration</button>
              <button className="bg-[#1976FB] text-white px-4 py-1.5 rounded shadow">Neben der Monitoring</button>
            </div>
          </div>

          {/* Right Side - Table */}
          <div className="flex-1 bg-white rounded shadow border border-gray-300 overflow-x-auto">
            <table className="w-full border-collapse text-[10px] sm:text-[11px] md:text-[12px]">
              <thead>
                <tr className="bg-[#DAF1FF] text-left">
                  <th className="px-1 py-3 font-[400] text-[9px] sm:text-[10px] md:text-[12px] w-[120px] sm:w-[140px]">
                    <div className="flex items-center space-x-1">
                      <input
                        type="checkbox"
                        className="form-checkbox h-3 w-3 sm:h-4 sm:w-4 text-purple-600 outline-none"
                      />
                      <span>Quellenname</span>
                    </div>
                  </th>
                  <th className="px-1 py-3 font-[400] text-[9px] sm:text-[10px] md:text-[12px] w-[100px] sm:w-[120px]">
                    Verbindungsstatus
                  </th>
                  <th className="px-1 py-3 font-[400] text-[9px] sm:text-[10px] md:text-[12px] w-[100px] sm:w-[120px]">
                    Letzter Heartbeat
                  </th>
                  <th className="px-1 py-3 font-[400] text-[9px] sm:text-[10px] md:text-[12px] w-[80px] sm:w-[100px]">
                    Konfig
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    {/* Quellenname with checkbox */}
                    <td className="px-1 py-3 text-[9px] sm:text-[10px] md:text-[12px]">
                      <div className="flex items-center space-x-1">
                        <input
                          type="checkbox"
                          className="form-checkbox h-3 w-3 sm:h-4 sm:w-4 text-purple-600 outline-none"
                        />
                        <span>{row.name}</span>
                      </div>
                    </td>

                    {/* Verbindungsstatus */}
                    <td className="px-1 py-3 flex items-center space-x-1 text-[9px] sm:text-[10px] md:text-[12px]">
                      {row.status === "Verbunden" && <FaCircle className="text-green-500 h-2 w-2 sm:h-3 sm:w-3" />}
                      {row.status === "Getrennt" && <FaCircle className="text-red-500 h-2 w-2 sm:h-3 sm:w-3" />}
                      {row.status === "Nicht konfiguriert" && (
                        <FaCircle className="text-[#7D7D7D] h-2 w-2 sm:h-3 sm:w-3" />
                      )}
                      <span>{row.status}</span>
                    </td>

                    {/* Letzter Heartbeat */}
                    <td className="px-1 py-3 text-[9px] sm:text-[10px] md:text-[12px]">{row.heartbeat}</td>

                    {/* Konfig actions */}
                    <td className="px-1 py-3 flex space-x-1 text-[9px] sm:text-[10px] md:text-[12px]">
                      <button className="text-black bg-[#1976FB1A] px-1 py-0.5 rounded">Edit</button>
                      <button className="text-black border border-[#00000033] px-1 py-0.5 rounded">Löschen</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 5 && (
        <div className="flex flex-col lg:flex-row gap-2">
          {/* Left Side - Statistics and Forms */}
          <div className="flex-1 flex flex-col gap-3">
            {/* Statistics Cards */}
            <div className="w-full flex justify-between items-center flex-wrap gap-y-3">
              {/* Latenz Card */}
              {MonitoringData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="text-white rounded-lg min-h-[100px] p-5 w-[48%] bg-cover bg-no-repeat bg-center"
                    style={{ backgroundImage: `url(${item.bg})` }}
                  >
                    <div className="text-xl text-white/80 font-[400]">{item.text}</div>
                    <div className="text-3xl font-bold overflow-hidden">{item.numb}</div>
                  </div>
                )
              })}
            </div>

            {/* Audit-Log Section */}
            <div className="bg-white rounded shadow border border-gray-300">
              <h2 className="text-[14px] font-[400] text-black bg-[#E8F4FD] p-2">Audit-Log</h2>
              <div className="p-2">
                <div className="flex items-center justify-between py-1 border-b border-gray-200">
                  <span className="text-sm">Connect/Disconnect</span>
                  <input type="checkbox" className="h-4 w-4" />
                </div>
                <div className="flex items-center justify-between py-1 border-b border-gray-200">
                  <span className="text-sm">Schema-Wechsel</span>
                  <input type="checkbox" className="h-4 w-4" />
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-sm">ACL-Treffer</span>
                  <input type="checkbox" className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Dead Letter Queue Section */}
            <div className="bg-white rounded shadow border border-gray-300">
              <h2 className="text-[14px] font-[400] text-black bg-[#E8F4FD] p-2">Dead Letter Queue</h2>
              <div className="p-2 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">DLQ aktivieren</span>
                  <input type="checkbox" className="h-4 w-4" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">DLQ Topic</span>
                  <input
                    type="text"
                    placeholder="Geben Sie hier ein"
                    className="border border-gray-300 rounded px-2 py-1 text-sm w-[60%]"
                  />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col lg:flex-row gap-2 w-full justify-end">
              <button className="bg-[#DAF1FF] text-[#3A3A3A] px-4 py-1.5 rounded shadow text-sm">
                Testkonfiguration
              </button>
              <button className="bg-[#1976FB] text-white px-4 py-1.5 rounded shadow text-sm">
                Neuen der IoT-Modell
              </button>
            </div>
          </div>

          {/* Right Side - Table */}
          <div className="flex-1 bg-white rounded shadow border border-gray-300 overflow-x-auto">
            <table className="w-full border-collapse text-[10px] sm:text-[11px] md:text-[12px]">
              <thead>
                <tr className="bg-[#DAF1FF] text-left">
                  <th className="px-1 py-3 font-[400] text-[9px] sm:text-[10px] md:text-[12px] w-[120px] sm:w-[140px]">
                    <div className="flex items-center space-x-1">
                      <input
                        type="checkbox"
                        className="form-checkbox h-3 w-3 sm:h-4 sm:w-4 text-purple-600 outline-none"
                      />
                      <span>Quellenname</span>
                    </div>
                  </th>
                  <th className="px-1 py-3 font-[400] text-[9px] sm:text-[10px] md:text-[12px] w-[100px] sm:w-[120px]">
                    Verbindungsstatus
                  </th>
                  <th className="px-1 py-3 font-[400] text-[9px] sm:text-[10px] md:text-[12px] w-[100px] sm:w-[120px]">
                    Letzter Heartbeat
                  </th>
                  <th className="px-1 py-3 font-[400] text-[9px] sm:text-[10px] md:text-[12px] w-[80px] sm:w-[100px]">
                    Konfig
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    {/* Quellenname with checkbox */}
                    <td className="px-1 py-3 text-[9px] sm:text-[10px] md:text-[12px]">
                      <div className="flex items-center space-x-1">
                        <input
                          type="checkbox"
                          className="form-checkbox h-3 w-3 sm:h-4 sm:w-4 text-purple-600 outline-none"
                        />
                        <span>{row.name}</span>
                      </div>
                    </td>

                    {/* Verbindungsstatus */}
                    <td className="px-1 py-3 flex items-center space-x-1 text-[9px] sm:text-[10px] md:text-[12px]">
                      {row.status === "Verbunden" && <FaCircle className="text-green-500 h-2 w-2 sm:h-3 sm:w-3" />}
                      {row.status === "Getrennt" && <FaCircle className="text-red-500 h-2 w-2 sm:h-3 sm:w-3" />}
                      {row.status === "Nicht konfiguriert" && (
                        <FaCircle className="text-[#7D7D7D] h-2 w-2 sm:h-3 sm:w-3" />
                      )}
                      <span>{row.status}</span>
                    </td>

                    {/* Letzter Heartbeat */}
                    <td className="px-1 py-3 text-[9px] sm:text-[10px] md:text-[12px]">{row.heartbeat}</td>

                    {/* Konfig actions */}
                    <td className="px-1 py-3 flex space-x-1 text-[9px] sm:text-[10px] md:text-[12px]">
                      <button className="text-black bg-[#1976FB1A] px-1 py-0.5 rounded">Edit</button>
                      <button className="text-black border border-[#00000033] px-1 py-0.5 rounded">Löschen</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 6 && (
        <div className="flex flex-col lg:flex-row gap-2">
          {/* Left Side - Form */}
          <div className="flex-1 flex flex-col gap-3">
            {/* Feature-Einstellungen */}
            <div className="bg-white rounded shadow border border-gray-300">
              <h2 className="text-[14px] font-semibold text-black bg-[#DAF1FF] p-3">Feature-Einstellungen</h2>
              <div className="flex flex-col p-2">
                <div className="flex justify-between items-center border-b py-0.5 border-gray-300">
                  <label className="text-sm">Resampling-Intervall</label>
                  <select className="border border-gray-300 rounded px-2 py-1 w-[50%]">
                    <option>10min</option>
                    <option>5min</option>
                    <option>15min</option>
                    <option>30min</option>
                  </select>
                </div>
                <div className="flex justify-between items-center border-b py-0.5 border-gray-300">
                  <label className="text-sm">Missing-Data-Handling</label>
                  <select className="border border-gray-300 rounded px-2 py-1 w-[50%]">
                    <option>ignoriere</option>
                    <option>interpolate</option>
                    <option>forward-fill</option>
                  </select>
                </div>
                <div className="w-full flex justify-between items-center border-b py-1 border-gray-300">
                  <label className="text-sm w-[50%]">Outlier-Filter</label>
                  <input type="checkbox" className="h-[20px] w-[20px]" />
                </div>
              </div>
            </div>

            {/* Modell-Auswahl */}
            <div className="bg-white rounded shadow border border-gray-300">
              <h2 className="text-[14px] font-semibold text-black bg-[#DAF1FF] p-3">Modell-Auswahl</h2>
              <div className="flex flex-col p-2">
                <div className="flex justify-between items-center border-b py-0.5 border-gray-300">
                  <label className="text-sm">Modell</label>
                  <select className="border border-gray-300 rounded px-2 py-1 w-[50%]">
                    <option>Anomalie Erkennung</option>
                    <option>Predictive Maintenance</option>
                    <option>Classification</option>
                  </select>
                </div>
                <div className="flex justify-between items-center border-b py-0.5 border-gray-300">
                  <label className="text-sm">Modell-Version</label>
                  <select className="border border-gray-300 rounded px-2 py-1 w-[50%]">
                    <option>1.0</option>
                    <option>1.1</option>
                    <option>2.0</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Ausgabe */}
            <div className="bg-white rounded shadow border border-gray-300">
              <h2 className="text-[14px] font-semibold text-black bg-[#DAF1FF] p-3">Ausgabe</h2>
              <div className="flex flex-col p-2">
                <div className="flex justify-between items-center border-b py-0.5 border-gray-300">
                  <label className="text-sm">Ziel-Datenbank</label>
                  <input
                    type="text"
                    className="border border-gray-300 rounded px-2 py-1 w-[50%]"
                    placeholder="Geben Sie hier ein"
                  />
                </div>
                <div className="flex justify-between items-center py-0.5">
                  <label className="text-sm">Ausgabe-Topic</label>
                  <input
                    type="text"
                    className="border border-gray-300 rounded px-2 py-1 w-[50%]"
                    placeholder="Geben Sie hier ein"
                  />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 space-x-4 w-full">
              <button className="bg-[#DAF1FF] text-[#3A3A3A] min-w-[30%] text-sm py-1.5 rounded shadow">Testkonfiguration</button>
              <button className="bg-[#1976FB] text-white min-w-[30%] text-sm py-1.5 rounded shadow px-2.5">
                Neue MoT-Konfiguration herunterladen
              </button>
            </div>

            {/* Info message */}
            <div className="text-center text-sm text-gray-500 mt-2">
              Ihre Konfiguration wurde erfolgreich heruntergeladen.
            </div>
          </div>

          {/* Right Side - Table */}
          <div className="flex-1 bg-white rounded shadow border border-gray-300 overflow-x-auto">
            <table className="w-full border-collapse text-[10px] sm:text-[11px] md:text-[12px]">
              <thead>
                <tr className="bg-[#DAF1FF] text-left">
                  <th className="px-1 py-3 font-[400] text-[9px] sm:text-[10px] md:text-[12px] w-[120px] sm:w-[140px]">
                    <div className="flex items-center space-x-1">
                      <input
                        type="checkbox"
                        className="form-checkbox h-3 w-3 sm:h-4 sm:w-4 text-purple-600 outline-none"
                      />
                      <span>Quellenname</span>
                    </div>
                  </th>
                  <th className="px-1 py-3 font-[400] text-[9px] sm:text-[10px] md:text-[12px] w-[100px] sm:w-[120px]">
                    Verbindungsstatus
                  </th>
                  <th className="px-1 py-3 font-[400] text-[9px] sm:text-[10px] md:text-[12px] w-[100px] sm:w-[120px]">
                    Letzter Heartbeat
                  </th>
                  <th className="px-1 py-3 font-[400] text-[9px] sm:text-[10px] md:text-[12px] w-[80px] sm:w-[100px]">
                    Konfig
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* CSV Import rows */}
                {[
                  { name: "OPC UA", status: "Verbunden", heartbeat: "Vor 5 Sek" },
                  { name: "MQTT", status: "Getrennt", heartbeat: "Vor 2 Minuten" },
                  { name: "REST API", status: "Verbunden", heartbeat: "vor 12 Sek." },
                  ...Array(10)
                    .fill(null)
                    .map((_, i) => ({
                      name: "CSV Import",
                      status: "Nicht konfiguriert",
                      heartbeat: "--",
                    })),
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    {/* Quellenname with checkbox */}
                    <td className="px-1 py-2 text-[9px] sm:text-[10px] md:text-[12px]">
                      <div className="flex items-center space-x-1">
                        <input
                          type="checkbox"
                          className="form-checkbox h-3 w-3 sm:h-4 sm:w-4 text-purple-600 outline-none"
                        />
                        <span>{row.name}</span>
                      </div>
                    </td>

                    {/* Verbindungsstatus */}
                    <td className="px-1 py-2 flex items-center space-x-1 text-[9px] sm:text-[10px] md:text-[12px]">
                      {row.status === "Verbunden" && <FaCircle className="text-green-500 h-2 w-2 sm:h-3 sm:w-3" />}
                      {row.status === "Getrennt" && <FaCircle className="text-red-500 h-2 w-2 sm:h-3 sm:w-3" />}
                      {row.status === "Nicht konfiguriert" && (
                        <FaCircle className="text-[#7D7D7D] h-2 w-2 sm:h-3 sm:w-3" />
                      )}
                      <span>{row.status}</span>
                    </td>

                    {/* Letzter Heartbeat */}
                    <td className="px-1 py-2 text-[9px] sm:text-[10px] md:text-[12px]">{row.heartbeat}</td>

                    {/* Konfig actions */}
                    <td className="px-1 py-2 flex space-x-1 text-[9px] sm:text-[10px] md:text-[12px]">
                      <button className="text-black bg-[#1976FB1A] px-1 py-0.5 rounded">Edit</button>
                      <button className="text-black border border-[#00000033] px-1 py-0.5 rounded">Löschen</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

export default MQTT
