import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Coba mengambil data user dari local storage saat komponen dimuat
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedIsAuthenticated = localStorage.getItem('isAuthenticated');

    if (storedUser && storedIsAuthenticated) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(JSON.parse(storedIsAuthenticated));
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);

    // Simpan data user ke local storage saat login
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('isAuthenticated', JSON.stringify(true));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);

    // Hapus data user dari local storage saat logout
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;