import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext  from "../context/AuthContext";
import { UserCircle } from "lucide-react";
import Signup from "../../Pages/Signup";
import Login from "../../Pages/Login";

export default function Navbar() {
   const { user, logoutUser } = useContext(AuthContext);
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
      <h1 className="text-xl font-bold text-emerald-700">
        <a href="/">MindBridge</a>
      </h1>

      <div className="hidden md:flex gap-10 font-heading text-textsub">
        <Link to="/" className="hover:text-primary transition">
          Home
        </Link>
        <Link to="/Screening" className="hover:text-primary transition">
          Screening
        </Link>
        <Link to="/Resources" className="hover:text-primary transition">
          Resources
        </Link>
        <Link to="/Support" className="hover:text-primary transition">
          Support
        </Link>
      </div>

      <div className="flex gap-4">
        {!user ? (
          <>
            <Link to="/Signup" className="px-4 py-2 border rounded-lg">Sign Up</Link>
            <Link to="/Login" className="px-4 py-2 bg-teal-600 text-white rounded-lg">Login</Link>
          </>
        ) : (
          <div className="flex items-center gap-3">
            <UserCircle size={30} />
            <button onClick={logoutUser} className="text-red-500">Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
}
