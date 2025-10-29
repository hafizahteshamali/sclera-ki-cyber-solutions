import React, { useState, useRef, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaBars, FaBell, FaTimes } from "react-icons/fa";
import DashboardSidebar from "../Components/DashboardSidebar";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
import { MdLogout, MdManageAccounts, MdSettings } from "react-icons/md";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const popupRef = useRef(null);

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        // Check if the click is not on the profile image
        if (!event.target.closest(".profile-image")) {
          setShowProfilePopup(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 relative">
        {/* 🔹 Sidebar (Large screen: visible, <lg: drawer) */}
        <aside
          className={`
            bg-[var(--side-bar-color)] text-white 
            transition-transform duration-300 
            fixed lg:static top-0 left-0 h-full z-40 
            w-[100%] sm:w-[60%] lg:w-[21%] 
            ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          `}
        >
          <DashboardSidebar setIsOpen={setIsOpen} />
        </aside>

        {/* 🔹 Overlay for mobile/tablet */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        {/* 🔹 Content Area */}
        <main className="flex-1 bg-gray-100 lg:overflow-hidden overflow-y-auto p-2">
          <div className="w-full relative">
            <div className="w-full flex justify-end items-center gap-3 px-5">
              <IoSearchSharp className="text-2xl text-[#4A4B4B] cursor-pointer" />
              <FaBell className="text-2xl text-[#4A4B4B] cursor-pointer" />
              <BsFillPlusSquareFill className="text-2xl text-[#4A4B4B] cursor-pointer" />
              <div
                className="h-[50px] w-[50px] rounded-full overflow-hidden cursor-pointer profile-image"
                onClick={() => setShowProfilePopup(!showProfilePopup)}
              >
                <img
                  src="/assets/images/dashboard/profile.jpg"
                  className="h-[100%] w-[100%] object-cover"
                  alt="Profile"
                />
              </div>
            </div>
          </div>

          {/* Profile Popup */}
          {showProfilePopup && (
            <div
              ref={popupRef}
              className="fixed top-15 right-2 bg-white shadow-xl z-50 w-[300px] overflow-hidden border border-gray-200 flex flex-col justify-center items-center"
            >
              {/* User Info */}
              <div className="p-4 w-full">
                <div className="w-full flex flex-col justify-center items-center gap-3">
                  <div className="h-15 w-15 rounded-full overflow-hidden">
                    <img
                      src="/assets/images/dashboard/profile.jpg"
                      className="h-full w-full object-cover"
                      alt="Profile"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <p className="text-[16px] text-[#007BFF]">Hallo, Admin</p>
                    <p className="font-[400] text-xl text-[var(--black-color)]">
                      Kevin Lehmann
                    </p>
                  </div>
                  <button className="w-[95%] py-1.5 bg-[#007BFF] text-white rounded-full text-[14px]">
                    Verwalten Sie Ihr Profil
                  </button>
                </div>
              </div>
            </div>
          )}
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
