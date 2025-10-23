"use client"

import { useState } from "react"

export default function Security() {
  const [formData, setFormData] = useState({
    method: "Universität/Passwort",
    username: "admin_user",
    password: "••••••••",
    tlsVersion: "1.2",
    aclEnabled: false,
    allowTopicPattern: "",
    denyTopicPattern: "",
    compression: "none",
  })

  const [showSuccess, setShowSuccess] = useState(false)

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleTestSecurity = () => {
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  const handleUpdate = () => {
    console.log("Security settings updated:", formData)
  }

  return (
    <div className="min-h-screen px-4">
      <div className="w-full mx-auto">
        {/* Header - Compact */}
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Sicherheit</h1>

        {/* Authentication Section - Compact */}
        <div className="bg-white rounded-lg shadow-sm mb-2">
          <div className="bg-blue-100 px-4 py-3 rounded-t-lg">
            <h2 className="text-sm font-semibold text-gray-800">Authentifizierung</h2>
          </div>

          <div className="px-4 py-3 space-y-3.5">
            {/* Method */}
            <div className="flex flex-col lg:flex-row items-start justify-between lg:items-center">
              <label className="block text-sm font-medium text-gray-700 mb-1">Methode</label>
              <select
                name="method"
                value={formData.method}
                onChange={handleInputChange}
                className="w-full lg:w-[40%] px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option>Universität/Passwort</option>
                <option>OAuth</option>
                <option>LDAP</option>
              </select>
            </div>

            {/* Username */}
            <div className="flex flex-col lg:flex-row items-start justify-between lg:items-center">
              <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full lg:w-[40%] px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col lg:flex-row items-start justify-between lg:items-center">
              <label className="block text-sm font-medium text-gray-700 mb-1">Passwort</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full lg:w-[40%] px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* TLS Version */}
            <div className="flex flex-col lg:flex-row items-start justify-between lg:items-center">
              <label className="block text-sm font-medium text-gray-700 mb-1">TLS Version</label>
              <select
                name="tlsVersion"
                value={formData.tlsVersion}
                onChange={handleInputChange}
                className="w-full lg:w-[40%] px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option>1.0</option>
                <option>1.1</option>
                <option>1.2</option>
                <option>1.3</option>
              </select>
            </div>
          </div>
        </div>

        {/* Access Control Section - Compact */}
        <div className="bg-white rounded-lg shadow-sm mb-2">
          <div className="bg-blue-100 px-4 py-3 rounded-t-lg">
            <h2 className="text-sm font-semibold text-gray-800">
              Zugriffskontrolle <span className="text-gray-600">(optional)</span>
            </h2>
          </div>

          <div className="px-4 py-3 space-y-3.5">
            {/* ACL Aktivieren */}
            <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-gray-700 cursor-pointer">ACL aktivieren</label>
              <input
                type="checkbox"
                name="aclEnabled"
                checked={formData.aclEnabled}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-1 focus:ring-blue-500 cursor-pointer"
              />
            </div>

            {/* Allow Topic Pattern */}
            <div className="flex flex-col lg:flex-row items-start justify-between lg:items-center">
              <label className="block text-sm font-medium text-gray-700 mb-1">Allow Topic Pattern</label>
              <input
                type="text"
                name="allowTopicPattern"
                value={formData.allowTopicPattern}
                onChange={handleInputChange}
                placeholder="|"
                className="w-full lg:w-[40%] px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Deny Topic Pattern */}
            <div className="flex flex-col lg:flex-row items-start justify-between lg:items-center">
              <label className="block text-sm font-medium text-gray-700 mb-1">Deny Topic Pattern</label>
              <input
                type="text"
                name="denyTopicPattern"
                value={formData.denyTopicPattern}
                onChange={handleInputChange}
                placeholder="|"
                className="w-full lg:w-[40%] px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Compression */}
            <div className="flex flex-col lg:flex-row items-start justify-between lg:items-center">
              <label className="block text-sm font-medium text-gray-700 mb-1">Kompression</label>
              <select
                name="compression"
                value={formData.compression}
                onChange={handleInputChange}
                className="w-full lg:w-[40%] px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option>none</option>
                <option>gzip</option>
                <option>deflate</option>
              </select>
            </div>
          </div>
        </div>

        {/* Success Message - Compact */}
        {showSuccess && (
          <div className="mb-3 p-2 bg-green-50 border border-green-200 rounded text-sm">
            <p className="text-green-700 font-medium">Authentifizierung erfolgreich. TLS aktiv.</p>
          </div>
        )}

        {/* Action Buttons - Compact */}
        <div className="flex flex-col lg:flex-row justify-end items-center gap-5 pt-2">
          <button
            onClick={handleTestSecurity}
            className="px-4 py-2 w-full lg:w-[15%] bg-[#EBEBEB] text-gray-700 text-sm font-medium hover:text-gray-900 transition-colors"
          >
            Sicherheit testen
          </button>
          <button
            onClick={handleUpdate}
            className="px-5 py-2 w-full lg:w-[15%] bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors"
          >
            Aktuell
          </button>
        </div>
      </div>
    </div>
  )
}