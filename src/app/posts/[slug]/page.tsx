"use client";

import PostPageComponent from "@/app/components/post-page-component";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PostsPage() {
  const [postData, setPostData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      const fetchPostData = async () => {
        try {
          const response = await fetch(`http://localhost:3333/posts/slug/${slug}`);
          if (!response.ok) {
            throw new Error("Post not found");
          }
          const data = await response.json();
          setPostData(data);
        } catch (err) {
          setError("Failed to fetch post data");
          console.error(err);
        }
      };

      fetchPostData();
    }
  }, [slug]);

  if (error) {
    return <p className="text-red-500">Erro: {error}</p>;
  }

  if (!postData) {
    return <p>Carregando...</p>;
  }

  const { id, title, content, up_votes, created_at, updated_at, owner_id, Comment, user } = postData.post;

  return (
    <div>
      <PostPageComponent
        author={user.name || "Desconhecido"}
        title={title || "Sem título"}
        content={content || "Sem conteúdo"}
        upvotes={up_votes?.toString() || "0"}
        timeAgo={new Date(created_at).toLocaleString("pt-BR", {
          day: "2-digit",
          month: "short",
          year: "2-digit",
          hour: "numeric",
          minute: "numeric",
        })}
      />
    </div>
  );
}
