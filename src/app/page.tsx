import PostDescription from "./components/post-description";

export default async function Home() {
  return (
    <div className="min-h-screen bg-white">
      <PostDescription index="1" author="Carlos" commentsLength="15" timeAgo="2 horas atrás" />
      <PostDescription index="2" author="Carlos12" commentsLength="15" timeAgo="2 horas atrás" />
      <PostDescription index="3" author="Carlos" commentsLength="15" timeAgo="2 horas atrás" />
      <PostDescription index="1" author="Carlos" commentsLength="15" timeAgo="2 horas atrás" />
      <PostDescription index="2" author="Carlos12" commentsLength="15" timeAgo="2 horas atrás" />
      <PostDescription index="3" author="Carlos" commentsLength="15" timeAgo="2 horas atrás" />
      <PostDescription index="1" author="Carlos" commentsLength="15" timeAgo="2 horas atrás" />
      <PostDescription index="2" author="Carlos12" commentsLength="15" timeAgo="2 horas atrás" />
      <PostDescription index="3" author="Carlos" commentsLength="15" timeAgo="2 horas atrás" />
      <PostDescription index="1" author="Carlos" commentsLength="15" timeAgo="2 horas atrás" />
      <PostDescription index="2" author="Carlos12" commentsLength="15" timeAgo="2 horas atrás" />
      <PostDescription index="3" author="Carlos" commentsLength="15" timeAgo="2 horas atrás" />
    </div>
  );
}
