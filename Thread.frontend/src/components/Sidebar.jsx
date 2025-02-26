import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5">
      <h1 className="text-2xl font-bold mb-5">Threads</h1>
      <nav className="flex flex-col gap-4">
        <Link to="/" className="p-2 hover:bg-gray-700 rounded">🏠 Home</Link>
        <Link to="/profile" className="p-2 hover:bg-gray-700 rounded">👤 Profile</Link>
        <Link to="/settings" className="p-2 hover:bg-gray-700 rounded">⚙️ Settings</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
