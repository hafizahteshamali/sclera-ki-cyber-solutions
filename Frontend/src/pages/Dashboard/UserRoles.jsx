"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTrash, FaEdit } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { SessionDevice, TermsAndBerechi } from "../../assets/ConstantData";

const initialUsers = [
  {
    id: 1,
    name: "Mustafa Khan",
    email: "mustafa@example.com",
    role: "Werker",
    status: "Im Dienst",
    lastLogin: "2025-08-12",
  },
  {
    id: 2,
    name: "Sabine Müller",
    email: "sabine@example.com",
    role: "Schichtleiter",
    status: "Im Dienst",
    lastLogin: "2025-08-12",
  },
  {
    id: 3,
    name: "Jonas Schmidt",
    email: "jonasschmidt@example.com",
    role: "Datenwissenschaft",
    status: "Im Urlaub",
    lastLogin: "2025-08-12",
  },
  {
    id: 4,
    name: "Kevin Lehmann",
    email: "kevinlehmann1@example.com",
    role: "Admin",
    status: "Im Dienst",
    lastLogin: "2025-08-12",
  },
  {
    id: 5,
    name: "Lucia Schelber",
    email: "schelber144@example.com",
    role: "Werker",
    status: "Im Dienst",
    lastLogin: "2025-08-12",
  },
  {
    id: 6,
    name: "Lucia Schelber",
    email: "schelber144@example.com",
    role: "Werker",
    status: "Im Dienst",
    lastLogin: "2025-08-12",
  },
];

const rolesConfig = [
  "Werker",
  "Schichtleiter",
  "QS",
  "Datenwissenschaft",
  "Admin",
];

const UserRoles = () => {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("Alle");
  const [filterRole, setFilterRole] = useState("Alle");
  const [isMobile, setIsMobile] = useState(false);

  // detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const truncateResponsive = (text, maxLength) => {
    if (isMobile) {
      return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    }
    return text;
  };

  const filteredUsers = users.filter((u) => {
    return (
      (u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase())) &&
      (filterStatus === "Alle" || u.status === filterStatus) &&
      (filterRole === "Alle" || u.role === filterRole)
    );
  });

  const deleteUser = (id) => {
    // Confirm before delete
    const confirmed = window.confirm(
      "Sind Sie sicher, dass Sie diesen Benutzer löschen möchten?"
    );
    if (!confirmed) return;

    // Filter out the user with the matching id
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div className="flex flex-col lg:h-screen px-2 w-full overflow-x-hidden">
      <h1 className="text-xl md:text-2xl font-semibold mb-1">
        Benutzer & Rollen
      </h1>

      {/* 🔎 Search & Filter */}
      <div className="flex flex-wrap items-center gap-2 flex-none">
        <div className="relative w-full md:w-[30%] lg:w-[20%] border border-gray-300">
          <input
            type="text"
            placeholder="Suchen"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 pr-4 w-full rounded focus:outline-none text-sm"
          />
          <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>

        <select
          className="border py-0.5 px-3 border-gray-300 text-sm outline-none w-full md:w-auto"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="Alle">Status</option>
          <option value="Im Dienst">Im Dienst</option>
          <option value="Im Urlaub">Im Urlaub</option>
        </select>

        <select
          className="border py-0.5 px-3 border-gray-300 text-sm outline-none w-full md:w-auto"
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
        >
          <option value="Alle">Werk</option>
          {rolesConfig.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start overflow-hidden">
        {/* Left Content */}
        <div className="w-full lg:w-[73%] flex flex-col gap-1 h-full overflow-hidden">
          {/* 🧑‍🤝‍🧑 User Table */}
          <div className="bg-white rounded-b shadow border border-gray-300 flex-grow overflow-hidden">
            <div className="overflow-x-auto scrollbar-hide lg:h-[180px]">
              <motion.table
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full text-[9px] sm:text-[10px] md:text-xs lg:text-sm border-collapse min-w-[360px] sm:min-w-[520px] md:min-w-[640px]"
              >
                <thead className="bg-gray-100">
                  <tr className="text-left">
                    <th className="p-1 sm:p-1 w-[60px] sm:w-[100px]">
                      Benutzer
                    </th>
                    <th className="p-1 sm:p-1 w-[80px] sm:w-[120px]">Email</th>
                    <th className="p-1 sm:p-1 w-[50px] sm:w-[80px]">Rolle</th>
                    <th className="p-1 sm:p-1 w-[60px] sm:w-[90px]">Status</th>
                    <th className="p-1 sm:p-1 w-[55px] sm:w-[80px]">Login</th>
                    <th className="p-1 sm:p-1 w-[45px] sm:w-[70px] text-center">
                      Aktion
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr
                      key={user.id}
                      className="border-t border-gray-300 hover:bg-gray-50"
                    >
                      <td className="p-1 sm:p-1 truncate">
                        {truncateResponsive(user.name, 4, 6, 10)}
                      </td>
                      <td className="p-1 sm:p-1 truncate">
                        {truncateResponsive(user.email, 6, 10, 14)}
                      </td>
                      <td className="p-1 sm:p-1 truncate">
                        {truncateResponsive(user.role, 3, 6, 8)}
                      </td>
                      <td className="p-1 sm:p-1">
                        <span
                          className={`px-1.5 py-0.5 rounded-md text-[9px] sm:text-[10px] md:text-xs font-medium truncate ${
                            user.status === "Im Dienst"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {truncateResponsive(user.status, 4, 6, 8)}
                        </span>
                      </td>
                      <td className="p-1 sm:p-1 truncate">
                        {truncateResponsive(user.lastLogin, 4, 6, 8)}
                      </td>
                      <td className="p-1 sm:p-1 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <FaEdit className="text-blue-500 cursor-pointer text-[10px] sm:text-xs md:text-sm" />
                          <FaTrash
                            onClick={() => deleteUser(user.id)}
                            className="text-red-500 cursor-pointer text-[10px] sm:text-xs md:text-sm"
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </motion.table>
            </div>
          </div>

          {/* Rollen & Rechte */}
          <div className="bg-white pt-2 px-2 rounded shadow w-full">
            <h2 className="text-sm sm:text-base font-semibold mb-2">
              Rollen & Rechte
            </h2>
            <div className="overflow-x-auto scrollbar-hide lg:h-[160px]">
              <table className="w-full border-collapse text-[10px] sm:text-[9px] md:text-[10px] lg:text-[14px] min-w-[360px]">
                <thead>
                  <tr>
                    <th className="text-left p-0.5 sm:p-1 w-20 sm:w-24 md:w-20">
                      Rollen
                    </th>
                    {rolesConfig.map((role) => (
                      <th
                        key={role}
                        className="p-0.5 sm:p-1 text-center w-10 sm:w-12 md:w-14 truncate"
                        title={role}
                      >
                        {truncateResponsive(role, 3, 5, 6)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Dashboard anzeigen",
                    "Tickefs erstellen / bearbeiten",
                    "Alarme quittieren",
                    "Schwellenwerte ändern",
                  ].map((perm, i) => (
                    <tr key={i} className="border-t border-gray-300">
                      <td
                        className="p-0.5 sm:p-1 truncate w-20 sm:w-24 md:w-28"
                        title={perm}
                      >
                        {truncateResponsive(perm, 8, 10, 12)}
                      </td>
                      {rolesConfig.map((role, roleIndex) => {
                        const isAdminCol = roleIndex === rolesConfig.length - 1;
                        return (
                          <td
                            key={role}
                            className="text-center p-0.5 sm:p-1 w-10 sm:w-12 md:w-14"
                          >
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" />
                              <div
                                className={`w-5 h-3 sm:w-6 sm:h-3.5 md:w-7 md:h-4 lg:w-10 lg:h-5 rounded-full transition-all ${
                                  isAdminCol
                                    ? "bg-gray-300 peer-checked:bg-green-600"
                                    : "bg-gray-300 peer-checked:bg-blue-600"
                                }`}
                              ></div>
                              <div className="absolute left-0.5 bg-white w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-4 lg:h-4 rounded-full transition-all peer-checked:translate-x-2 sm:peer-checked:translate-x-2.5 md:peer-checked:translate-x-3 lg:peer-checked:translate-x-3"></div>
                            </label>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Sicherheit */}
          <div className="bg-white p-2 rounded shadow w-full">
            <h2 className="text-lg font-semibold mb-1">Sicherheit</h2>
            <div className="space-y-0.5 text-xs sm:text-sm">
              <div className="flex justify-between items-center border-b border-gray-300 pb-0.5">
                <span>{truncateResponsive("Passwortrichtlinie", 12)}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 sm:w-11 sm:h-5.5 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition-all"></div>
                  <div className="absolute left-0.5 sm:left-1 bg-white w-4 h-4 rounded-full peer-checked:translate-x-4 sm:peer-checked:translate-x-5 transition-transform"></div>
                </label>
              </div>
              <div className="flex justify-between border-b border-gray-300 pb-0.5">
                <span>Mini-Länge</span>
                <span>6</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-300 pb-0.5">
                <span>{truncateResponsive("Complexity", 8)}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-9 h-5 sm:w-11 sm:h-5.5 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition-all"></div>
                  <div className="absolute left-0.5 sm:left-1 bg-white w-4 h-4 rounded-full peer-checked:translate-x-4 sm:peer-checked:translate-x-5 transition-transform"></div>
                </label>
              </div>
              <div className="flex justify-between items-center border-b border-gray-300 pb-0.5">
                <span>{truncateResponsive("2FA/Passkey", 10)}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-9 h-5 sm:w-11 sm:h-5.5 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition-all"></div>
                  <div className="absolute left-0.5 sm:left-1 bg-white w-4 h-4 rounded-full peer-checked:translate-x-4 sm:peer-checked:translate-x-5 transition-transform"></div>
                </label>
              </div>
              <div className="flex justify-between items-center border-b border-gray-300 pb-0.5">
                <span>{truncateResponsive("Sitzungszeit", 12)}</span>
                <div className="w-28 sm:w-40 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-2 bg-blue-500 rounded-full animate-[progressFill_2s_ease-out_forwards]"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span>{truncateResponsive("IP-Allowlist", 12)}</span>
                  <span className="text-xs">
                    {truncateResponsive("123.455.789.000", 12)}
                  </span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-9 h-5 sm:w-11 sm:h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition-all"></div>
                  <div className="absolute left-0.5 sm:left-1 bg-white w-4 h-4 rounded-full peer-checked:translate-x-4 sm:peer-checked:translate-x-5 transition-transform"></div>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-[25%] rounded flex flex-col gap-4">
          {/* Teams & Bereiche */}
          <div className="bg-white w-full p-4">
            <h2 className="text-lg font-semibold mb-3">Teams & Bereiche</h2>
            <div className="grid grid-cols-2 gap-2">
              {TermsAndBerechi.map((team, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className={
                      team.num !== "12"
                        ? "h-6 w-6 border border-blue-500 text-blue-500 rounded flex justify-center items-center flex-shrink-0"
                        : "h-6 w-6 border border-gray-300 rounded flex justify-center items-center flex-shrink-0"
                    }
                  >
                    <span className="text-xs">{team.num}</span>
                  </div>
                  <label
                    htmlFor={`team-${index}`}
                    className="ml-2 text-xs sm:text-sm font-medium text-gray-900 truncate"
                  >
                    {truncateResponsive(team.text, 12)}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Sitzungen & Geräte */}
          <div className="bg-white w-full p-4">
            <h2 className="text-lg font-semibold mb-2">Sitzungen & Geräte</h2>
            <div className="space-y-3">
              {SessionDevice.map((session, index) => (
                <div
                  key={index}
                  className="p-3 rounded-md shadow-sm bg-[#F5F5F5]"
                >
                  <div className="flex items-center my-1 gap-1.5">
                    <img
                      src={session.deviceIcon || "/placeholder.svg"}
                      alt=""
                      className="w-4 h-4"
                    />
                    <span className="text-xs sm:text-sm font-medium truncate">
                      {truncateResponsive(session.device, 12)}
                    </span>
                  </div>
                  <div className="flex items-center my-1 gap-1.5">
                    <img
                      src={session.ipIcon || "/placeholder.svg"}
                      alt=""
                      className="w-4 h-4"
                    />
                    <span className="text-xs sm:text-sm font-medium truncate">
                      {truncateResponsive(session.ip, 12)}
                    </span>
                  </div>
                  <div className="flex items-center my-1 gap-1.5">
                    <img
                      src={session.locationIcon || "/placeholder.svg"}
                      alt=""
                      className="w-4 h-4"
                    />
                    <span className="text-xs sm:text-sm font-medium truncate">
                      {truncateResponsive(session.location, 12)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes progressFill {
            from { width: 0%; }
            to { width: 60%; }
          }
          .custom-scrollbar::-webkit-scrollbar { display: none; }
          .custom-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>
    </div>
  );
};

export default UserRoles;
