import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import {
  FaSave,
  FaCog,
  FaEnvelope,
  FaShieldAlt,
  FaDatabase,
  FaPlug,
  FaBell,
} from "react-icons/fa";

function AdminSettings() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <DashboardLayout type="admin">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">System Settings</h1>

        {/* Tabs */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          <div className="flex border-b border-gray-700 overflow-x-auto">
            {[
              { id: "general", label: "General", icon: FaCog },
              { id: "email", label: "Email/SMTP", icon: FaEnvelope },
              { id: "security", label: "Security", icon: FaShieldAlt },
              { id: "backup", label: "Backup", icon: FaDatabase },
              { id: "integrations", label: "Integrations", icon: FaPlug },
              { id: "notifications", label: "Notifications", icon: FaBell },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 flex items-center gap-2 transition whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-purple-600 text-white"
                      : "text-gray-400 hover:bg-gray-750 hover:text-white"
                  }`}
                >
                  <Icon />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="p-6">
            {/* General Settings */}
            {activeTab === "general" && (
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">
                    Site Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Dr-Tasweeq"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">
                    Site Description
                  </label>
                  <textarea
                    rows="3"
                    defaultValue="Professional marketing and digital services platform"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                  ></textarea>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2 font-semibold">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      defaultValue="info@markethub.com"
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2 font-semibold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      defaultValue="+1 (555) 123-4567"
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">
                    Default Language
                  </label>
                  <select className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500">
                    <option>English</option>
                    <option>Arabic</option>
                    <option>Spanish</option>
                  </select>
                </div>
              </div>
            )}

            {/* Email/SMTP Settings */}
            {activeTab === "email" && (
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">
                    SMTP Host
                  </label>
                  <input
                    type="text"
                    placeholder="smtp.example.com"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2 font-semibold">
                      SMTP Port
                    </label>
                    <input
                      type="number"
                      placeholder="587"
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2 font-semibold">
                      Encryption
                    </label>
                    <select className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500">
                      <option>TLS</option>
                      <option>SSL</option>
                      <option>None</option>
                    </select>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2 font-semibold">
                      SMTP Username
                    </label>
                    <input
                      type="text"
                      placeholder="user@example.com"
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2 font-semibold">
                      SMTP Password
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                  Test Email Connection
                </button>
              </div>
            )}

            {/* Security Settings */}
            {activeTab === "security" && (
              <div className="space-y-6">
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-white font-semibold">
                      Two-Factor Authentication
                    </label>
                    <input type="checkbox" className="w-5 h-5" />
                  </div>
                  <p className="text-gray-400 text-sm">
                    Require 2FA for admin accounts
                  </p>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-white font-semibold">
                      Force HTTPS
                    </label>
                    <input type="checkbox" defaultChecked className="w-5 h-5" />
                  </div>
                  <p className="text-gray-400 text-sm">
                    Redirect all HTTP traffic to HTTPS
                  </p>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-white font-semibold">
                      File Encryption
                    </label>
                    <input type="checkbox" defaultChecked className="w-5 h-5" />
                  </div>
                  <p className="text-gray-400 text-sm">
                    Encrypt uploaded files
                  </p>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">
                    Session Timeout (minutes)
                  </label>
                  <input
                    type="number"
                    defaultValue="30"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>
            )}

            {/* Backup Settings */}
            {activeTab === "backup" && (
              <div className="space-y-6">
                <div className="bg-green-600/20 border border-green-600 rounded-lg p-4 text-green-400">
                  Last backup: October 10, 2025 at 3:00 AM
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">
                    Automatic Backup Schedule
                  </label>
                  <select className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500">
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                    <option>Disabled</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">
                    Backup Retention (days)
                  </label>
                  <input
                    type="number"
                    defaultValue="30"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div className="flex gap-4">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
                    <FaDatabase />
                    Create Backup Now
                  </button>
                  <button className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition">
                    Restore from Backup
                  </button>
                </div>
              </div>
            )}

            {/* Integrations */}
            {activeTab === "integrations" && (
              <div className="space-y-4">
                {[
                  { name: "Google Analytics", status: "connected", icon: "📊" },
                  {
                    name: "Stripe Payment Gateway",
                    status: "connected",
                    icon: "💳",
                  },
                  {
                    name: "WhatsApp Business API",
                    status: "disconnected",
                    icon: "💬",
                  },
                  { name: "Power BI", status: "disconnected", icon: "📈" },
                  { name: "Mailchimp", status: "connected", icon: "✉️" },
                  {
                    name: "Slack Notifications",
                    status: "disconnected",
                    icon: "💼",
                  },
                ].map((integration, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 rounded-lg p-4 border border-gray-700 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-3xl">{integration.icon}</div>
                      <div>
                        <h4 className="text-white font-semibold">
                          {integration.name}
                        </h4>
                        <p
                          className={`text-sm ${
                            integration.status === "connected"
                              ? "text-green-400"
                              : "text-gray-400"
                          }`}
                        >
                          {integration.status}
                        </p>
                      </div>
                    </div>
                    <button
                      className={`px-6 py-2 rounded-lg transition ${
                        integration.status === "connected"
                          ? "bg-red-600 hover:bg-red-700 text-white"
                          : "bg-purple-600 hover:bg-purple-700 text-white"
                      }`}
                    >
                      {integration.status === "connected"
                        ? "Disconnect"
                        : "Connect"}
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Notifications */}
            {activeTab === "notifications" && (
              <div className="space-y-4">
                {[
                  {
                    title: "New User Registration",
                    email: true,
                    whatsapp: false,
                  },
                  {
                    title: "Project Milestone Completed",
                    email: true,
                    whatsapp: true,
                  },
                  { title: "Payment Received", email: true, whatsapp: true },
                  { title: "New Support Ticket", email: true, whatsapp: false },
                  { title: "System Alerts", email: true, whatsapp: false },
                ].map((notification, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 rounded-lg p-4 border border-gray-700"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-white font-semibold">
                        {notification.title}
                      </h4>
                    </div>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 text-gray-300">
                        <input
                          type="checkbox"
                          defaultChecked={notification.email}
                          className="w-4 h-4"
                        />
                        <span>Email</span>
                      </label>
                      <label className="flex items-center gap-2 text-gray-300">
                        <input
                          type="checkbox"
                          defaultChecked={notification.whatsapp}
                          className="w-4 h-4"
                        />
                        <span>WhatsApp</span>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition flex items-center gap-2">
            <FaSave />
            Save Settings
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AdminSettings;
