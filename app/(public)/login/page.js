"use client"
import { useAuth } from '@/app/context/AuthContext';
import { useRouter } from 'next/navigation';

import React, { useEffect, useState } from 'react';

const LogIn = () => {
    const router = useRouter();
    const  {auth,setAuth}  = useAuth();
    const [redirectPath, setRedirectPath] = useState('/');  // Default redirect path

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // We are on the client-side now, it's safe to use window
            const url = new URL(window.location.href);
            const searchParams = url.searchParams;
            const redirect = searchParams.get('redirect');
            
            if (redirect) {
                setRedirectPath(redirect);
            }
        }
    }, []);
    console.log(redirectPath);
    const login=()=>{
        setAuth(!auth)
       

    }
    useEffect(() => {
        if (auth) {
            // After successful login, redirect to the original page
            router.push(redirectPath);
        }
    }, [auth, redirectPath, router]);

    return (
        <div>
            login
            <button onClick={()=>login()}>Login</button>
        </div>
    );
};

export default LogIn;