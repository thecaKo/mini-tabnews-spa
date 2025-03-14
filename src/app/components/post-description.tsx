import Link from "next/link";

interface PostProps {
  title: string;
  index: string;
  author: string;
  commentsLength: string;
  timeAgo: string;
}

export default function PostDescription({ title, author, timeAgo, commentsLength, index }: PostProps) {
  return (
    <div className="bg-white text-white py-3 h-18">
      <div className="max-w-screen-xl mx-120 px-6">
        <div className="">
          <div key="1" className="py-4">
            <div className="flex items-center gap-4">
              <span className="text-black font-bold text-lg w-1 h-13 text-right">{index}.</span>
              <div className="flex-1">
                <Link className="text-lg text-black hover:underline" href={`/posts/${title}`}>
                  {title}
                </Link>
                <p className="text-gray-500 text-sm mt-1">
                  12 upvotes · {commentsLength} comentários · {author} · {timeAgo}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
