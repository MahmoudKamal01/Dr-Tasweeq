import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { clientProjects, messages } from "../../data/dummyData";
import {
  FaProjectDiagram,
  FaMoneyBillWave,
  FaTasks,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

function ClientDashboard() {
  const [newMessage, setNewMessage] = useState("");

  const stats = [
    {
      label: "Active Projects",
      value: "2",
      icon: FaProjectDiagram,
      color: "bg-blue-600",
    },
    {
      label: "Total Spent",
      value: "$5,250",
      icon: FaMoneyBillWave,
      color: "bg-green-600",
    },
    {
      label: "Completed Tasks",
      value: "12",
      icon: FaTasks,
      color: "bg-purple-600",
    },
    {
      label: "Pending Tasks",
      value: "8",
      icon: FaClock,
      color: "bg-orange-600",
    },
  ];

  return (
    <DashboardLayout type="client">
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white">
          <h1 className="text-3xl font-bold mb-2">Welcome Back! 👋</h1>
          <p className="text-purple-100">
            Here's what's happening with your projects today
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon className="text-white text-xl" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Projects Overview */}
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-bold text-white mb-4">
              Project Progress
            </h2>
            <div className="space-y-4">
              {clientProjects
                .filter((p) => p.status === "In Progress")
                .map((project) => (
                  <div key={project.id} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold">
                        {project.name}
                      </span>
                      <span className="text-purple-400">
                        {project.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>
                        Due: {new Date(project.dueDate).toLocaleDateString()}
                      </span>
                      <span>Budget: ${project.budget}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Messages */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-bold text-white mb-4">
              Recent Messages
            </h2>
            <div className="space-y-4 mb-4 max-h-64 overflow-y-auto">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${
                    msg.type === "sent" ? "justify-end" : ""
                  }`}
                >
                  <div
                    className={`rounded-lg p-3 max-w-xs ${
                      msg.type === "sent"
                        ? "bg-purple-600 text-white"
                        : "bg-gray-700 text-gray-300"
                    }`}
                  >
                    {msg.type === "received" && (
                      <div className="font-semibold text-xs mb-1">
                        {msg.sender}
                      </div>
                    )}
                    <p className="text-sm">{msg.message}</p>
                    <div className="text-xs opacity-70 mt-1">
                      {msg.timestamp}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
              />
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {[
              {
                action: "Design mockups approved",
                time: "2 hours ago",
                color: "text-green-400",
              },
              {
                action: "New invoice generated",
                time: "5 hours ago",
                color: "text-blue-400",
              },
              {
                action: "File uploaded: final-logo.png",
                time: "1 day ago",
                color: "text-purple-400",
              },
              {
                action: "Project milestone completed",
                time: "2 days ago",
                color: "text-green-400",
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 border-b border-gray-700 last:border-0"
              >
                <span className="text-gray-300">{activity.action}</span>
                <span className={`text-sm ${activity.color}`}>
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ClientDashboard;
