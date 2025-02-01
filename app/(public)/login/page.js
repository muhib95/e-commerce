"use client"
import React from 'react';

const LogIn = () => {
    const { searchParams } = new URL(window.location.href);
    const redirectPath = searchParams.get('redirect') || '/dashboard';
    console.log(redirectPath);

    return (
        <div>
            login
        </div>
    );
};

export default LogIn;