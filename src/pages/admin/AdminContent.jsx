import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { packages, services, communityContent } from "../../data/dummyData";
import {
  FaEdit,
  FaTrash,
  FaPlus,
  FaTags,
  FaBox,
  FaGraduationCap,
  FaNewspaper,
} from "react-icons/fa";

function AdminContent() {
  const [activeTab, setActiveTab] = useState("packages");

  return (
    <DashboardLayout type="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">Content Management</h1>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition flex items-center gap-2">
            <FaPlus />
            Add New Content
          </button>
        </div>

        {/* Tabs */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          <div className="flex border-b border-gray-700">
            {[
              { id: "packages", label: "Packages", icon: FaBox },
              { id: "services", label: "Services", icon: FaTags },
              { id: "community", label: "Community", icon: FaGraduationCap },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-6 py-4 flex items-center justify-center gap-2 transition ${
                    activeTab === tab.id
                      ? "bg-purple-600 text-white"
                      : "text-gray-400 hover:bg-gray-750 hover:text-white"
                  }`}
                >
                  <Icon />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="p-6">
            {/* Packages Tab */}
            {activeTab === "packages" && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {packages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-white font-bold text-lg">
                          {pkg.name}
                        </h3>
                        {pkg.popular && (
                          <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs">
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm mb-4">
                        {pkg.description}
                      </p>
                      <div className="text-3xl font-bold text-white mb-4">
                        ${pkg.price}
                      </div>
                      <ul className="space-y-2 mb-4 text-sm text-gray-300">
                        {pkg.features.slice(0, 3).map((feature, index) => (
                          <li key={index}>• {feature}</li>
                        ))}
                      </ul>
                      <div className="flex gap-2">
                        <button className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition flex items-center justify-center gap-2">
                          <FaEdit />
                          Edit
                        </button>
                        <button className="p-2 text-red-400 hover:bg-gray-800 rounded transition">
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Services Tab */}
            {activeTab === "services" && (
              <div className="space-y-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-5xl">{service.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-white font-bold text-lg mb-1">
                          {service.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {service.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white mb-2">
                          ${service.price}
                        </div>
                        <div className="flex gap-2">
                          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition flex items-center gap-2">
                            <FaEdit />
                            Edit
                          </button>
                          <button className="p-2 text-red-400 hover:bg-gray-800 rounded transition">
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Community Tab */}
            {activeTab === "community" && (
              <div className="space-y-4">
                {communityContent.map((content) => (
                  <div
                    key={content.id}
                    className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-4 rounded-lg ${
                          content.type === "course"
                            ? "bg-blue-600"
                            : content.type === "webinar"
                            ? "bg-purple-600"
                            : "bg-green-600"
                        }`}
                      >
                        {content.type === "course" && (
                          <FaGraduationCap className="text-white text-2xl" />
                        )}
                        {content.type === "webinar" && (
                          <FaTags className="text-white text-2xl" />
                        )}
                        {content.type === "article" && (
                          <FaNewspaper className="text-white text-2xl" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-white font-bold text-lg">
                            {content.title}
                          </h3>
                          <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs capitalize">
                            {content.type}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm mb-2">
                          {content.description}
                        </p>
                        <div className="flex gap-4 text-sm text-gray-500">
                          {content.duration && (
                            <span>Duration: {content.duration}</span>
                          )}
                          {content.enrolled && (
                            <span>{content.enrolled} enrolled</span>
                          )}
                          {content.date && <span>Date: {content.date}</span>}
                          {content.readTime && (
                            <span>{content.readTime} read</span>
                          )}
                          {content.views && <span>{content.views} views</span>}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition flex items-center gap-2">
                          <FaEdit />
                          Edit
                        </button>
                        <button className="p-2 text-red-400 hover:bg-gray-800 rounded transition">
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Content Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <FaBox className="text-blue-400 text-3xl mb-3" />
            <div className="text-3xl font-bold text-white mb-1">
              {packages.length}
            </div>
            <div className="text-gray-400 text-sm">Active Packages</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <FaTags className="text-purple-400 text-3xl mb-3" />
            <div className="text-3xl font-bold text-white mb-1">
              {services.length}
            </div>
            <div className="text-gray-400 text-sm">Services Listed</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <FaGraduationCap className="text-green-400 text-3xl mb-3" />
            <div className="text-3xl font-bold text-white mb-1">
              {communityContent.length}
            </div>
            <div className="text-gray-400 text-sm">Community Items</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <FaNewspaper className="text-orange-400 text-3xl mb-3" />
            <div className="text-3xl font-bold text-white mb-1">1.2K</div>
            <div className="text-gray-400 text-sm">Total Views</div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AdminContent;
