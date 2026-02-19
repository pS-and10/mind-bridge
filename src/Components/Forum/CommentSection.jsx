import React, { useState } from "react";

export default function CommentSection({ post, posts, updatePosts }) {
  const [commentText, setCommentText] = useState("");

  const addComment = () => {
    if (!commentText) return;

    const updated = posts.map((p) =>
      p.id === post.id
        ? { ...p, comments: [...p.comments, commentText] }
        : p
    );

    updatePosts(updated);
    setCommentText("");
  };

  return (
    <div className="mt-5 border-t pt-4">
      <h5 className="font-medium text-gray-700 mb-2">Comments</h5>

      <div className="space-y-2 mb-3">
        {post.comments.map((c, index) => (
          <p
            key={index}
            className="bg-gray-100 p-2 rounded-lg text-sm"
          >
            {c}
          </p>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Write a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
        <button
          onClick={addComment}
          className="bg-teal-500 text-white px-4 rounded-lg hover:bg-teal-600 transition"
        >
          Add
        </button>
      </div>
    </div>
  );
}
