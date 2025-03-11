"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { formatDistanceToNow } from "date-fns";

export default function Profile() {
  const [userData, setUserData] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("profile");
  const [error, setError] = useState<string | null>(null);

  const { user } = useParams();

  useEffect(() => {
    if (user) {
      const fetchUserData = async () => {
        try {
          const response = await fetch(`http://localhost:3333/users/${user}`);
          if (!response.ok) {
            throw new Error("User not found");
          }
          const data = await response.json();
          setUserData(data);
        } catch (err) {
          setError("Failed to fetch user data");
          console.error(err);
        }
      };

      fetchUserData();
    }
  }, [user]);

  if (error) {
    return <div className="text-center text-red-500 font-bold">{error}</div>;
  }

  if (!userData) {
    return <div className="text-center text-black font-bold">Loading...</div>;
  }

  const { name, email, coins, created_at, role, Post, Comment } = userData.user.user;

  return (
    <div className="min-h-screen font-bold text-black py-8 px-6">
      <div className="max-w-4xl mx-auto font-bold p-6 rounded-xl">
        <h1 className="text-4xl font-bold text-left mb-4">{name}</h1>
        <div className="mb-6 border-b border-gray-700 flex space-x-4 text-yellow">
          {[
            { key: "profile", label: "Perfil" },
            { key: "posts", label: `Publicações (${Post.length})` },
            { key: "comments", label: `Comentários (${Comment.length})` },
          ].map((tab) => (
            <button
              key={tab.key}
              className={`py-2 px-4 font-bold ${
                activeTab === tab.key ? " border-b-2 border-green-400" : "text-black hover:text-green-700"
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "profile" && (
          <div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { label: "Email", value: email },
                { label: "Moedas", value: coins },
                { label: "Role", value: role },
              ].map((item, index) => (
                <div key={index}>
                  <p className="text-black font-bold">{item.label}:</p>
                  <p className="text-gray-600 italic font-bold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "posts" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Conteúdos ({Post.length})</h2>
            <div className="space-y-4">
              {Post.length === 0 ? (
                <p className="text-gray-600 font-bold italic">Este usuário não publicou nenhum conteúdo.</p>
              ) : (
                Post.map((post: any, index: number) => (
                  <div key={index} className=" p-4 rounded-lg border-2 border:black">
                    <p className="text-black font-bold">{post.title}</p>
                    <p className="text-gray-600 font-bold italic"> {post.content}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {activeTab === "comments" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Comentários ({Comment.length})</h2>
            <div className="space-y-4">
              {Comment.length === 0 ? (
                <p className="text-gray-600 italic font-bold">Este usuário não possui nenhum comentário.</p>
              ) : (
                Comment.map((comment: any, index: number) => {
                  return (
                    <div key={index} className=" p-4 rounded-lg border-2 border:black">
                      <p className="text-gray-600 font-bold italic">{comment.content}</p>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
