import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import DashboardSidebar from "../Components/DashboardSidebar";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 relative">
        {/* 🔹 Sidebar (Large screen: visible, <lg: drawer) */}
        <aside
          className={`
            bg-[var(--side-bar-color)] text-white 
            transition-transform duration-300 
            fixed lg:static top-0 left-0 h-full z-40 
            w-[70%] sm:w-[60%] lg:w-[21%] 
            ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          `}
        >
          <DashboardSidebar />
        </aside>

        {/* 🔹 Overlay for mobile/tablet */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        {/* 🔹 Content Area */}
        <main className="flex-1 bg-gray-100 overflow-y-auto">
          <Outlet />
        </main>

        {/* 🔹 Floating Menu Button (<lg only) */}
        <button
          className="lg:hidden fixed bottom-5 right-5 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars size={20} />
        </button>
      </div>
    </div>
  );
};

export default DashboardLayout;
