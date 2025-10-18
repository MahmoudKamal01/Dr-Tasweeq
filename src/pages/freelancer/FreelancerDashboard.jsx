import { useState } from "react";
import FreelancerLayout from "../../components/FreelancerLayout";
import { freelancerTasks, freelancerKPIs } from "../../data/dummyData";
import {
  FiCheckSquare,
  FiClock,
  FiTrendingUp,
  FiCalendar,
  FiStar,
  FiArrowUp,
  FiArrowDown,
} from "react-icons/fi";

const FreelancerDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("month");

  const recentTasks = freelancerTasks.slice(0, 5);

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "text-green-400 bg-green-400/10";
      case "in-progress":
        return "text-blue-400 bg-blue-400/10";
      case "pending":
        return "text-yellow-400 bg-yellow-400/10";
      default:
        return "text-gray-400 bg-gray-400/10";
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
      default:
        return "text-gray-400";
    }
  };

  return (
    <FreelancerLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">
            👋 Welcome back, Sarah!
          </h1>
          <p className="text-green-100">
            You have {freelancerKPIs.activeTasks} active tasks and {freelancerKPIs.completedTasks} completed this month.
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Active Tasks</p>
                <p className="text-2xl font-bold text-white">{freelancerKPIs.activeTasks}</p>
              </div>
              <div className="p-3 bg-blue-600/20 rounded-lg">
                <FiCheckSquare className="text-blue-400" size={24} />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <FiArrowUp className="text-green-400 mr-1" size={16} />
              <span className="text-green-400">+2 from last week</span>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Completed Tasks</p>
                <p className="text-2xl font-bold text-white">{freelancerKPIs.completedTasks}</p>
              </div>
              <div className="p-3 bg-green-600/20 rounded-lg">
                <FiCheckSquare className="text-green-400" size={24} />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <FiArrowUp className="text-green-400 mr-1" size={16} />
              <span className="text-green-400">+3 this week</span>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">On-Time Rate</p>
                <p className="text-2xl font-bold text-white">{freelancerKPIs.onTimeRate}%</p>
              </div>
              <div className="p-3 bg-yellow-600/20 rounded-lg">
                <FiClock className="text-yellow-400" size={24} />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <FiArrowUp className="text-green-400 mr-1" size={16} />
              <span className="text-green-400">+5% this month</span>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Rating</p>
                <p className="text-2xl font-bold text-white">{freelancerKPIs.rating}⭐</p>
              </div>
              <div className="p-3 bg-purple-600/20 rounded-lg">
                <FiStar className="text-purple-400" size={24} />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <FiArrowUp className="text-green-400 mr-1" size={16} />
              <span className="text-green-400">+0.2 this month</span>
            </div>
          </div>
        </div>

        {/* Monthly Performance */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Monthly Performance</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => setSelectedPeriod("week")}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                  selectedPeriod === "week"
                    ? "bg-green-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                Week
              </button>
              <button
                onClick={() => setSelectedPeriod("month")}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                  selectedPeriod === "month"
                    ? "bg-green-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                Month
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Progress</span>
              <span className="text-white font-semibold">{freelancerKPIs.monthlyProgress}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${freelancerKPIs.monthlyProgress}%` }}
              />
            </div>
            <div className="flex justify-between text-sm text-gray-400">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>
        </div>

        {/* Recent Tasks */}
        <div className="bg-gray-800 rounded-lg border border-gray-700">
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Recent Tasks</h2>
              <button className="text-green-400 hover:text-green-300 text-sm font-medium">
                View All
              </button>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              {recentTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <h3 className="font-semibold text-white">{task.title}</h3>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          task.status
                        )}`}
                      >
                        {task.status.replace("-", " ")}
                      </span>
                      <span className={`text-xs ${getPriorityColor(task.priority)}`}>
                        {task.priority} priority
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">{task.project}</p>
                    <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                      <span className="flex items-center">
                        <FiCalendar className="mr-1" size={12} />
                        Due: {new Date(task.deadline).toLocaleDateString()}
                      </span>
                      <span>Assigned by: {task.assignedBy}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-sm font-semibold text-white">{task.progress}%</div>
                      <div className="w-16 bg-gray-600 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${task.progress}%` }}
                        />
                      </div>
                    </div>
                    <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-600 rounded-lg transition-colors">
                      <FiTrendingUp size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Avg. Delivery Time</p>
                <p className="text-xl font-bold text-white">{freelancerKPIs.averageDeliveryTime}</p>
              </div>
              <FiClock className="text-blue-400" size={24} />
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Projects This Month</p>
                <p className="text-xl font-bold text-white">{freelancerKPIs.projectsThisMonth}</p>
              </div>
              <FiCalendar className="text-green-400" size={24} />
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Client Rating</p>
                <p className="text-xl font-bold text-white">{freelancerKPIs.rating}⭐</p>
              </div>
              <FiStar className="text-yellow-400" size={24} />
            </div>
          </div>
        </div>
      </div>
    </FreelancerLayout>
  );
};

export default FreelancerDashboard;
