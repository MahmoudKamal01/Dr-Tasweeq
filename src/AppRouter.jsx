import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

// Pages
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import ClientDashboard from "./pages/client/ClientDashboard";
import ClientProjects from "./pages/client/ClientProjects";
import ClientFiles from "./pages/client/ClientFiles";
import ClientInvoices from "./pages/client/ClientInvoices";
import ClientCommunity from "./pages/client/ClientCommunity";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminProjects from "./pages/admin/AdminProjects";
import AdminFinance from "./pages/admin/AdminFinance";
import AdminContent from "./pages/admin/AdminContent";
import AdminSettings from "./pages/admin/AdminSettings";
import FreelancerDashboard from "./pages/freelancer/FreelancerDashboard";
import FreelancerTasks from "./pages/freelancer/FreelancerTasks";
import FreelancerChat from "./pages/freelancer/FreelancerChat";
import FreelancerFiles from "./pages/freelancer/FreelancerFiles";
import FreelancerKPIs from "./pages/freelancer/FreelancerKPIs";

// Protected Route Component
function ProtectedRoute({ children, allowedRole }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRole && user.role !== allowedRole) {
    return <Navigate to="/" replace />;
  }

  return children;
}

function AppRouter() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Client Routes */}
          <Route
            path="/client/dashboard"
            element={
              <ProtectedRoute allowedRole="client">
                <ClientDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/client/projects"
            element={
              <ProtectedRoute allowedRole="client">
                <ClientProjects />
              </ProtectedRoute>
            }
          />
          <Route
            path="/client/files"
            element={
              <ProtectedRoute allowedRole="client">
                <ClientFiles />
              </ProtectedRoute>
            }
          />
          <Route
            path="/client/invoices"
            element={
              <ProtectedRoute allowedRole="client">
                <ClientInvoices />
              </ProtectedRoute>
            }
          />
          <Route
            path="/client/community"
            element={
              <ProtectedRoute allowedRole="client">
                <ClientCommunity />
              </ProtectedRoute>
            }
          />

          {/* Admin Routes */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute allowedRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              <ProtectedRoute allowedRole="admin">
                <AdminUsers />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/projects"
            element={
              <ProtectedRoute allowedRole="admin">
                <AdminProjects />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/finance"
            element={
              <ProtectedRoute allowedRole="admin">
                <AdminFinance />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/content"
            element={
              <ProtectedRoute allowedRole="admin">
                <AdminContent />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/settings"
            element={
              <ProtectedRoute allowedRole="admin">
                <AdminSettings />
              </ProtectedRoute>
            }
          />

          {/* Freelancer Routes */}
          <Route
            path="/freelancer/dashboard"
            element={
              <ProtectedRoute allowedRole="freelancer">
                <FreelancerDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/freelancer/tasks"
            element={
              <ProtectedRoute allowedRole="freelancer">
                <FreelancerTasks />
              </ProtectedRoute>
            }
          />
          <Route
            path="/freelancer/chat"
            element={
              <ProtectedRoute allowedRole="freelancer">
                <FreelancerChat />
              </ProtectedRoute>
            }
          />
          <Route
            path="/freelancer/files"
            element={
              <ProtectedRoute allowedRole="freelancer">
                <FreelancerFiles />
              </ProtectedRoute>
            }
          />
          <Route
            path="/freelancer/kpis"
            element={
              <ProtectedRoute allowedRole="freelancer">
                <FreelancerKPIs />
              </ProtectedRoute>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default AppRouter;
