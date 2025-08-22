import React from 'react';

const HeaderSection = () => {
  return (
    <div className="mx-auto p-6">
      {/* Header */}
      <h1 className="text-5xl font-[500] text-[var(--black-color)] overflow-hidden my-4">
        Werk-Overview
      </h1>

      {/* Zu Tickets Section */}
      <div className="flex justify-start items-center gap-3">
        <div className="bg-blue-500 px-4 py-1 flex justify-center rounded items-center">
          <h3 className="text-lg font-[400] text-white">Zu Tickets</h3>
        </div>
        <div className="bg-blue-500 px-4 py-1 flex justify-center rounded items-center">
          <h3 className="text-lg font-[400] text-white">Zu Trends</h3>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;