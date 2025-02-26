import React from "react";

const ThreadItem = ({ thread }) => {
  return (
    <div className="border p-4 my-2 rounded-lg shadow-sm">
      <h3 className="font-bold">{thread.user}</h3>
      <p>{thread.content}</p>
      <div className="flex gap-4 text-gray-500 mt-2">
        <span>❤️ {thread.likes}</span>
      </div>
    </div>
  );
};

export default ThreadItem;
