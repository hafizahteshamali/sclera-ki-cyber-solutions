import React from 'react';
import { MdError } from "react-icons/md";
import { FaCircle } from "react-icons/fa";

const AlarmSection = ({ title, items, icon: Icon, iconColor }) => {
  return (
    <div className="bg-white rounded-lg shadow p-3 w-[48%]">
      <div className="bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          {title}
        </h2>
        
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-center text-[var(--black-color)]">
              <Icon className={`mr-2 text-${item.color}-500`} /> {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AlarmSection;