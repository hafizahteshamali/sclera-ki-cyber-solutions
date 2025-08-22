import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Navigation/Header";
import Footer from "../Navigation/Footer";
import DashboardSidebar from "../Components/DashboardSidebar";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* 🔹 Main Body */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-[21%] bg-[var(--side-bar-color)] text-white">
          <DashboardSidebar />
        </aside>

        {/* Content Area */}
        <main className="flex-1 bg-gray-100 overflow-y-auto">
          <Outlet /> {/* 👈 Yahan nested routes render honge */}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
