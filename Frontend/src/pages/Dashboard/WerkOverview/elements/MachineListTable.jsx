import React from 'react';
import { FaCircle } from "react-icons/fa";

const MachineListTable = ({ data }) => {
  return (
    <div className="pt-4 rounded-t-lg lg:w-full bg-[var(--white-color)]">
      {/* Header with filter options */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 px-5">
        <h2 className="font-[400] text-xl mb-2 sm:mb-0">
          Maschinenliste (Ampel)
        </h2>
        <div className="flex space-x-3 items-center">
          <select className="rounded p-2 bg-[#F8F8F8] text-sm flex justify-between items-center">
            <option>Stat: Alle</option>
          </select>
          <select className="rounded p-2 bg-[#F8F8F8] text-sm flex justify-between items-center">
            <option>Ringe: Alle</option>
          </select>
        </div>
      </div>

      {/* Table header */}
      <div className="">
        {/* Table Header */}
        <div className="hidden sm:flex text-sm text-[var(--black-color)] bg-[#F8F8F8] mb-2 py-2 px-3">
          <div className="w-2/5 text-[16px]">Maschinenliste</div>
          <div className="w-1/5 text-[16px]">Status</div>
          <div className="w-1/5 text-[16px]">OEE</div>
          <div className="w-1/5 text-[16px]">Anomalie-Score</div>
        </div>

        {/* Table Rows */}
        <div className="flex flex-col">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row text-sm py-3 px-3 shadow"
            >
              <div className="w-full sm:w-2/5 font-medium">
                {item.name}
              </div>
              <div
                className={`w-full sm:w-1/5 text-${item.statusColor}-600 flex items-center`}
              >
                <FaCircle className={`text-[13px] text-${item.statusColor}-500 mr-1`} />
                {item.status}
              </div>
              <div className="w-full sm:w-1/5">{item.oee}</div>
              <div className="w-full sm:w-1/5">{item.anomaly}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MachineListTable;