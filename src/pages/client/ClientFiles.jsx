import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import {
  FaFile,
  FaFilePdf,
  FaFileImage,
  FaFileVideo,
  FaFileArchive,
  FaUpload,
  FaDownload,
  FaTrash,
  FaFolder,
  FaSearch,
} from "react-icons/fa";

function ClientFiles() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFolder, setSelectedFolder] = useState("All Files");

  const folders = [
    { name: "All Files", count: 24 },
    { name: "Brand Materials", count: 8 },
    { name: "Deliverables", count: 12 },
    { name: "Documents", count: 4 },
  ];

  const files = [
    {
      id: 1,
      name: "Website-Mockup-v3.pdf",
      type: "pdf",
      size: "2.4 MB",
      date: "2025-10-08",
      folder: "Deliverables",
    },
    {
      id: 2,
      name: "Logo-Final.png",
      type: "image",
      size: "856 KB",
      date: "2025-10-07",
      folder: "Brand Materials",
    },
    {
      id: 3,
      name: "Brand-Guidelines.pdf",
      type: "pdf",
      size: "5.2 MB",
      date: "2025-10-05",
      folder: "Brand Materials",
    },
    {
      id: 4,
      name: "Promo-Video.mp4",
      type: "video",
      size: "45 MB",
      date: "2025-10-03",
      folder: "Deliverables",
    },
    {
      id: 5,
      name: "Assets-Package.zip",
      type: "archive",
      size: "12 MB",
      date: "2025-10-01",
      folder: "Deliverables",
    },
    {
      id: 6,
      name: "Contract.pdf",
      type: "pdf",
      size: "340 KB",
      date: "2025-09-28",
      folder: "Documents",
    },
    {
      id: 7,
      name: "Product-Photos.zip",
      type: "archive",
      size: "8.5 MB",
      date: "2025-09-25",
      folder: "Brand Materials",
    },
    {
      id: 8,
      name: "Social-Media-Templates.pdf",
      type: "pdf",
      size: "3.1 MB",
      date: "2025-09-20",
      folder: "Deliverables",
    },
  ];

  const getFileIcon = (type) => {
    switch (type) {
      case "pdf":
        return <FaFilePdf className="text-red-500 text-3xl" />;
      case "image":
        return <FaFileImage className="text-blue-500 text-3xl" />;
      case "video":
        return <FaFileVideo className="text-purple-500 text-3xl" />;
      case "archive":
        return <FaFileArchive className="text-yellow-500 text-3xl" />;
      default:
        return <FaFile className="text-gray-500 text-3xl" />;
    }
  };

  const filteredFiles = files.filter((file) => {
    const matchesSearch = file.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFolder =
      selectedFolder === "All Files" || file.folder === selectedFolder;
    return matchesSearch && matchesFolder;
  });

  return (
    <DashboardLayout type="client">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">File Management</h1>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition flex items-center gap-2">
            <FaUpload />
            Upload Files
          </button>
        </div>

        {/* Storage Info */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-white font-semibold text-lg">
                Storage Usage
              </h3>
              <p className="text-gray-400 text-sm">76.5 GB of 100 GB used</p>
            </div>
            <div className="text-right">
              <span className="text-3xl font-bold text-white">76.5%</span>
            </div>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full"
              style={{ width: "76.5%" }}
            ></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Folders Sidebar */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h2 className="text-white font-bold mb-4">Folders</h2>
            <div className="space-y-2">
              {folders.map((folder) => (
                <button
                  key={folder.name}
                  onClick={() => setSelectedFolder(folder.name)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition ${
                    selectedFolder === folder.name
                      ? "bg-purple-600 text-white"
                      : "bg-gray-900 text-gray-400 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <FaFolder />
                    <span>{folder.name}</span>
                  </div>
                  <span className="text-sm">{folder.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Files List */}
          <div className="lg:col-span-3 space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search files..."
                className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Files Grid */}
            <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-900 border-b border-gray-700">
                    <tr>
                      <th className="text-left px-6 py-4 text-gray-400 font-semibold">
                        Name
                      </th>
                      <th className="text-left px-6 py-4 text-gray-400 font-semibold">
                        Size
                      </th>
                      <th className="text-left px-6 py-4 text-gray-400 font-semibold">
                        Date
                      </th>
                      <th className="text-left px-6 py-4 text-gray-400 font-semibold">
                        Folder
                      </th>
                      <th className="text-right px-6 py-4 text-gray-400 font-semibold">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredFiles.map((file) => (
                      <tr
                        key={file.id}
                        className="border-b border-gray-700 hover:bg-gray-750 transition"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            {getFileIcon(file.type)}
                            <span className="text-white">{file.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-400">{file.size}</td>
                        <td className="px-6 py-4 text-gray-400">{file.date}</td>
                        <td className="px-6 py-4">
                          <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs">
                            {file.folder}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-2">
                            <button className="p-2 text-blue-400 hover:bg-gray-700 rounded transition">
                              <FaDownload />
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
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center">
            <FaUpload className="text-purple-500 text-4xl mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Upload Files</h3>
            <p className="text-gray-400 text-sm mb-4">
              Share documents with your team
            </p>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
              Upload
            </button>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center">
            <FaFolder className="text-blue-500 text-4xl mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Create Folder</h3>
            <p className="text-gray-400 text-sm mb-4">
              Organize your files better
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              New Folder
            </button>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center">
            <FaDownload className="text-green-500 text-4xl mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Download All</h3>
            <p className="text-gray-400 text-sm mb-4">Get all files as ZIP</p>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
              Download
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ClientFiles;
