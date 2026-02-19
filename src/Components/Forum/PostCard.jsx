import React from "react";
import CommentSection from "./CommentSection";

export default function PostCard({ post, posts, updatePosts }) {
  const handleSupport = () => {
    const updated = posts.map((p) =>
      p.id === post.id ? { ...p, supports: p.supports + 1 } : p
    );
    updatePosts(updated);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h4 className="text-lg font-semibold text-gray-800">
        {post.title}
      </h4>

      <p className="text-gray-600 mt-2 mb-4">
        {post.content}
      </p>

      <button
        onClick={handleSupport}
        className="text-sm bg-blue-100 text-blue-600 px-4 py-1 rounded-full hover:bg-blue-200 transition"
      >
        💙 Support ({post.supports})
      </button>

      <CommentSection
        post={post}
        posts={posts}
        updatePosts={updatePosts}
      />
    </div>
  );
}
