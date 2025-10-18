import { useState } from "react";
import FreelancerLayout from "../../components/FreelancerLayout";
import { freelancerTasks } from "../../data/dummyData";
import {
  FiCalendar,
  FiUser,
  FiMoreVertical,
  FiUpload,
  FiMessageCircle,
  FiEye,
  FiEdit,
  FiCheck,
  FiClock,
  FiAlertCircle,
  FiX,
} from "react-icons/fi";

const FreelancerTasks = () => {
  const [viewMode, setViewMode] = useState("kanban"); // kanban or list
  const [selectedTask, setSelectedTask] = useState(null);
  const [tasks, setTasks] = useState(freelancerTasks);

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-600";
      case "in-progress":
        return "bg-blue-600";
      case "pending":
        return "bg-yellow-600";
      default:
        return "bg-gray-600";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "text-red-400";
      case "medium":
        return "text-yellow-400";
      case "low":
        return "text-green-400";
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case "high":
        return <FiAlertCircle className="text-red-400" size={16} />;
      case "medium":
        return <FiClock className="text-yellow-400" size={16} />;
      case "low":
        return <FiCheck className="text-green-400" size={16} />;
    }
  };

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };

  const groupedTasks = {
    pending: tasks.filter(task => task.status === "pending"),
    "in-progress": tasks.filter(task => task.status === "in-progress"),
    completed: tasks.filter(task => task.status === "completed"),
  };

  const TaskCard = ({ task }) => (
    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-white mb-1">{task.title}</h3>
          <p className="text-gray-400 text-sm">{task.project}</p>
        </div>
        <div className="flex items-center space-x-2">
          {getPriorityIcon(task.priority)}
          <button className="text-gray-400 hover:text-white">
            <FiMoreVertical size={16} />
          </button>
        </div>
      </div>

      <p className="text-gray-300 text-sm mb-3">{task.description}</p>

      <div className="space-y-2 mb-4">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>Progress</span>
          <span>{task.progress}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className="bg-green-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${task.progress}%` }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
        <span className="flex items-center">
          <FiCalendar className="mr-1" size={12} />
          {new Date(task.deadline).toLocaleDateString()}
        </span>
        <span className="flex items-center">
          <FiUser className="mr-1" size={12} />
          {task.assignedBy}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <select
          value={task.status}
          onChange={(e) => updateTaskStatus(task.id, e.target.value)}
          className="bg-gray-700 border border-gray-600 rounded px-2 py-1 text-xs text-white focus:outline-none focus:border-green-500"
        >
          <option value="pending">🟡 Pending</option>
          <option value="in-progress">🔵 In Progress</option>
          <option value="completed">🟢 Completed</option>
        </select>

        <button
          onClick={() => setSelectedTask(task)}
          className="text-green-400 hover:text-green-300 text-xs font-medium"
        >
          View Details
        </button>
      </div>
    </div>
  );

  const TaskRow = ({ task }) => (
    <tr className="border-b border-gray-700 hover:bg-gray-800/50 transition-colors">
      <td className="px-6 py-4">
        <div className="flex items-center space-x-3">
          {getPriorityIcon(task.priority)}
          <div>
            <div className="font-semibold text-white">{task.title}</div>
            <div className="text-gray-400 text-sm">{task.project}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)} text-white`}>
          {task.status.replace("-", " ")}
        </span>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center space-x-2">
          <div className="w-16 bg-gray-700 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: `${task.progress}%` }}
            />
          </div>
          <span className="text-sm text-gray-300">{task.progress}%</span>
        </div>
      </td>
      <td className="px-6 py-4 text-gray-300 text-sm">
        {new Date(task.deadline).toLocaleDateString()}
      </td>
      <td className="px-6 py-4 text-gray-300 text-sm">
        {task.assignedBy}
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center space-x-2">
          <select
            value={task.status}
            onChange={(e) => updateTaskStatus(task.id, e.target.value)}
            className="bg-gray-700 border border-gray-600 rounded px-2 py-1 text-xs text-white focus:outline-none focus:border-green-500"
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          <button
            onClick={() => setSelectedTask(task)}
            className="text-green-400 hover:text-green-300"
          >
            <FiEye size={16} />
          </button>
        </div>
      </td>
    </tr>
  );

  return (
    <FreelancerLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">My Tasks</h1>
            <p className="text-gray-400">Manage and track your assigned tasks</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setViewMode("kanban")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  viewMode === "kanban"
                    ? "bg-green-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Kanban
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  viewMode === "list"
                    ? "bg-green-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                List
              </button>
            </div>
          </div>
        </div>

        {/* Kanban View */}
        {viewMode === "kanban" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {Object.entries(groupedTasks).map(([status, statusTasks]) => (
              <div key={status} className="bg-gray-800 rounded-lg border border-gray-700">
                <div className="p-4 border-b border-gray-700">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-white capitalize">
                      {status.replace("-", " ")} ({statusTasks.length})
                    </h3>
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(status)}`} />
                  </div>
                </div>
                <div className="p-4 space-y-4">
                  {statusTasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* List View */}
        {viewMode === "list" && (
          <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Task
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Progress
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Deadline
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Assigned By
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {tasks.map((task) => (
                    <TaskRow key={task.id} task={task} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Task Details Modal */}
        {selectedTask && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-white">{selectedTask.title}</h2>
                  <button
                    onClick={() => setSelectedTask(null)}
                    className="text-gray-400 hover:text-white"
                  >
                    <FiX size={24} />
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Project</label>
                    <p className="text-white">{selectedTask.project}</p>
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Priority</label>
                    <p className={`${getPriorityColor(selectedTask.priority)}`}>
                      {selectedTask.priority}
                    </p>
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Deadline</label>
                    <p className="text-white">{new Date(selectedTask.deadline).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Assigned By</label>
                    <p className="text-white">{selectedTask.assignedBy}</p>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Description</label>
                  <p className="text-white">{selectedTask.description}</p>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Progress</label>
                  <div className="flex items-center space-x-3">
                    <div className="flex-1 bg-gray-700 rounded-full h-3">
                      <div
                        className="bg-green-500 h-3 rounded-full"
                        style={{ width: `${selectedTask.progress}%` }}
                      />
                    </div>
                    <span className="text-white font-semibold">{selectedTask.progress}%</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Upload Files</label>
                    <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center">
                      <FiUpload className="mx-auto text-gray-400 mb-2" size={32} />
                      <p className="text-gray-400">Click to upload or drag and drop</p>
                      <p className="text-gray-500 text-sm">PDF, PNG, JPG up to 10MB</p>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors">
                      <FiMessageCircle className="inline mr-2" size={16} />
                      Open Chat
                    </button>
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                      <FiEdit className="inline mr-2" size={16} />
                      Update Progress
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </FreelancerLayout>
  );
};

export default FreelancerTasks;
