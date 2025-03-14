"use client";
import { useState, useEffect, useRef } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch("http://localhost:3333/me", {
          method: "GET",
          credentials: "include",
        });

        const data = await response.json();
        setUser(data.user);
      } catch (error) {
        console.error("Erro ao buscar perfil:", error);
      }
    };

    fetchUserProfile();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:3333/logout", {
        method: "POST",
        credentials: "include",
      });
      setUser(null);
      router.push("/login");
    } catch (error) {
      console.error("Erro ao deslogar:", error);
    }
  };
  const handleSearch = (e: any) => {
    e.preventDefault();
    if (searchQuery) {
      window.location.href = `/users/${searchQuery}`;
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
            <form onSubmit={handleSearch}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar..."
                className="bg-gray-700 text-white text-sm px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition hover:bg-gray-600"
              />
            </form>
          </div>

          {user ? (
            <div className="relative flex items-center" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center aspace-x-2 px-4 py-2 text-sm font-bold bg-gray-700 text-white rounded-md hover:bg-gray-600"
              >
                <span>{user.name}</span>
              </button>
              {isDropdownOpen && (
                <div className="absolute left-20 mt-18 w-48 bg-gray-700 text-white rounded-md shadow-lg">
                  <a href="/posts/publicar" className="block px-4 py-2 text-sm hover:bg-gray-600">
                    Publicar Conteúdo
                  </a>
                  <a href={`/users/${user.name}`} className="block px-4 py-2 text-sm hover:bg-gray-600">
                    Perfil
                  </a>
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-600">
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <a href="/cadastro" className="px-4 py-2 text-sm font-bold bg-gray-700 text-white rounded-md hover:bg-gray-600">
                Cadastrar
              </a>
              <a href="/login" className="px-4 py-2 text-sm font-bold bg-gray-700 text-white rounded-md hover:bg-gray-600">
                Login
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
