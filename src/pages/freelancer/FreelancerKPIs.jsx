import { useState } from "react";
import FreelancerLayout from "../../components/FreelancerLayout";
import { freelancerKPIs } from "../../data/dummyData";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import {
  FiTrendingUp,
  FiTrendingDown,
  FiClock,
  FiStar,
  FiCalendar,
  FiCheckSquare,
  FiTarget,
  FiAward,
} from "react-icons/fi";

const FreelancerKPIs = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("month");

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-3">
          <p className="text-white font-medium">{label}</p>
          <p className="text-green-400">
            {payload[0].name}: {payload[0].value}
          </p>
        </div>
      );
    }
    return null;
  };

  const PieTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-3">
          <p className="text-white font-medium">{payload[0].name}</p>
          <p className="text-green-400">
            Tasks: {payload[0].value}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <FreelancerLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">KPIs & Analytics</h1>
            <p className="text-gray-400">Track your performance and progress</p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setSelectedPeriod("week")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedPeriod === "week"
                  ? "bg-green-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              Week
            </button>
            <button
              onClick={() => setSelectedPeriod("month")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedPeriod === "month"
                  ? "bg-green-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              Month
            </button>
            <button
              onClick={() => setSelectedPeriod("year")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedPeriod === "year"
                  ? "bg-green-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              Year
            </button>
          </div>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">On-Time Rate</p>
                <p className="text-2xl font-bold text-white">{freelancerKPIs.onTimeRate}%</p>
                <div className="flex items-center mt-2">
                  <FiTrendingUp className="text-green-400 mr-1" size={16} />
                  <span className="text-green-400 text-sm">+5% this month</span>
                </div>
              </div>
              <div className="p-3 bg-green-600/20 rounded-lg">
                <FiTarget className="text-green-400" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Avg. Delivery Time</p>
                <p className="text-2xl font-bold text-white">{freelancerKPIs.averageDeliveryTime}</p>
                <div className="flex items-center mt-2">
                  <FiTrendingDown className="text-green-400 mr-1" size={16} />
                  <span className="text-green-400 text-sm">-0.5 days</span>
                </div>
              </div>
              <div className="p-3 bg-blue-600/20 rounded-lg">
                <FiClock className="text-blue-400" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Client Rating</p>
                <p className="text-2xl font-bold text-white">{freelancerKPIs.rating}⭐</p>
                <div className="flex items-center mt-2">
                  <FiTrendingUp className="text-green-400 mr-1" size={16} />
                  <span className="text-green-400 text-sm">+0.2 this month</span>
                </div>
              </div>
              <div className="p-3 bg-yellow-600/20 rounded-lg">
                <FiStar className="text-yellow-400" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Projects This Month</p>
                <p className="text-2xl font-bold text-white">{freelancerKPIs.projectsThisMonth}</p>
                <div className="flex items-center mt-2">
                  <FiTrendingUp className="text-green-400 mr-1" size={16} />
                  <span className="text-green-400 text-sm">+2 from last month</span>
                </div>
              </div>
              <div className="p-3 bg-purple-600/20 rounded-lg">
                <FiCalendar className="text-purple-400" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Task Status Distribution */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-6">Task Status Distribution</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={freelancerKPIs.taskStatusDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="count"
                  >
                    {freelancerKPIs.taskStatusDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<PieTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-2">
              {freelancerKPIs.taskStatusDistribution.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-gray-300 text-sm">{item.status}</span>
                  </div>
                  <span className="text-white font-semibold">{item.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tasks Per Week */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-6">Tasks Per Week</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={freelancerKPIs.tasksPerWeek}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis 
                    dataKey="week" 
                    stroke="#9CA3AF"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="#9CA3AF"
                    fontSize={12}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="tasks"
                    stroke="#10B981"
                    strokeWidth={3}
                    dot={{ fill: "#10B981", strokeWidth: 2, r: 6 }}
                    activeDot={{ r: 8, stroke: "#10B981", strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Performance Overview */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-6">Performance Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{freelancerKPIs.activeTasks}</div>
              <p className="text-gray-400 text-sm">Active Tasks</p>
              <div className="mt-2 w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${(freelancerKPIs.activeTasks / 10) * 100}%` }}
                />
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{freelancerKPIs.completedTasks}</div>
              <p className="text-gray-400 text-sm">Completed Tasks</p>
              <div className="mt-2 w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${(freelancerKPIs.completedTasks / 20) * 100}%` }}
                />
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{freelancerKPIs.monthlyProgress}%</div>
              <p className="text-gray-400 text-sm">Monthly Progress</p>
              <div className="mt-2 w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
                  style={{ width: `${freelancerKPIs.monthlyProgress}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-6">Recent Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center space-x-3 p-4 bg-gray-700/50 rounded-lg">
              <div className="p-2 bg-green-600/20 rounded-lg">
                <FiAward className="text-green-400" size={20} />
              </div>
              <div>
                <p className="font-medium text-white text-sm">On-Time Master</p>
                <p className="text-gray-400 text-xs">92% on-time rate</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-gray-700/50 rounded-lg">
              <div className="p-2 bg-blue-600/20 rounded-lg">
                <FiCheckSquare className="text-blue-400" size={20} />
              </div>
              <div>
                <p className="font-medium text-white text-sm">Task Completer</p>
                <p className="text-gray-400 text-xs">12 tasks completed</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-gray-700/50 rounded-lg">
              <div className="p-2 bg-yellow-600/20 rounded-lg">
                <FiStar className="text-yellow-400" size={20} />
              </div>
              <div>
                <p className="font-medium text-white text-sm">Top Rated</p>
                <p className="text-gray-400 text-xs">4.8⭐ average rating</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-gray-700/50 rounded-lg">
              <div className="p-2 bg-purple-600/20 rounded-lg">
                <FiTrendingUp className="text-purple-400" size={20} />
              </div>
              <div>
                <p className="font-medium text-white text-sm">Rising Star</p>
                <p className="text-gray-400 text-xs">8 projects this month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FreelancerLayout>
  );
};

export default FreelancerKPIs;
