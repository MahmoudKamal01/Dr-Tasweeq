import DashboardLayout from "../../components/DashboardLayout";
import { communityContent } from "../../data/dummyData";
import {
  FaBook,
  FaVideo,
  FaNewspaper,
  FaGraduationCap,
  FaUsers,
  FaClock,
  FaPlay,
  FaCalendar,
} from "react-icons/fa";

function ClientCommunity() {
  const courses = communityContent.filter((c) => c.type === "course");
  const webinars = communityContent.filter((c) => c.type === "webinar");
  const articles = communityContent.filter((c) => c.type === "article");

  return (
    <DashboardLayout type="client">
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white">
          <h1 className="text-4xl font-bold mb-3">Marketing Community Hub</h1>
          <p className="text-purple-100 text-lg">
            Access exclusive content, courses, and resources to grow your
            business
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              icon: FaGraduationCap,
              label: "Courses Enrolled",
              value: "3",
              color: "bg-blue-600",
            },
            {
              icon: FaVideo,
              label: "Webinars Attended",
              value: "8",
              color: "bg-purple-600",
            },
            {
              icon: FaBook,
              label: "Articles Read",
              value: "24",
              color: "bg-green-600",
            },
            {
              icon: FaUsers,
              label: "Community Members",
              value: "1.2K",
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
                  className={`${stat.color} p-3 rounded-lg inline-block mb-4`}
                >
                  <Icon className="text-white text-2xl" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Courses Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <FaGraduationCap className="text-blue-400" />
              Available Courses
            </h2>
            <button className="text-purple-400 hover:text-purple-300 transition">
              View All →
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden hover:border-purple-500 transition group"
              >
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6">
                  <FaGraduationCap className="text-white text-4xl mb-3 opacity-80" />
                  <h3 className="text-white font-bold text-lg">
                    {course.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-400 mb-4">{course.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <FaClock />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaUsers />
                      <span>{course.enrolled} enrolled</span>
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold flex items-center justify-center gap-2">
                    <FaPlay />
                    Start Learning
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Webinars Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <FaVideo className="text-purple-400" />
              Upcoming Webinars
            </h2>
            <button className="text-purple-400 hover:text-purple-300 transition">
              View Calendar →
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {webinars.map((webinar) => (
              <div
                key={webinar.id}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition"
              >
                <div className="flex gap-4">
                  <div className="bg-purple-600 rounded-lg p-4 flex items-center justify-center">
                    <FaVideo className="text-white text-3xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">
                      {webinar.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      {webinar.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <div className="flex items-center gap-2">
                        <FaCalendar />
                        <span>{webinar.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaUsers />
                        <span>{webinar.attendees} attending</span>
                      </div>
                    </div>
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition font-semibold">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Articles Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <FaNewspaper className="text-green-400" />
              Latest Articles
            </h2>
            <button className="text-purple-400 hover:text-purple-300 transition">
              View All →
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-500 transition group cursor-pointer"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-green-600 p-3 rounded-lg">
                    <FaNewspaper className="text-white text-xl" />
                  </div>
                  <div className="text-xs text-gray-400 flex gap-3">
                    <span>{article.readTime} read</span>
                    <span>{article.views} views</span>
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-green-400 transition">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {article.description}
                </p>
                <button className="text-green-400 hover:text-green-300 transition font-semibold text-sm">
                  Read Article →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Q&A Section */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Community Q&A</h2>
          <div className="space-y-4">
            {[
              {
                question: "How can I improve my social media engagement?",
                answers: 12,
                author: "Marketing Pro",
              },
              {
                question: "Best tools for email marketing automation?",
                answers: 8,
                author: "Digital Expert",
              },
              {
                question: "SEO tips for small businesses?",
                answers: 15,
                author: "SEO Master",
              },
            ].map((qa, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-4 border border-gray-700 hover:border-purple-500 transition cursor-pointer"
              >
                <h4 className="text-white font-semibold mb-2">{qa.question}</h4>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>Asked by {qa.author}</span>
                  <span>•</span>
                  <span>{qa.answers} answers</span>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition font-semibold">
            Ask a Question
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ClientCommunity;
