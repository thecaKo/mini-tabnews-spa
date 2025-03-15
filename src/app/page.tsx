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

  return (
    <div className="min-h-screen bg-white">
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <PostDescription
            key={post.id}
            title={post.title}
            index={(index + 1).toString()}
            author={post.user?.name || "Autor desconhecido"}
            commentsLength={(post.Comment?.length || 0).toString()}
            timeAgo={new Date(post.created_at).toLocaleString("pt-BR", {
              day: "numeric",
              month: "long",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
            })}
          />
        ))
      ) : (
        <div>No posts available</div>
      )}
    </div>
  );
}
