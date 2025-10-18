import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { FaEnvelope, FaLock, FaUser, FaShieldAlt } from "react-icons/fa";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login, user } = useAuth();

  useEffect(() => {
    if (user) {
      const redirectPath = 
        user.role === "admin" ? "/admin/dashboard" :
        user.role === "freelancer" ? "/freelancer/dashboard" :
        "/client/dashboard";
      navigate(redirectPath);
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = login(email, password);

    if (result.success) {
      const redirectPath = 
        email === "admin@gmail.com" ? "/admin/dashboard" :
        email === "freelancer@gmail.com" ? "/freelancer/dashboard" :
        "/client/dashboard";
      navigate(redirectPath);
    } else {
      setError(result.message);
    }

    setLoading(false);
  };

  const quickLogin = (type) => {
    if (type === "client") {
      setEmail("client@gmail.com");
      setPassword("123456");
    } else if (type === "admin") {
      setEmail("admin@gmail.com");
      setPassword("123456");
    } else if (type === "freelancer") {
      setEmail("freelancer@gmail.com");
      setPassword("123456");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-gray-400">Login to access your dashboard</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-center text-gray-400 text-sm mb-4">
              Quick Login (Demo)
            </p>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => quickLogin("client")}
                className="flex items-center justify-center gap-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 py-3 rounded-lg transition border border-blue-500/30"
              >
                <FaUser />
                <span className="text-sm">Client</span>
              </button>
              <button
                onClick={() => quickLogin("admin")}
                className="flex items-center justify-center gap-2 bg-purple-600/20 hover:bg-purple-600/30 text-purple-400 py-3 rounded-lg transition border border-purple-500/30"
              >
                <FaShieldAlt />
                <span className="text-sm">Admin</span>
              </button>
              <button
                onClick={() => quickLogin("freelancer")}
                className="flex items-center justify-center gap-2 bg-green-600/20 hover:bg-green-600/30 text-green-400 py-3 rounded-lg transition border border-green-500/30"
              >
                <FaUser />
                <span className="text-sm">Freelancer</span>
              </button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate("/")}
              className="text-gray-400 hover:text-white transition text-sm"
            >
              ← Back to Home
            </button>
          </div>
        </div>

        <div className="mt-6 text-center text-gray-500 text-sm">
          <p>Demo Credentials:</p>
          <p>Client: client@gmail.com / 123456</p>
          <p>Admin: admin@gmail.com / 123456</p>
          <p>Freelancer: freelancer@gmail.com / 123456</p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
