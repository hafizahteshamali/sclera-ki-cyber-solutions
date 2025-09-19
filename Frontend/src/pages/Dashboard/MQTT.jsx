import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { steps, tableData } from "../../assets/ConstantData";

const MQTT = () => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className="bg-[#f5f7fa] lg:h-screen px-2">
            {/* Stepper Tabs */}
            <div className="flex flex-col lg:flex-wrap lg:flex-row items-start lg:items-center justify-between lg:justify-start my-5 lg:mb-2">
                {steps.map((step, index) => (
                    <div key={index} className="flex items-center mb-1">
                        {/* Step Circle */}
                        <button
                            onClick={() => setActiveTab(index + 1)}
                            className={`flex items-center justify-center w-8 h-8 rounded-full border-2 text-[14px] font-bold
                ${activeTab === index + 1
                                    ? "bg-sky-500 text-white border-sky-500"
                                    : "border-sky-200 text-sky-200"
                                }`}
                        >
                            {index + 1}
                        </button>

                        {/* Step Label */}
                        <span
                            onClick={() => setActiveTab(index + 1)}
                            className={`ml-2 text-[14px] font-medium cursor-pointer ${activeTab === index + 1 ? "text-sky-500" : "text-sky-200"
                                }`}
                        >
                            {step}
                        </span>

                        {/* Connector Line */}
                        {index < steps.length - 1 && (
                            <div className="lg:w-10 h-px bg-sky-200 mx-4"></div>
                        )}
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
                            <h2 className="text-[14px] font-semibold text-black bg-[#DAF1FF] p-2">
                                Verbindungseinstellungen
                            </h2>
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
                            <h2 className="text-[14px] font-semibold text-black bg-[#DAF1FF] p-2">
                                Subscribe Einstellungen
                            </h2>
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
                                    <label className="text-sm">
                                        Zurückbehaltene Nachrichten verarbeiten
                                    </label>
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
                            <button className="bg-[#DAF1FF] text-[#3A3A3A] px-4 py-1.5 rounded shadow">
                                Testkonfiguration
                            </button>
                            <button className="bg-[#1976FB] text-white px-4 py-1.5 rounded shadow">
                                Neben der Sicherheit
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Table */}
                    <div className="flex-1 bg-white p-2 rounded shadow border border-gray-300 overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                            <thead>
                                <tr className="bg-gray-100 text-left">
                                    <th className="p-2">
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox h-4 w-4 text-purple-600 outline-none"
                                            />
                                            <span>Quellenname</span>
                                        </div>
                                    </th>
                                    <th className="p-2">Verbindungsstatus</th>
                                    <th className="p-2">Letzter Heartbeat</th>
                                    <th className="p-2">Konfig</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((row, index) => (
                                    <tr key={index} className="border-b border-gray-300">
                                        {/* Quellenname with checkbox */}
                                        <td className="p-2">
                                            <div className="flex items-center space-x-2">
                                                <input
                                                    type="checkbox"
                                                    className="form-checkbox h-4 w-4 text-purple-600 outline-none"
                                                />
                                                <span>{row.name}</span>
                                            </div>
                                        </td>

                                        {/* Verbindungsstatus */}
                                        <td className="p-2 flex items-center space-x-2">
                                            {row.status === "Verbunden" && (
                                                <FaCircle className="text-green-500" />
                                            )}
                                            {row.status === "Getrennt" && (
                                                <FaCircle className="text-red-500" />
                                            )}
                                            {row.status === "Nicht konfiguriert" && (
                                                <FaCircle className="text-[#7D7D7D]" />
                                            )}
                                            <span>{row.status}</span>
                                        </td>

                                        {/* Letzter Heartbeat */}
                                        <td className="p-2">{row.heartbeat}</td>

                                        {/* Konfig actions */}
                                        <td className="p-2 flex space-x-2">
                                            <button className="text-black bg-[#1976FB1A] p-1">Edit</button>
                                            <button className="text-black border border-[#00000033] p-1 rounded">Löschen</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Other Tabs (Empty) */}
            {activeTab !== 1 && (
                <div className="bg-white p-10 rounded-lg shadow text-center text-gray-500">
                    <p>Dieser Tab ist derzeit leer.</p>
                </div>
            )}
        </div>
    );
};

export default MQTT;
