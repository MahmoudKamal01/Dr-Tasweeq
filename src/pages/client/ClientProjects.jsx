import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { clientProjects } from "../../data/dummyData";
import {
  FaChartLine,
  FaUsers,
  FaCalendar,
  FaCheckCircle,
  FaClock,
  FaExclamationCircle,
} from "react-icons/fa";

function ClientProjects() {
  const [selectedProject, setSelectedProject] = useState(clientProjects[0]);
  const [viewMode, setViewMode] = useState("kanban"); // 'kanban' or 'timeline'

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-500";
      case "in-progress":
        return "bg-blue-500";
      case "pending":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <FaCheckCircle className="text-green-500" />;
      case "in-progress":
        return <FaClock className="text-blue-500" />;
      case "pending":
        return <FaExclamationCircle className="text-yellow-500" />;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout type="client">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">My Projects</h1>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode("kanban")}
              className={`px-4 py-2 rounded-lg transition ${
                viewMode === "kanban"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-700 text-gray-400 hover:bg-gray-600"
              }`}
            >
              Kanban View
            </button>
            <button
              onClick={() => setViewMode("timeline")}
              className={`px-4 py-2 rounded-lg transition ${
                viewMode === "timeline"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-700 text-gray-400 hover:bg-gray-600"
              }`}
            >
              Timeline View
            </button>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {clientProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`bg-gray-800 rounded-xl p-6 border-2 cursor-pointer transition ${
                selectedProject?.id === project.id
                  ? "border-purple-500"
                  : "border-gray-700 hover:border-gray-600"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-white font-bold">{project.name}</h3>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === "Completed"
                      ? "bg-green-600 text-white"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm text-gray-400 mb-1">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <FaCalendar />
                  <span>
                    Due: {new Date(project.dueDate).toLocaleDateString()}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <FaUsers />
                  <span>{project.team.length} team members</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Project Details */}
        {selectedProject && (
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                {selectedProject.name}
              </h2>
              <div className="flex gap-4 text-sm">
                <div className="text-gray-400">
                  Budget:{" "}
                  <span className="text-white font-semibold">
                    ${selectedProject.budget}
                  </span>
                </div>
                <div className="text-gray-400">
                  Spent:{" "}
                  <span className="text-white font-semibold">
                    ${selectedProject.spent}
                  </span>
                </div>
              </div>
            </div>

            {viewMode === "kanban" ? (
              /* Kanban Board */
              <div className="grid md:grid-cols-3 gap-4">
                {["completed", "in-progress", "pending"].map((status) => (
                  <div key={status} className="bg-gray-900 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-4 capitalize flex items-center gap-2">
                      {getStatusIcon(status)}
                      {status.replace("-", " ")}
                      <span className="ml-auto bg-gray-700 px-2 py-1 rounded text-xs">
                        {
                          selectedProject.tasks.filter(
                            (t) => t.status === status
                          ).length
                        }
                      </span>
                    </h3>
                    <div className="space-y-3">
                      {selectedProject.tasks
                        .filter((task) => task.status === status)
                        .map((task) => (
                          <div
                            key={task.id}
                            className="bg-gray-800 rounded-lg p-4 border border-gray-700"
                          >
                            <h4 className="text-white font-medium mb-2">
                              {task.title}
                            </h4>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                              <FaUsers className="text-xs" />
                              <span>{task.assignee}</span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Timeline View */
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <FaCalendar />
                    <span>
                      Start:{" "}
                      {new Date(
                        selectedProject.startDate || Date.now()
                      ).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendar />
                    <span>
                      End:{" "}
                      {new Date(selectedProject.dueDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                {selectedProject.tasks.map((task, index) => (
                  <div key={task.id} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-4 h-4 rounded-full ${getStatusColor(
                          task.status
                        )}`}
                      ></div>
                      {index < selectedProject.tasks.length - 1 && (
                        <div className="w-0.5 flex-1 bg-gray-700 my-1"></div>
                      )}
                    </div>
                    <div className="flex-1 bg-gray-900 rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-white font-semibold">
                          {task.title}
                        </h4>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${
                            task.status === "completed"
                              ? "bg-green-600"
                              : task.status === "in-progress"
                              ? "bg-blue-600"
                              : "bg-yellow-600"
                          } text-white`}
                        >
                          {task.status.replace("-", " ")}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mt-2">
                        Assigned to: {task.assignee}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Team Members */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h2 className="text-xl font-bold text-white mb-4">Project Team</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {selectedProject?.team.map((member, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-4 flex items-center gap-4"
              >
                <img
                  src={`https://ui-avatars.com/api/?name=${member}&background=random`}
                  alt={member}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="text-white font-semibold">{member}</h4>
                  <p className="text-gray-400 text-sm">Team Member</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ClientProjects;
