"use client"
import React, { createContext, useContext } from 'react';

// Create the Auth Context
const AuthContext = createContext();

// Auth Provider Component
export const AuthProvider = ({ children }) => {
    let auth=true;
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

// Hook to use the Auth Context
export const useAuth = () => useContext(AuthContext);
