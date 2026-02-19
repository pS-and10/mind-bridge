import React from "react";
import PostCard from "./PostCard";

export default function PostList({ posts, updatePosts }) {
  if (posts.length === 0) {
    return (
      <div className="text-center text-gray-500">
        No posts yet. Be the first to share.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          posts={posts}
          updatePosts={updatePosts}
        />
      ))}
    </div>
  );
}
