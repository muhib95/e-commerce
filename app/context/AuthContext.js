"use client"
import React, { createContext, useContext, useState } from 'react';

// Create the Auth Context
const AuthContext = createContext();

// Auth Provider Component
export const AuthProvider = ({ children }) => {
    const [auth,setAuth]=useState(true);
    const authData={
        auth,
        setAuth,

    };
    
    return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>;
};

// Hook to use the Auth Context
export const useAuth = () => useContext(AuthContext);
