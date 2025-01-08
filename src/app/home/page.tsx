"use client";
import React from "react";
import useLocalStorage from "@/utils/hooks/useLocalStorage";


export default function HomePage() {
  const [username] = useLocalStorage<string>("username", "");

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Bem-vindo, {username}!</h1>
    </div>
  );
}
