"use client";
import { useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <header className="bg-gray-800 text-white dark:bg-gray-900 py-3">
      <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-bold">MiniTabNews</div>
        <nav className="flex-grow flex justify-items-start space-x-6 px-8">
          <a href="/" className="hover:text-gray-400">
            Relevantes
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="text-gray-300 hover:text-yellow-400 p-2">
            {darkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
          </button>
          <div className="relative flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar..."
              className="bg-gray-700 text-white text-sm px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition hover:bg-gray-600"
            />
            <button className="ml-2 px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400" hidden>
              Buscar
            </button>
          </div>

          <>
            <a href="/cadastro" className="px-4 py-2 text-sm font-bold bg-gray-700 text-white rounded-md hover:bg-gray-600">
              Cadastrar
            </a>
            <a href="/login" className="px-4 py-2 text-sm font-bold bg-gray-700 text-white rounded-md hover:bg-gray-600">
              Login
            </a>
          </>
        </div>
      </div>
    </header>
  );
}
