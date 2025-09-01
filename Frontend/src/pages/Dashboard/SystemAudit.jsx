import React from "react";
import { FaFilter } from "react-icons/fa";
import { MdSettings } from "react-icons/md";

const SystemAudit = () => {
  return (
    <div className="lg:h-screen bg-gray-100 p-6">
      {/* Heading */}
      <h1 className="text-4xl font-semibold text-black mb-4">
        System & Audit
      </h1>

      {/* Cards Section with Flex */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Audit-Log Card */}
        <div className="flex-1 bg-white min-h-[250px] shadow rounded-lg flex justify-center items-center">
          <div className="min-h-[200px] w-[90%] flex flex-col justify-center items-start">
          <h2 className="text-2xl font-semibold text-black mb-2">
            Audit-Log
          </h2>
          <p className="text-gray-600 mb-4">
          Jede Aktion (Zeit, Nutzer, Target, alt → neu)
          </p>
          <div className="w-full flex justify-end items-center">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50">
            Filtern und exportieren
          </button>
          </div>
          </div>
        </div>

        {/* Notifications Card */}
        <div className="flex-1 bg-white min-h-[250px] shadow rounded-lg flex justify-center items-center">
          <div className="min-h-[200px] w-[90%] flex flex-col justify-center items-start">
          <h2 className="text-2xl font-semibold text-black mb-2">
          Benachrichtigungen
          </h2>
          <p className="text-gray-600 mb-4">
          E-Mail/SMS/Teams, Ruhezeiten, Eskalationsketten
          </p>
          <div className="w-full flex justify-end items-center">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50">
            Einstellungen
          </button>
          </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-5 lg:px-10 py-5 border-b border-gray-300">
        <h1 className="text-xl lg:text-2xl text-black font-[500]">Backups & Wartungsfenster</h1>
        </div>
        <div className="text-sm">
          <div className="flex justify-between px-5 lg:px-10 py-5 border-b border-gray-300">
            <span className="text-xl lg:text-2xl">Plan</span>
            <span className="text-gray-700 font-medium text-xl">Alle</span>
          </div>
          <div className="flex justify-between px-5 lg:px-10 py-5 border-b border-gray-300">
            <span className="text-xl lg:text-2xl">Letzte Sicherung</span>
            <span className="text-gray-700 font-medium text-xl">2 Tage</span>
          </div>
          <div className="flex justify-between px-5 lg:px-10 py-5 border-b border-gray-300">
            <span className="text-xl lg:text-2xl">Restore-Test</span>
            <span className="text-gray-700 font-medium text-xl">Heute</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemAudit;
