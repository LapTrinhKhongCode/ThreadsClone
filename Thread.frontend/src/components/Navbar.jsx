import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 border-b bg-white shadow-md">
      <h2 className="text-xl font-bold">Threads</h2>
      <input
        type="text"
        placeholder="Search..."
        className="border p-2 rounded w-1/3"
      />
      <Link to="/profile" className="p-2 bg-gray-200 rounded-full">
        👤
      </Link>
    </div>
  );
};

export default Navbar;
