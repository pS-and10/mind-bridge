import React, { useState } from "react";
import CreatePost from "../Components/Forum/CreatePost";
import PostList from "../Components/Forum/PostList";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "./Footer";

export default function Forum() {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const updatePosts = (updatedPosts) => {
    setPosts(updatedPosts);
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-blue-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-teal-700 mb-8">
          Community Support Forum
        </h2>

        <CreatePost addPost={addPost} />
        <PostList posts={posts} updatePosts={updatePosts} />
      </div>
    </div>
    <Footer />
    </>
  );
}
