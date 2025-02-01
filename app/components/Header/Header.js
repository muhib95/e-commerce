"use client"
import { useAuth } from '@/app/context/AuthContext';
import React from 'react';

const Header = () => {
    const auth=useAuth();
      console.log(auth);
    return (
        <div>
            Public Header
        </div>
    );
};

export default Header;