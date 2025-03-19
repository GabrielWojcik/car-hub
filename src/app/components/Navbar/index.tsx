"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Ícones do Lucide

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false); // Estado do menu

  return (
    <nav className="bg-[#222222] text-white fixed w-full p-4 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <p className="text-5xl cursor-pointer">
          CAR <span className="text-[#00AAFF]">GW</span>
        </p>

        {/* Ícone do Menu (Visível apenas no Mobile) */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={36} /> : <Menu size={36} />}
        </button>

        {/* Menu Desktop */}
        <ul className="hidden md:flex items-center gap-6 text-3xl cursor-pointer">
          <li>Home</li>
          <li>Carros</li>
          <li>Sobre</li>
        </ul>

        {/* Login / Cadastro (Desktop) */}
        <div className="hidden md:flex p-2 items-center text-2xl bg-[#00AAFF] rounded-lg cursor-pointer">
          <span>Login</span>
          <span> / </span>
          <span>Cadastrar</span>
        </div>
      </div>

      {/* Menu Mobile (Abre ao clicar no hamburger) */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#222222] text-white p-4 flex flex-col items-center gap-6">
          <ul className="flex flex-col text-2xl items-center gap-4">
            <li>Home</li>
            <li>Carros</li>
            <li>Sobre</li>
          </ul>
          <div className="p-2 text-2xl bg-[#00AAFF] rounded-lg cursor-pointer">
            <span>Login</span>
            <span> / </span>
            <span>Cadastrar</span>
          </div>
        </div>
      )}
    </nav>
  );
}
