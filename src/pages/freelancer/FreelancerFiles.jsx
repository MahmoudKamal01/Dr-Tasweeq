import { useState } from "react";
import FreelancerLayout from "../../components/FreelancerLayout";
import { freelancerFiles } from "../../data/dummyData";
import {
  FiDownload,
  FiEye,
  FiFolder,
  FiFile,
  FiImage,
  FiFileText,
  FiArchive,
  FiSearch,
  FiUpload,
  FiMoreVertical,
  FiCalendar,
  FiHardDrive,
} from "react-icons/fi";

const FreelancerFiles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const getFileIcon = (type) => {
    switch (type) {
      case "pdf":
        return <FiFileText className="text-red-400" size={20} />;
      case "image":
        return <FiImage className="text-blue-400" size={20} />;
      case "design":
        return <FiFile className="text-purple-400" size={20} />;
      case "archive":
        return <FiArchive className="text-yellow-400" size={20} />;
      default:
        return <FiFile className="text-gray-400" size={20} />;
    }
  };

  const getFileTypeColor = (type) => {
    switch (type) {
      case "pdf":
        return "bg-red-600/20 text-red-400";
      case "image":
        return "bg-blue-600/20 text-blue-400";
      case "design":
        return "bg-purple-600/20 text-purple-400";
      case "archive":
        return "bg-yellow-600/20 text-yellow-400";
      default:
        return "bg-gray-600/20 text-gray-400";
    }
  };

  const filteredFiles = selectedProject
    ? freelancerFiles.filter(project => project.project === selectedProject)
    : freelancerFiles;

  const allFiles = filteredFiles.flatMap(project => 
    project.files.map(file => ({ ...file, project: project.project }))
  );

  const searchResults = allFiles.filter(file =>
    file.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    file.project.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalSize = allFiles.reduce((sum, file) => {
    const size = parseFloat(file.size);
    return sum + size;
  }, 0);

  return (
    <FreelancerLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Files</h1>
            <p className="text-gray-400">Access and manage your project files</p>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
            <FiUpload size={16} />
            <span>Upload Files</span>
          </button>
        </div>

        {/* Storage Info */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Storage Usage</h3>
            <div className="flex items-center space-x-2 text-gray-400">
              <FiHardDrive size={16} />
              <span className="text-sm">{totalSize.toFixed(1)} MB used</span>
            </div>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full"
              style={{ width: `${Math.min((totalSize / 1000) * 100, 100)}%` }}
            />
          </div>
          <div className="flex justify-between text-sm text-gray-400 mt-2">
            <span>0 MB</span>
            <span>1 GB</span>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search files..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
            />
          </div>
          <select
            value={selectedProject || ""}
            onChange={(e) => setSelectedProject(e.target.value || null)}
            className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-500"
          >
            <option value="">All Projects</option>
            {freelancerFiles.map((project) => (
              <option key={project.project} value={project.project}>
                {project.project}
              </option>
            ))}
          </select>
        </div>

        {/* Files by Project */}
        {!searchTerm && (
          <div className="space-y-6">
            {filteredFiles.map((project) => (
              <div key={project.project} className="bg-gray-800 rounded-lg border border-gray-700">
                <div className="p-4 border-b border-gray-700">
                  <div className="flex items-center space-x-3">
                    <FiFolder className="text-blue-400" size={20} />
                    <h3 className="text-lg font-semibold text-white">{project.project}</h3>
                    <span className="text-sm text-gray-400">({project.files.length} files)</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.files.map((file, index) => (
                      <div
                        key={index}
                        className="bg-gray-700/50 rounded-lg p-4 hover:bg-gray-700 transition-colors"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            {getFileIcon(file.type)}
                            <div className="flex-1">
                              <h4 className="font-medium text-white text-sm truncate">{file.name}</h4>
                              <p className="text-gray-400 text-xs">{file.size}</p>
                            </div>
                          </div>
                          <button className="text-gray-400 hover:text-white">
                            <FiMoreVertical size={16} />
                          </button>
                        </div>
                        
                        <div className="flex items-center justify-between mb-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getFileTypeColor(file.type)}`}>
                            {file.type.toUpperCase()}
                          </span>
                          <span className="text-xs text-gray-400 flex items-center">
                            <FiCalendar className="mr-1" size={12} />
                            {new Date(file.uploaded).toLocaleDateString()}
                          </span>
                        </div>

                        <div className="flex space-x-2">
                          <button className="flex-1 bg-gray-600 hover:bg-gray-500 text-white py-2 px-3 rounded-lg text-xs font-medium transition-colors flex items-center justify-center space-x-1">
                            <FiEye size={12} />
                            <span>View</span>
                          </button>
                          <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-3 rounded-lg text-xs font-medium transition-colors flex items-center justify-center space-x-1">
                            <FiDownload size={12} />
                            <span>Download</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Search Results */}
        {searchTerm && (
          <div className="bg-gray-800 rounded-lg border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="text-lg font-semibold text-white">
                Search Results ({searchResults.length} files)
              </h3>
            </div>
            <div className="p-4">
              {searchResults.length > 0 ? (
                <div className="space-y-3">
                  {searchResults.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        {getFileIcon(file.type)}
                        <div>
                          <h4 className="font-medium text-white">{file.name}</h4>
                          <p className="text-gray-400 text-sm">{file.project} • {file.size}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getFileTypeColor(file.type)}`}>
                          {file.type.toUpperCase()}
                        </span>
                        <div className="flex space-x-2">
                          <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-600 rounded-lg transition-colors">
                            <FiEye size={16} />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-600 rounded-lg transition-colors">
                            <FiDownload size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <FiFile className="mx-auto text-gray-400 mb-4" size={48} />
                  <p className="text-gray-400">No files found matching your search</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center space-x-3 p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
              <FiUpload className="text-green-400" size={20} />
              <div className="text-left">
                <p className="font-medium text-white">Upload New Files</p>
                <p className="text-sm text-gray-400">Add files to your projects</p>
              </div>
            </button>
            <button className="flex items-center space-x-3 p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
              <FiFolder className="text-blue-400" size={20} />
              <div className="text-left">
                <p className="font-medium text-white">Create Folder</p>
                <p className="text-sm text-gray-400">Organize your files</p>
              </div>
            </button>
            <button className="flex items-center space-x-3 p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
              <FiDownload className="text-purple-400" size={20} />
              <div className="text-left">
                <p className="font-medium text-white">Download All</p>
                <p className="text-sm text-gray-400">Get all project files</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </FreelancerLayout>
  );
};

export default FreelancerFiles;
