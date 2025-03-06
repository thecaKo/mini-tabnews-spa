interface PostsPageProps {
  author: string;
  upvotes: string;
  title: string;
  content: string;
  timeAgo: string;
}

export default function PostsPageComponent({ content, title, upvotes, author, timeAgo }: PostsPageProps) {
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

            <form className="mb-4 space-y-4">
              <textarea
                placeholder="Adicione um comentário..."
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

            <p className="text-gray-500 italic">Nenhum comentário ainda.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
