import { useState } from "react";

const CreatePost = ({ setThreads }) => {
  const [content, setContent] = useState("");

  const handlePost = () => {
    if (!content.trim()) return; // Prevent empty posts

    const newPost = {
      id: Date.now(),
      user: "Guest User",
      content,
      likes: 0,
    };

    setThreads((prevThreads) => [newPost, ...prevThreads]);
    setContent(""); // Clear input field after posting
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg my-4">
      <textarea
        className="w-full p-2 border rounded"
        rows="3"
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handlePost}
      >
        Post
      </button>
    </div>
  );
};

export default CreatePost;
