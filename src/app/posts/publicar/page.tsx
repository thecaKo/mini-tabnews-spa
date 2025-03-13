"use client";
import { useState } from "react";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [source, setSource] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3333/post/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
        }),
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Erro ao criar o post");
      }

      const data = await response.json();
    } catch (error) {}
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center justify-center py-20 p-6 w-full max-w-7xl">
        <div className="flex flex-col items-center justify-center w-full space-y-6">
          <div className="flex justify-start w-full max-w-6xl mr-2">
            <h1 className="text-3xl font-bold text-gray-900">Publicar novo conteúdo</h1>
          </div>
          <form className="w-full bg-white p-8 rounded-lg py-2" onSubmit={handleSubmit}>
            <label htmlFor="title" className="block font-semibold text-xl font-medium text-gray-800 ml-1">
              Título*
            </label>
            <textarea
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="pense num título legal"
              className="w-full p-2 px-5 h-10 bg-gray-100 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 mb-6"
              required
            ></textarea>

            <div className="space-y-6">
              <div>
                <label htmlFor="content" className="block font-semibold text-xl font-medium text-gray-800 ml-1">
                  Corpo*
                </label>
                <textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full p-6 h-100 bg-gray-100 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                ></textarea>
              </div>

              <div>
                <label htmlFor="source" className="block font-semibold text-xl font-medium text-gray-800 ml-1">
                  Fonte*
                </label>
                <textarea
                  id="source"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                  placeholder="fonte@dahora.com"
                  className="w-full p-2 px-5 h-10 bg-gray-100 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                ></textarea>
              </div>

              <div className="text-lg text-gray-600 ml-1">
                Campos marcados com um asterisco (*) são <strong>obrigatórios</strong>.
              </div>

              <div className="flex justify-end space-x-6 mt-6">
                <button
                  type="button"
                  className="px-8 py-3 font-bold text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="px-8 py-3 font-bold bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                >
                  Publicar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
