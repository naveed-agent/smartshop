
'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AdminUser {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface AdminContextType {
  admin: AdminUser | null;
  adminLogin: (email: string, password: string) => boolean;
  adminLogout: () => void;
  isAdminAuthenticated: boolean;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

// Default admin credentials
const ADMIN_CREDENTIALS = {
  email: 'admin@smartshop.com',
  password: 'admin123',
  name: 'Admin User',
  role: 'Super Admin'
};

export function AdminProvider({ children }: { children: ReactNode }) {
  const [admin, setAdmin] = useState<AdminUser | null>(null);

  useEffect(() => {
    // Check if admin is logged in from localStorage
    const savedAdmin = localStorage.getItem('admin');
    if (savedAdmin) {
      setAdmin(JSON.parse(savedAdmin));
    }
  }, []);

  const adminLogin = (email: string, password: string) => {
    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      const adminUser = {
        id: 1,
        name: ADMIN_CREDENTIALS.name,
        email: ADMIN_CREDENTIALS.email,
        role: ADMIN_CREDENTIALS.role
      };
      setAdmin(adminUser);
      localStorage.setItem('admin', JSON.stringify(adminUser));
      return true;
    }
    return false;
  };

  const adminLogout = () => {
    setAdmin(null);
    localStorage.removeItem('admin');
  };

  return (
    <AdminContext.Provider value={{
      admin,
      adminLogin,
      adminLogout,
      isAdminAuthenticated: !!admin
    }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}