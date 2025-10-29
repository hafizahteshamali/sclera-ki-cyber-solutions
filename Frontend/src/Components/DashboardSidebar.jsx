import { NavLink, useLocation } from "react-router-dom";
import { DashboardNavigation, sidebarData } from "../assets/ConstantData";

const DashboardSidebar = ({ setIsOpen }) => {
  const location = useLocation();

  // Decide which navigation data to use
  const navItems =
    location.pathname === "/dashboard/security" || location.pathname === "/dashboard/mqtt" || location.pathname === "/dashboard/subscribe-sample" || location.pathname === "/dashboard/routing-database" || location.pathname === "/dashboard/monitoring-activation"
      ? DashboardNavigation
      : sidebarData;

  return (
    <div className="w-full bg-[var(--side-bar-color)] text-white flex flex-col gap-5 p-4">
      {/* Logo Section */}
      <NavLink to="/dashboard" className="mt-3 w-[90%]">
        <img
          src="/assets/images/logo.svg"
          className="object-contain"
          alt="logo"
        />
      </NavLink>

      {/* Sidebar Navigation */}
      <nav className="mt-5 flex flex-col items-start gap-6 px-2">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            onClick={() => setIsOpen(false)}
            end={item.path === "/dashboard"} // exact match only for dashboard route
            className={({ isActive }) =>
              `flex items-center gap-4 rounded-md cursor-pointer w-[90%] transition-all duration-200 ${
                isActive
                  ? "text-white font-semibold"
                  : "text-gray-300 hover:text-white"
              }`
            }
          >
            <img src={item.icon} className="h-6 w-6" alt={item.label || item.text} />
            <span className="text-sm">
              {item.label || item.text}
            </span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default DashboardSidebar;
