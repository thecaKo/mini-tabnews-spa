"use client";

import { useEffect, useState } from "react";
import PostDescription from "./components/post-description";

export default function Home() {
  const [posts, setPosts] = useState<any[]>([]); // Armazenar os posts
  const [error, setError] = useState<string | null>(null); // Armazenar erro

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:3333/posts");
        if (!response.ok) {
          throw new Error("Failed to fetch the API");
        }
        const data = await response.json();
        setPosts(data.posts); // Atualiza o estado com os posts da API
      } catch (err) {
        setError("Failed to fetch the API");
        console.error(err);
      }
    };

    fetchUserData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  console.log(posts);

  return (
    <div className="min-h-screen bg-white">
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <PostDescription
            key={post.id} // Usando o id como chave única
            title={post.title} // Título do post
            index={(index + 1).toString()} // Usando o índice do array mais 1
            author={post.user?.name || "Autor desconhecido"} // Usando o nome do autor ou valor padrão
            commentsLength={(post.Comment?.length || 0).toString()} // Protegendo contra valores indefinidos
            timeAgo={new Date(post.created_at).toLocaleString("pt-BR", {
              day: "numeric",
              month: "long",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
            })}
          />
        ))
      ) : (
        <div>No posts available</div>
      )}
    </div>
  );
}
