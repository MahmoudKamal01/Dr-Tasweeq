import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { adminUsers } from "../../data/dummyData";
import {
  FaEdit,
  FaTrash,
  FaPlus,
  FaSearch,
  FaFilter,
  FaUserShield,
  FaUser,
  FaBriefcase,
} from "react-icons/fa";

function AdminUsers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("all");
  const [showAddModal, setShowAddModal] = useState(false);

  const filteredUsers = adminUsers.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === "all" || user.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const getRoleIcon = (role) => {
    switch (role) {
      case "admin":
        return <FaUserShield className="text-purple-400" />;
      case "client":
        return <FaUser className="text-blue-400" />;
      case "freelancer":
        return <FaBriefcase className="text-green-400" />;
      default:
        return <FaUser />;
    }
  };

  const getRoleBadge = (role) => {
    const colors = {
      admin: "bg-purple-600",
      client: "bg-blue-600",
      freelancer: "bg-green-600",
    };
    return colors[role] || "bg-gray-600";
  };

  return (
    <DashboardLayout type="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">User Management</h1>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition flex items-center gap-2"
          >
            <FaPlus />
            Add New User
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              label: "Total Users",
              value: adminUsers.length,
              icon: FaUser,
              color: "bg-blue-600",
            },
            {
              label: "Clients",
              value: adminUsers.filter((u) => u.role === "client").length,
              icon: FaUser,
              color: "bg-green-600",
            },
            {
              label: "Freelancers",
              value: adminUsers.filter((u) => u.role === "freelancer").length,
              icon: FaBriefcase,
              color: "bg-purple-600",
            },
            {
              label: "Admins",
              value: adminUsers.filter((u) => u.role === "admin").length,
              icon: FaUserShield,
              color: "bg-orange-600",
            },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700"
              >
                <div
                  className={`${stat.color} p-3 rounded-lg inline-block mb-3`}
                >
                  <Icon className="text-white text-xl" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            );
          })}
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
                  placeholder="Search users..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaFilter className="text-gray-400" />
              <select
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
              >
                <option value="all">All Roles</option>
                <option value="admin">Admin</option>
                <option value="client">Client</option>
                <option value="freelancer">Freelancer</option>
              </select>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-900 border-b border-gray-700">
                <tr>
                  <th className="text-left px-6 py-4 text-gray-400 font-semibold">
                    User
                  </th>
                  <th className="text-left px-6 py-4 text-gray-400 font-semibold">
                    Role
                  </th>
                  <th className="text-left px-6 py-4 text-gray-400 font-semibold">
                    Status
                  </th>
                  <th className="text-left px-6 py-4 text-gray-400 font-semibold">
                    Joined
                  </th>
                  <th className="text-left px-6 py-4 text-gray-400 font-semibold">
                    Details
                  </th>
                  <th className="text-right px-6 py-4 text-gray-400 font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-gray-700 hover:bg-gray-750 transition"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={`https://ui-avatars.com/api/?name=${user.name}&background=random`}
                          alt={user.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <div className="text-white font-semibold">
                            {user.name}
                          </div>
                          <div className="text-gray-400 text-sm">
                            {user.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {getRoleIcon(user.role)}
                        <span
                          className={`${getRoleBadge(
                            user.role
                          )} text-white px-3 py-1 rounded-full text-xs font-semibold capitalize`}
                        >
                          {user.role}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          user.status === "active"
                            ? "bg-green-600 text-white"
                            : "bg-red-600 text-white"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-400">{user.joinDate}</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">
                      {user.role === "client" && (
                        <div>
                          <div>{user.projects} projects</div>
                          <div className="text-gray-400">
                            ${user.totalSpent} spent
                          </div>
                        </div>
                      )}
                      {user.role === "freelancer" && (
                        <div>
                          <div>{user.projectsCompleted} completed</div>
                          <div className="text-yellow-400">
                            ⭐ {user.rating}
                          </div>
                        </div>
                      )}
                      {user.role === "admin" && (
                        <div className="text-gray-400">Full access</div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-blue-400 hover:bg-gray-700 rounded transition">
                          <FaEdit />
                        </button>
                        <button className="p-2 text-red-400 hover:bg-gray-700 rounded transition">
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add User Modal */}
        {showAddModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            onClick={() => setShowAddModal(false)}
          >
            <div
              className="bg-gray-800 rounded-xl p-8 max-w-md w-full border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Add New User
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                    placeholder="Enter name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                    placeholder="Enter email"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Role</label>
                  <select className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500">
                    <option>Client</option>
                    <option>Freelancer</option>
                    <option>Admin</option>
                  </select>
                </div>
                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="flex-1 bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-600 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition"
                  >
                    Add User
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default AdminUsers;
