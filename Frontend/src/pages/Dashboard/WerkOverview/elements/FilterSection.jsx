import React from 'react';
import { IoFilter } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";

const FilterSection = ({ filterData }) => {
  return (
    <div className="bg-white rounded-lg shadow py-5 px-6 flex flex-col gap-5">
      {/* Filter Section */}
      <div className="flex justify-between items-center">
        <div className="bg-gray-50 px-4 py-2 rounded-lg flex justify-start items-center gap-3 w-[78%]">
          <IoFilter className="text-2xl font-[400] text-gray-800" />
          <h3 className="font-medium text-gray-800 flex items-center">
            Filter
          </h3>
        </div>

        <div className="bg-gray-50 px-4 py-2 rounded-lg flex justify-start items-center gap-3 w-[20%]">
          <LuCalendarDays className="text-2xl font-[400] text-gray-800" />
          <h3 className="font-medium text-gray-800 flex items-center">
            Date
          </h3>
        </div>
      </div>

      <div className="flex justify-between items-center">
        {filterData.map((item, index) => (
          <div
            key={index}
            className="flex-grow bg-gray-100 rounded-lg p-5 flex flex-col justify-center items-center gap-2 mr-4 last:mr-0"
          >
            <p className="text-[16px] font-[400] text-[var(--black-color)] w-full">
              {item.text}
            </p>
            <h1 className="text-5xl font-[500] text-[var(--black-color)] w-full">
              {item.num}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;