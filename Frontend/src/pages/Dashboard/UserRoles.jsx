import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaTrash, FaEdit } from "react-icons/fa";
import { IoFilter, IoSearchOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { FaCircle } from "react-icons/fa";
import { SessionDevice, TermsAndBerechi } from "../../assets/ConstantData";

const initialUsers = [
  {
    id: 1,
    name: "Mustafa Khan",
    email: "mustafa@...",
    role: "Werker",
    status: "Im Dienst",
    lastLogin: "2025-08-12",
  },
  {
    id: 2,
    name: "Sabine Müller",
    email: "sabine@...",
    role: "Schichtleiter",
    status: "Im Dienst",
    lastLogin: "2025-08-12",
  },
  {
    id: 3,
    name: "Jonas Schmidt",
    email: "jonasschmidt@...",
    role: "Datenwissenschaft",
    status: "Im Urlaub",
    lastLogin: "2025-08-12",
  },
  {
    id: 4,
    name: "Kevin Lehmann",
    email: "kevinlehmann1@...",
    role: "Admin",
    status: "Im Dienst",
    lastLogin: "2025-08-12",
  },
  {
    id: 5,
    name: "Lucia Schelber",
    email: "schelber144@...",
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

  const filteredUsers = users.filter((u) => {
    return (
      (u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase())) &&
      (filterStatus === "Alle" || u.status === filterStatus) &&
      (filterRole === "Alle" || u.role === filterRole)
    );
  });

  return (
    <div className="flex flex-col h-screen p-2 overflow-hidden w-[100%]">
      <h1 className="text-2xl font-semibold mb-2">Benutzer & Rollen</h1>

      {/* 🔎 Search & Filter */}
      <div className="flex items-center gap-2 flex-none">
        <div className="relative w-[20%] border border-gray-300">
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
          className="border py-0.5 px-3 border-gray-300 rounded text-sm outline-none"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="Alle">Status</option>
          <option value="Im Dienst">Im Dienst</option>
          <option value="Im Urlaub">Im Urlaub</option>
        </select>

        <select
          className="border py-0.5 px-3 border-gray-300 rounded text-sm outline-none"
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

      <div className="h-full flex justify-between items-start ">
        <div className="h-[100%] w-[75%]">
          {/* 🧑‍🤝‍🧑 User Table */}
    <div className="flex-1 overflow-y-auto scrollbar-hide ">
      <motion.table
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white w-full rounded shadow border border-gray-300 text-sm"
      >
        <thead className="bg-gray-100 sticky top-0 z-10">
          <tr className="text-left">
            <th className="p-1 flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 cursor-pointer" />
              Benutzer
            </th>
            <th>Email</th>
            <th>Rolle</th>
            <th>Status</th>
            <th>Letzter Login</th>
            <th>Aktion</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id} className="border-t border-gray-300">
              <td className="p-1.5 flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 cursor-pointer" />
                {user.name}
              </td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <span
                  className={`px-2 py-1 rounded-md font-medium ${
                    user.status === "Im Dienst"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td>{user.lastLogin}</td>
              <td className="flex items-center justify-center gap-2">
                <FaEdit className="text-blue-500 cursor-pointer" />
                <FaTrash className="text-red-500 cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </motion.table>
    </div>

          {/* Rollen & Rechte */}
          <div className="mt-1 bg-white p-2 rounded-lg shadow w-[100%] flex-none">
            <h2 className="text-lg font-semibold">Rollen & Rechte</h2>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="text-left p-2">Rollen</th>
                  {rolesConfig.map((role) => (
                    <th key={role} className="p-1 text-center">
                      {role}
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
                    <td className="p-2">{perm}</td>
                    {rolesConfig.map((role, roleIndex) => {
                      const isAdminCol = roleIndex === rolesConfig.length - 1;
                      return (
                        <td key={role} className="text-center p-1">
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div
                              className={`w-11 h-5 rounded-full transition-all ${
                                isAdminCol
                                  ? "bg-gray-300 peer-checked:bg-green-600"
                                  : "bg-gray-300 peer-checked:bg-blue-600"
                              }`}
                            ></div>
                            <div className="absolute left-1 bg-white w-4 h-4 rounded-full transition-all peer-checked:translate-x-5"></div>
                          </label>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Sicherheit */}
          <div className="mt-1 bg-white p-2 rounded-lg shadow w-[100%] flex-none">
            <h2 className="text-lg font-semibold">Sicherheit</h2>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between items-center border-b border-gray-300 pb-1">
                <span>Passwortrichtlinie</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="sr-only peer"
                  />
                  <div className="w-11 h-5 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition-all"></div>
                  <div className="absolute left-1 bg-white w-4 h-4 rounded-full peer-checked:translate-x-5 transition-transform"></div>
                </label>
              </div>

              <div className="flex justify-between border-b border-gray-300 pb-1">
                <span>Mini-Länge</span>
                <span>6</span>
              </div>

              <div className="flex justify-between items-center border-b border-gray-300 pb-1">
                <span>Complexity</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-5 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition-all"></div>
                  <div className="absolute left-1 bg-white w-4 h-4 rounded-full peer-checked:translate-x-5 transition-transform"></div>
                </label>
              </div>

              <div className="flex justify-between items-center border-b border-gray-300 pb-1">
                <span>2FA/Passkey</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-5 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition-all"></div>
                  <div className="absolute left-1 bg-white w-4 h-4 rounded-full peer-checked:translate-x-5 transition-transform"></div>
                </label>
              </div>

              <div className="flex justify-between items-center border-b border-gray-300 pb-1">
                <span>Sitzungszeit</span>
                <div className="w-40 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-2 bg-blue-500 rounded-full animate-[progressFill_2s_ease-out_forwards]"></div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span>IP-Allowlist</span>
                  <span>123.455.789.000</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-5 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition-all"></div>
                  <div className="absolute left-1 bg-white w-4 h-4 rounded-full peer-checked:translate-x-5 transition-transform"></div>
                </label>
              </div>
            </div>
          </div>

          <style>
            {`
  @keyframes progressFill {
    from { width: 0%; }
    to { width: 60%; }
  }
  `}
          </style>
        </div>

        <div className="w-[24%] h-full rounded flex flex-col justify-start items-start">
          {/* Teams & Bereiche Section */}
          <div className="mb-4 bg-white w-full p-5 overflow-hidden">
            <h2 className="text-lg font-semibold mb-3">Teams & Bereiche</h2>
            <div className="space-y-2">
              {TermsAndBerechi.map((team, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className={
                      team.num != "12"
                        ? "h-[30px] w-[30px] border border-blue-500 text-blue-500 rounded flex justify-center items-center"
                        : "h-[30px] w-[30px] border border-gray-300 rounded flex justify-center items-center"
                    }
                  >
                    <span className="text-sm">{team.num}</span>
                  </div>
                  <label
                    htmlFor={`team-${index}`}
                    className="ml-2 text-sm font-medium text-gray-900"
                  >
                    {team.text}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-300 my-4"></div>

          {/* Sitzungen & Geräte Section */}
          <div className="bg-white w-full p-5 overflow-hidden">
            <h2 className="text-lg font-semibold">Sitzungen & Geräte</h2>
            <div className="space-y-3">
              {SessionDevice.map((session, index) => (
                <div
                  key={index}
                  className=" p-3 min-h-[100px] rounded-md shadow-sm bg-[#F5F5F5]"
                >
                  <div className="flex items-center my-1 gap-1.5">
                    <img src={session.deviceIcon} alt="" />
                    <span className="text-sm font-medium">
                      {session.device}
                    </span>
                  </div>
                  <div className="flex items-center my-1 gap-1.5">
                    <img src={session.ipIcon} alt="" />
                    <span className="text-sm font-medium">
                      {session.ip}
                    </span>
                  </div>
                  <div className="flex items-center my-1 gap-1.5">
                    <img src={session.locationIcon} alt="" />
                    <span className="text-sm font-medium">
                      {session.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRoles;
