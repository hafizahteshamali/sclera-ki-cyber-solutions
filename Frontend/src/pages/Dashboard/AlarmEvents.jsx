import React from 'react';
import { FaFileExport, FaSearch, FaExclamationTriangle } from 'react-icons/fa';
import { events } from '../../assets/ConstantData';

const AlarmEvents = () => {
    const getSeverityColor = (severity) => {
    switch (severity) {
      case 'Kritisch':
        return 'bg-[#DC3545] text-[#FCFDFF]';
      case 'Hoch':
        return 'bg-[#FBB629] text-black';
      case 'Medium':
        return 'bg-[#FBB629] text-black';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <div className="rounded-lg p-6 m-4 max-w-6xl mx-auto">
      <div className="flex justify-center flex-col items-start gap-8 mb-6">
        <h1 className="text-4xl font-bold text-gray-800 flex items-center overflow-hidden">
          Alarme & Events
        </h1>
        
        <div className="flex justify-between items-center w-full">
          <div className='flex justify-start items-center gap-5 w-[50%]'>
          <button className="bg-[#1976FB] hover:bg-blue-600 text-white font-[400] h-[50px] w-[30%] flex justify-center items-center rounded-md transition-colors">
            Bulk Ack
          </button>
          <button className="bg-[#FCFDFF] hover:bg-blue-600 text-black border border-gray-300 font-[400] h-[50px] w-[30%] flex justify-center items-center rounded-md transition-colors">
          CSV Export
          </button>
          </div>
        <div className="relative w-[35%] bg-[#FCFDFF]">
            <input 
              type="text" 
              placeholder="Suchen" 
              className="pl-10 pr-4 w-full py-2 border border-gray-300 rounded-md focus:outline-none"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>
        
      </div>

      <div className="overflow-x-auto border border-gray-300 rounded-xl">
        <table className="min-w-full bg-[#FCFDFF]  rounded-xl overflow-hidden">
          <thead className="">
            <tr>
              <th className="px-6 py-3 text-left text-[16px] font-[600] text-black tracking-wider">Schwere</th>
              <th className="px-6 py-3 text-left text-[16px] font-[600] text-black tracking-wider">Schwere</th>
              <th className="px-6 py-3 text-left text-[16px] font-[600] text-black tracking-wider">Quelle</th>
              <th className="px-6 py-3 text-left text-[16px] font-[600] text-black tracking-wider">Nachricht</th>
            </tr>
          </thead>
          <tbody className="">
            {events.map((event, index) => (
              <tr key={index} className="hover:bg-gray-50 border border-gray-300">
                <td className="px-6 whitespace-nowrap font-medium text-black">
                  {event.equipment}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`w-[100px] flex justify-center items-center py-1 rounded font-medium ${getSeverityColor(event.severity)}`}>
                    {event.severity}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-black">
                  {event.source}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-black">
                  {event.message}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AlarmEvents;