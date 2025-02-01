import React from "react";
import Header from "../components/Header/Header";
import { AuthProvider } from "../context/AuthContext";
import ProtectedRoute from "../components/protectedRoute/ProtectedRoute";

const PublicLayout = ({ children }) => {
  return (
    <AuthProvider >
        <ProtectedRoute>
           <div className="min-h-screen">
        <div>
          <Header></Header>
        </div>
        <main>{children}</main>
      </div>   
        </ProtectedRoute>
          
        
      
    </AuthProvider>
  );
};

export default PublicLayout;
