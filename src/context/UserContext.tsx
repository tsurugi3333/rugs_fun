// src/context/UserContext.tsx
'use client';

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types/user';

interface UserContextType {
  currentUser: User | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (username: string, email: string, password: string) => Promise<boolean>;
  userLevel: number;
  experience: number;
  crates: number;
  isLoggedIn: boolean;
}

const defaultContext: UserContextType = {
  currentUser: null,
  isAuthenticated: false,
  login: async () => false,
  logout: () => {},
  register: async () => false,
  userLevel: 2,
  experience: 67,  // Example progress percentage
  crates: 4,
  isLoggedIn: true, // For demo purposes
};

export const UserContext = createContext<UserContextType>(defaultContext);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const userLevel  =2;
  const experience = 67; // Example progress percentage
  const crates = 4;
  const isLoggedIn = true // For demo purposes
  
  // Initialize with demo user for preview
  useEffect(() => {
    const demoUser: User = {
      id: 'demo-user',
      username: 'tsurugi3333',
      email: 'demo@example.com',
      avatar: '👑',
      level: 2,
      experience: 67,
      balance: 0.123,
      tier: 2,
      joinedAt: new Date().toISOString(),
    };
    
    setCurrentUser(demoUser);
    setIsAuthenticated(true);
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    // Mock login functionality
    if (username && password) {
      const user: User = {
        id: 'user-1',
        username,
        email: `${username}@example.com`,
        avatar: '👑',
        level: 2,
        experience: 67,
        balance: 0.123,
        tier: 2,
        joinedAt: new Date().toISOString(),
      };
      
      setCurrentUser(user);
      setIsAuthenticated(true);
      
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
  };

  const register = async (username: string, email: string, password: string): Promise<boolean> => {
    // Mock registration
    if (username && email && password) {
      const user: User = {
        id: `user-${Date.now()}`,
        username,
        email,
        avatar: '👤',
        level: 1,
        experience: 0,
        balance: 0,
        tier: 1,
        joinedAt: new Date().toISOString(),
      };
      
      setCurrentUser(user);
      setIsAuthenticated(true);
      
      return true;
    }
    
    return false;
  };

  return (
    <UserContext.Provider value={{
      currentUser,
      isAuthenticated,
      login,
      logout,
      register,
      userLevel,
      experience,
      crates,
      isLoggedIn,
    }}>
      {children}
    </UserContext.Provider>
  );
};