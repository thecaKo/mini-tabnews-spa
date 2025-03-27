import { useState, useEffect } from "react";

interface PostsPageProps {
  postId: string;
  author: string;
  upvotes: string;
  title: string;
  content: string;
  timeAgo: string;
}

interface Comment {
  id: string;
  content: string;
  created_at: string;
  author: {
    name: string;
  };
}

export default function PostsPageComponent({ postId, content, title, upvotes, author, timeAgo }: PostsPageProps) {
  const [comment, setComment] = useState("");
  const [ownerId, setOwnerId] = useState<string | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);

  const fetchComments = async () => {
    try {
      const response = await fetch(`http://localhost:3333/post/${postId}`, {
        method: "GET",
        credentials: "include",
      });

      const data = await response.json();

      setComments(data.post.Comment);
    } catch (error) {
      console.error("Erro ao obter comentários:", error);
    }
  };

  const fetchOwnerId = async () => {
    try {
      const response = await fetch("http://localhost:3333/me", {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Erro ao buscar os dados do usuário");
      }

      const data = await response.json();
      setOwnerId(data.id);
    } catch (error) {
      console.error("Erro ao obter ownerId:", error);
    }
  };

  useEffect(() => {
    fetchOwnerId();
    fetchComments();
  }, []);

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!comment.trim()) return;
    if (!ownerId) {
      console.error("Erro: OwnerId não encontrado");
      return;
    }

    try {
      const response = await fetch(`http://localhost:3333/post/${postId}/create-comment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ownerId,
          postId,
          content: comment,
        }),
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar comentário");
      }

      setComment("");
      fetchComments();
    } catch (error) {
      console.error("Erro ao enviar comentário:", error);
    }
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white p-6 space-y-6">
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <div className="bg-green-200 text-green-800 py-1 px-3 rounded-full text-sm font-semibold">{author}</div>
            <span className="px-4">{timeAgo}</span>
            <p className="text-sm text-gray-500">Upvotes: {upvotes}</p>
          </div>

          <h1 className="text-3xl font-semibold text-gray-900 mb-4">{title}</h1>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">{content}</p>

          <div className="mt-8">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Comentários</h4>

            <form className="mb-4 space-y-4" onSubmit={handleCommentSubmit}>
              <textarea
                placeholder="Adicione um comentário..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-200 transition-all"
                required
              ></textarea>
              <button
                type="submit"
                className="mt-2 px-6 py-2 border border-gray-400 text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-200 transition-all"
              >
                Responder
              </button>
            </form>

            <div className="space-y-4">
              {comments.length > 0 ? (
                comments.map((comment) => (
                  <div key={comment.id} className="bg-white p-4 rounded-md border-1">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <div className="bg-blue-200 text-blue-800 py-1 px-3 rounded-full text-sm font-semibold">{comment.id}</div>
                      <span className="px-4">
                        {new Date(comment.created_at).toLocaleString("pt-BR", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                          hour: "numeric",
                          minute: "numeric",
                        })}
                      </span>
                    </div>
                    <p className="text-lg text-gray-700 break-words">{comment.content}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 italic">Nenhum comentário ainda.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
