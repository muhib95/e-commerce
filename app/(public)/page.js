"use client"
import Image from "next/image";
import { useAuth } from "../context/AuthContext";




export default function Home() {
  const auth=useAuth();
  console.log(auth);
  return (
   <div>
    Home
   </div>
  );
}
