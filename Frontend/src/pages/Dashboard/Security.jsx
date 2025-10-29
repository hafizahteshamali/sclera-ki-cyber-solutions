"use client"

import { useState } from "react"

export default function Security() {
  const [formData, setFormData] = useState({
    method: "Username/Password",
    username: "admin_user",
    password: "••••••••",
    tlsVersion: "1.2",
    aclEnabled: false,
    allowTopicPattern: "",
    denyTopicPattern: "",
    compression: "none",
    // mTLS fields
    caCertificate: null,
    clientCertificate: null,
    clientPrivateKey: null,
  })

  const [showSuccess, setShowSuccess] = useState(false)

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleFileUpload = (e) => {
    const { name } = e.target
    const file = e.target.files[0]
    if (file) {
      setFormData((prev) => ({
        ...prev,
        [name]: file,
      }))
    }
  }

  const handleTestSecurity = () => {
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  const handleUpdate = () => {
    // Validation based on selected method
    if (formData.method === "Username/Password") {
      if (!formData.username.trim() || !formData.password.trim()) {
        alert("⚠️ Bitte füllen Sie alle erforderlichen Felder aus!")
        return
      }
    } else if (formData.method === "mTLS") {
      if (!formData.caCertificate || !formData.clientCertificate || !formData.clientPrivateKey) {
        alert("⚠️ Bitte laden Sie alle Zertifikate hoch!")
        return
      }
    }

    if (!formData.tlsVersion) {
      alert("⚠️ Bitte wählen Sie eine TLS Version aus!")
      return
    }

    // If all fields valid
    console.log("✅ Security settings updated:", formData)
    alert("✅ Sicherheitseinstellungen erfolgreich aktualisiert!")
  }

  return (
    <div className="min-h-screen px-4">
      <div className="w-full mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Sicherheit</h1>

        {/* Authentication Section */}
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
                required
                value={formData.method}
                onChange={handleInputChange}
                className="w-full lg:w-[40%] px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="keine">keine</option>
                <option value="Username/Password">Username/Password</option>
                <option value="mTLS">mTLS</option>
              </select>
            </div>

            {/* Username/Password Fields - Only show when method is Username/Password */}
            {formData.method === "Username/Password" && (
              <>
                {/* Username */}
                <div className="flex flex-col lg:flex-row items-start justify-between lg:items-center">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                  <input
                    type="text"
                    name="username"
                    required
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
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full lg:w-[40%] px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </>
            )}

            {/* mTLS File Uploads - Only show when method is mTLS */}
            {formData.method === "mTLS" && (
              <>
                {/* CA Certificate */}
                <div className="flex flex-col lg:flex-row items-start justify-between lg:items-center">
                  <label className="block text-sm font-medium text-gray-700 mb-1">CA Zertifikat</label>
                  <div className="w-full lg:w-[40%]">
                    <input
                      type="file"
                      name="caCertificate"
                      required
                      onChange={handleFileUpload}
                      accept=".crt,.pem,.cer"
                      className="w-full px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-xs file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                    />
                    {formData.caCertificate && (
                      <p className="text-xs text-green-600 mt-1">✓ {formData.caCertificate.name}</p>
                    )}
                  </div>
                </div>

                {/* Client Certificate */}
                <div className="flex flex-col lg:flex-row items-start justify-between lg:items-center">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Client Zertifikat</label>
                  <div className="w-full lg:w-[40%]">
                    <input
                      type="file"
                      name="clientCertificate"
                      required
                      onChange={handleFileUpload}
                      accept=".crt,.pem,.cer"
                      className="w-full px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-xs file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                    />
                    {formData.clientCertificate && (
                      <p className="text-xs text-green-600 mt-1">✓ {formData.clientCertificate.name}</p>
                    )}
                  </div>
                </div>

                {/* Client Private Key */}
                <div className="flex flex-col lg:flex-row items-start justify-between lg:items-center">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Client Private Key</label>
                  <div className="w-full lg:w-[40%]">
                    <input
                      type="file"
                      name="clientPrivateKey"
                      required
                      onChange={handleFileUpload}
                      accept=".key,.pem"
                      className="w-full px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-xs file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                    />
                    {formData.clientPrivateKey && (
                      <p className="text-xs text-green-600 mt-1">✓ {formData.clientPrivateKey.name}</p>
                    )}
                  </div>
                </div>
              </>
            )}

            {/* TLS Version */}
            <div className="flex flex-col lg:flex-row items-start justify-between lg:items-center">
              <label className="block text-sm font-medium text-gray-700 mb-1">TLS Version</label>
              <select
                name="tlsVersion"
                required
                value={formData.tlsVersion}
                onChange={handleInputChange}
                className="w-full lg:w-[40%] px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="1.2">1.2</option>
                <option value="1.3">1.3</option>
              </select>
            </div>
          </div>
        </div>

        {/* Access Control Section */}
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
                <option value="none">none</option>
                <option value="gzip">gzip</option>
                <option value="deflate">deflate</option>
              </select>
            </div>
          </div>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="mb-3 p-2 bg-green-50 border border-green-200 rounded text-sm">
            <p className="text-green-700 font-medium">Authentifizierung erfolgreich. TLS aktiv.</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex w-full flex-col lg:flex-row justify-end items-center gap-5 pt-2">
          <button
            onClick={handleTestSecurity}
            className="px-4 py-2 w-full lg:w-[20%] bg-[#EBEBEB] text-gray-700 text-sm font-medium hover:text-gray-900 transition-colors"
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