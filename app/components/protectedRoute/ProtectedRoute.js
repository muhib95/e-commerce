// components/ProtectedRoute.js
"use client";

import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
    // List of routes that do not require authentication
const publicRoutes = ['/login', '/signup', '/', '/about','/product'];
    const  {auth}  = useAuth();
    const router = useRouter();
    const currentPath = window.location.pathname;

    // Check if the current path is public
    const isPublicRoute = publicRoutes.includes(currentPath);
console.log(auth);
    useEffect(() => {
        if (!auth && !isPublicRoute) {
            // Redirect to login if not authenticated
            router.push(`/login?redirect=${encodeURIComponent(currentPath)}`);
        }
    }, [auth, router]);

    // if (!auth) {
    //     // Optionally, display a loader while redirecting
    //     return <p>Redirecting to login...</p>;
    // }

    return <>{children}</>;
}
