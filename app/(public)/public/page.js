"use client"
import { useAuth } from '@/app/context/AuthContext';
import React from 'react';

const Public = () => {
     const auth=useAuth();
      console.log(auth);
    return (
        <div>
            Public
        </div>
    );
};

export default Public;