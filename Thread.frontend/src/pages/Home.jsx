import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CreatePost from "../components/CreatePost";
import ThreadList from "../components/ThreadList";

const mockThreads = [
  { id: 1, user: "Alice", content: "Hello, world!", likes: 12 },
  { id: 2, user: "Bob", content: "React is awesome!", likes: 25 },
];

const Home = () => {
  const [threads, setThreads] = useState(mockThreads);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 max-w-2xl mx-auto">
        <Navbar />
        <CreatePost setThreads={setThreads} />
        <ThreadList threads={threads} />
      </div>
    </div>
  );
};

export default Home;
