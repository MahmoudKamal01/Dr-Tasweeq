import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
  FiHome,
  FiCheckSquare,
  FiMessageCircle,
  FiFolder,
  FiBarChart,
  FiLogOut,
  FiMenu,
  FiX,
  FiWifi,
  FiWifiOff,
} from "react-icons/fi";

const FreelancerLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isOnline, setIsOnline] = useState(true);
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const toggleOnlineStatus = () => {
    setIsOnline(!isOnline);
  };

  const menuItems = [
    { path: "/freelancer/dashboard", label: "Dashboard", icon: FiHome },
    { path: "/freelancer/tasks", label: "My Tasks", icon: FiCheckSquare },
    { path: "/freelancer/chat", label: "Chat", icon: FiMessageCircle },
    { path: "/freelancer/files", label: "Files", icon: FiFolder },
    { path: "/freelancer/kpis", label: "KPIs", icon: FiBarChart },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Top Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-400 hover:text-white"
            >
              {sidebarOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
            <h1 className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Freelancer Portal
            </h1>
          </div>

          <div className="flex items-center gap-4">
            {/* Online/Offline Toggle */}
            <button
              onClick={toggleOnlineStatus}
              className={`flex items-center px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                isOnline
                  ? "bg-green-600 text-white"
                  : "bg-gray-600 text-gray-300"
              }`}
            >
              {isOnline ? <FiWifi className="mr-1" size={12} /> : <FiWifiOff className="mr-1" size={12} />}
              {isOnline ? "Online" : "Offline"}
            </button>

            <div className="text-right">
              <p className="text-white text-sm font-semibold">{user?.name}</p>
              <p className="text-gray-400 text-xs">Freelancer</p>
            </div>
            <div className="relative">
              <img
                src={user?.avatar}
                alt={user?.name}
                className="w-10 h-10 rounded-full"
              />
              <div
                className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-gray-800 ${
                  isOnline ? "bg-green-500" : "bg-gray-500"
                }`}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 bottom-0 z-30 bg-gray-800 border-r border-gray-700 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } w-64`}
      >
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  isActive
                    ? "bg-green-600 text-white"
                    : "text-gray-400 hover:bg-gray-700 hover:text-white"
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg transition"
          >
            <FiLogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`pt-16 transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
};

export default FreelancerLayout;