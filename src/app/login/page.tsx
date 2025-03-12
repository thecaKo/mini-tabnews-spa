"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const validateForm = () => {
    if (!email.includes("@")) {
      setError("O e-mail deve conter '@'");
      return false;
    }
    if (password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres");
      return false;
    }
    setError("");
    return true;
  };

  async function handleLogin(e: any) {
    e.preventDefault();

    if (!validateForm()) return;

    const user = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:3333/sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
        credentials: "include",
      });

      if (response.ok) {
        window.location.reload(); // Corrigido para chamar a função corretamente
        router.push("/");
      } else {
        setError("Credenciais inválidas. Tente novamente.");
      }
    } catch (err) {
      setError("Erro ao conectar com o servidor. Tente novamente.");
    }
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center justify-center py-20 p-6 w-full max-w-3xl">
        <div className="flex flex-col items-center justify-center w-full space-y-6">
          <div className="flex justify-start w-full max-w-2xl ml-5">
            <h1 className="text-3xl font-bold text-gray-900">Login</h1>
          </div>
          <form onSubmit={handleLogin} className="w-full bg-white p-8 rounded-lg py-2">
            <label htmlFor="email" className="block font-semibold text-xl font-medium text-gray-800 ml-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu e-mail"
              className="w-full p-2 px-5 h-10 bg-gray-100 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 mb-6"
              required
            />

            <label htmlFor="password" className="block font-semibold text-xl font-medium text-gray-800 ml-1">
              Senha
            </label>
            <input
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              className="w-full p-2 px-5 h-10 bg-gray-100 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 mb-6"
              required
            />

            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

            <div className="flex justify-end space-x-6 mt-6">
              <button
                type="submit"
                className="px-8 py-3 font-bold bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
              >
                Logar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
