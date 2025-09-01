import { NavLink } from "react-router-dom";
import { sidebarData } from "../assets/ConstantData";

const DashboardSidebar = ({setIsOpen}) => {
  return (
    <div className="w-full bg-[var(--side-bar-color)] text-white flex flex-col gap-5 p-4">
      <NavLink className="mt-3 w-[90%]">
        <img src="/assets/images/logo.svg" className="object-contain" alt="" />
      </NavLink>
      <nav className="mt-5 flex flex-col items-start gap-6 px-2">
        {sidebarData.map((item, index) => (
          <NavLink
            key={index}
            onClick={()=>setIsOpen(false)}
            to={item.path}
            end={item.path === "/dashboard"} // 👈 sirf dashboard route ke liye exact match
            className={({ isActive }) =>
              `flex items-center gap-4 rounded-md cursor-pointer w-[90%] ${
                isActive ? "text-white font-[700]" : "text-gray-300"
              }`
            }
          >
            <img src={item.icon} className="h-6 w-6" alt="" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default DashboardSidebar;
