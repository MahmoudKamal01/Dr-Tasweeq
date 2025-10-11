import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { adminProjects } from "../../data/dummyData";
import {
  FaPlus,
  FaSearch,
  FaFilter,
  FaEdit,
  FaTrash,
  FaEye,
  FaChartLine,
} from "react-icons/fa";

function AdminProjects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredProjects = adminProjects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "all" || project.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-600";
      case "In Progress":
        return "bg-blue-600";
      case "Planning":
        return "bg-yellow-600";
      case "On Hold":
        return "bg-red-600";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <DashboardLayout type="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">Project Management</h1>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition flex items-center gap-2">
            <FaPlus />
            New Project
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              label: "Total Projects",
              value: adminProjects.length,
              color: "bg-blue-600",
            },
            {
              label: "In Progress",
              value: adminProjects.filter((p) => p.status === "In Progress")
                .length,
              color: "bg-green-600",
            },
            {
              label: "Completed",
              value: adminProjects.filter((p) => p.status === "Completed")
                .length,
              color: "bg-purple-600",
            },
            {
              label: "Planning",
              value: adminProjects.filter((p) => p.status === "Planning")
                .length,
              color: "bg-yellow-600",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700"
            >
              <div
                className={`${stat.color} h-2 w-full rounded-full mb-4`}
              ></div>
              <div className="text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[300px]">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search projects..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaFilter className="text-gray-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
              >
                <option value="all">All Status</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Planning">Planning</option>
              </select>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Client: {project.client}
                  </p>
                </div>
                <span
                  className={`${getStatusColor(
                    project.status
                  )} text-white px-3 py-1 rounded-full text-xs font-semibold`}
                >
                  {project.status}
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <div>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400">Start Date</p>
                    <p className="text-white">
                      {new Date(project.startDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400">Due Date</p>
                    <p className="text-white">
                      {new Date(project.dueDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div>
                    <p className="text-gray-400">Budget</p>
                    <p className="text-white font-bold">
                      ${project.budget.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400">Team Members</p>
                    <p className="text-white">{project.team.length}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-gray-700">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2">
                  <FaEye />
                  View
                </button>
                <button className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition flex items-center justify-center gap-2">
                  <FaEdit />
                  Edit
                </button>
                <button className="p-2 text-red-400 hover:bg-gray-700 rounded transition">
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <FaChartLine className="text-purple-400" />
            Project Performance
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">89%</div>
              <p className="text-gray-400">On-Time Delivery</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">4.8/5</div>
              <p className="text-gray-400">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">$125K</div>
              <p className="text-gray-400">Total Revenue</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AdminProjects;
