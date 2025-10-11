import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Simulated login
    if (password !== "123456") {
      return { success: false, message: "Invalid password" };
    }

    let userData = null;
    if (email === "client@gmail.com") {
      userData = {
        email,
        name: "John Client",
        role: "client",
        avatar:
          "https://ui-avatars.com/api/?name=John+Client&background=DC1F2E&color=fff",
      };
    } else if (email === "admin@gmail.com") {
      userData = {
        email,
        name: "Admin User",
        role: "admin",
        avatar:
          "https://ui-avatars.com/api/?name=Admin+User&background=4F46E5&color=fff",
      };
    } else {
      return { success: false, message: "User not found" };
    }

    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
