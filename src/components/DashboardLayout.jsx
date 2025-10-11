import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
  FaTachometerAlt,
  FaProjectDiagram,
  FaFileAlt,
  FaMoneyBillWave,
  FaUsers,
  FaCog,
  FaBars,
  FaTimes,
  FaSignOutAlt,
  FaChartBar,
  FaEdit,
  FaGraduationCap,
} from "react-icons/fa";

function DashboardLayout({ children, type = "client" }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const clientMenuItems = [
    { path: "/client/dashboard", icon: FaTachometerAlt, label: "Dashboard" },
    { path: "/client/projects", icon: FaProjectDiagram, label: "My Projects" },
    { path: "/client/files", icon: FaFileAlt, label: "Files" },
    { path: "/client/invoices", icon: FaMoneyBillWave, label: "Invoices" },
    { path: "/client/community", icon: FaGraduationCap, label: "Community" },
  ];

  const adminMenuItems = [
    { path: "/admin/dashboard", icon: FaTachometerAlt, label: "Dashboard" },
    { path: "/admin/users", icon: FaUsers, label: "Users" },
    { path: "/admin/projects", icon: FaProjectDiagram, label: "Projects" },
    { path: "/admin/finance", icon: FaChartBar, label: "Finance" },
    { path: "/admin/content", icon: FaEdit, label: "Content" },
    { path: "/admin/settings", icon: FaCog, label: "Settings" },
  ];

  const menuItems = type === "admin" ? adminMenuItems : clientMenuItems;

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
              {sidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {type === "admin" ? "Admin Dashboard" : "Client Portal"}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-white text-sm font-semibold">{user?.name}</p>
              <p className="text-gray-400 text-xs">{user?.email}</p>
            </div>
            <img
              src={user?.avatar}
              alt={user?.name}
              className="w-10 h-10 rounded-full"
            />
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
                    ? "bg-purple-600 text-white"
                    : "text-gray-400 hover:bg-gray-700 hover:text-white"
                }`}
              >
                <Icon />
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
            <FaSignOutAlt />
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
}

export default DashboardLayout;
