import DashboardLayout from "../../components/DashboardLayout";
import { adminAnalytics, adminProjects } from "../../data/dummyData";
import {
  FaDollarSign,
  FaUsers,
  FaProjectDiagram,
  FaChartLine,
  FaTasks,
  FaClock,
} from "react-icons/fa";

function AdminDashboard() {
  const recentProjects = adminProjects.slice(0, 5);

  return (
    <DashboardLayout type="admin">
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-6 text-white">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-purple-100">
            Complete overview of your platform performance
          </p>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-600 p-3 rounded-lg">
                <FaDollarSign className="text-white text-2xl" />
              </div>
              <span className="text-green-400 text-sm font-semibold">
                +12.5%
              </span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              ${adminAnalytics.totalRevenue.toLocaleString()}
            </div>
            <div className="text-gray-400 text-sm">Total Revenue</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-600 p-3 rounded-lg">
                <FaUsers className="text-white text-2xl" />
              </div>
              <span className="text-blue-400 text-sm font-semibold">+5.2%</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              {adminAnalytics.activeClients}
            </div>
            <div className="text-gray-400 text-sm">Active Clients</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-600 p-3 rounded-lg">
                <FaProjectDiagram className="text-white text-2xl" />
              </div>
              <span className="text-purple-400 text-sm font-semibold">
                +8.3%
              </span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              {adminAnalytics.completedProjects}
            </div>
            <div className="text-gray-400 text-sm">Completed Projects</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-orange-600 p-3 rounded-lg">
                <FaChartLine className="text-white text-2xl" />
              </div>
              <span className="text-green-400 text-sm font-semibold">
                +2.1%
              </span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              {adminAnalytics.deliveryRate}%
            </div>
            <div className="text-gray-400 text-sm">Delivery Rate</div>
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h2 className="text-xl font-bold text-white mb-6">Monthly Revenue</h2>
          <div className="h-64 flex items-end justify-between gap-2">
            {adminAnalytics.monthlyRevenue.map((data, index) => {
              const maxRevenue = Math.max(
                ...adminAnalytics.monthlyRevenue.map((m) => m.revenue)
              );
              const height = (data.revenue / maxRevenue) * 100;
              return (
                <div
                  key={index}
                  className="flex-1 flex flex-col items-center gap-2"
                >
                  <div className="w-full flex flex-col items-center">
                    <span className="text-xs text-gray-400 mb-1">
                      ${(data.revenue / 1000).toFixed(1)}k
                    </span>
                    <div
                      className="w-full bg-gradient-to-t from-purple-600 to-pink-600 rounded-t-lg transition-all duration-500 hover:from-purple-500 hover:to-pink-500"
                      style={{ height: `${height}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-400">{data.month}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Projects Overview */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Project Status */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-bold text-white mb-4">
              Projects by Status
            </h2>
            <div className="space-y-4">
              {Object.entries(adminAnalytics.projectsByStatus).map(
                ([status, count]) => {
                  const total = Object.values(
                    adminAnalytics.projectsByStatus
                  ).reduce((a, b) => a + b, 0);
                  const percentage = (count / total) * 100;
                  const colors = {
                    completed: "bg-green-600",
                    inProgress: "bg-blue-600",
                    planning: "bg-yellow-600",
                    onHold: "bg-red-600",
                  };
                  return (
                    <div key={status}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-300 capitalize">
                          {status.replace(/([A-Z])/g, " $1").trim()}
                        </span>
                        <span className="text-white font-semibold">
                          {count}
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className={`${colors[status]} h-2 rounded-full transition-all duration-500`}
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>

          {/* Recent Projects */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-bold text-white mb-4">
              Recent Projects
            </h2>
            <div className="space-y-3">
              {recentProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-gray-900 rounded-lg p-4 border border-gray-700 hover:border-purple-500 transition"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-semibold">{project.name}</h4>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === "Completed"
                          ? "bg-green-600"
                          : project.status === "In Progress"
                          ? "bg-blue-600"
                          : project.status === "Planning"
                          ? "bg-yellow-600"
                          : "bg-gray-600"
                      } text-white`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{project.client}</span>
                    <span>${project.budget.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              icon: FaUsers,
              label: "Manage Users",
              count: "124",
              color: "bg-blue-600",
            },
            {
              icon: FaProjectDiagram,
              label: "View Projects",
              count: "183",
              color: "bg-purple-600",
            },
            {
              icon: FaTasks,
              label: "Active Tasks",
              count: "56",
              color: "bg-green-600",
            },
            {
              icon: FaClock,
              label: "Pending Approvals",
              count: "8",
              color: "bg-orange-600",
            },
          ].map((action, index) => {
            const Icon = action.icon;
            return (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition cursor-pointer group"
              >
                <div
                  className={`${action.color} p-3 rounded-lg inline-block mb-3 group-hover:scale-110 transition`}
                >
                  <Icon className="text-white text-xl" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  {action.count}
                </div>
                <div className="text-gray-400 text-sm">{action.label}</div>
              </div>
            );
          })}
        </div>

        {/* Recent Activity Log */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {[
              {
                action: "New project created: Mobile App Development",
                user: "Admin User",
                time: "10 mins ago",
                type: "success",
              },
              {
                action: "User registered: john@example.com",
                user: "System",
                time: "25 mins ago",
                type: "info",
              },
              {
                action: "Payment received: $2,500",
                user: "Tech Store Inc",
                time: "1 hour ago",
                type: "success",
              },
              {
                action: "Project completed: Website Redesign",
                user: "Sarah Designer",
                time: "2 hours ago",
                type: "success",
              },
              {
                action: "Support ticket created: #1234",
                user: "Fashion Co",
                time: "3 hours ago",
                type: "warning",
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-start gap-4 py-3 border-b border-gray-700 last:border-0"
              >
                <div
                  className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === "success"
                      ? "bg-green-500"
                      : activity.type === "warning"
                      ? "bg-yellow-500"
                      : "bg-blue-500"
                  }`}
                ></div>
                <div className="flex-1">
                  <p className="text-white">{activity.action}</p>
                  <div className="flex items-center gap-3 mt-1 text-sm text-gray-400">
                    <span>{activity.user}</span>
                    <span>•</span>
                    <span>{activity.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AdminDashboard;
