import { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../Components/context/AuthContext";
// import { AuthProvider } from "../Components/context/AuthProvider";
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/Navbar/Navbar"

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/auth/Signup", form);
    loginUser(res.data);
    navigate("/");
  };

  return (
   <>
   <NavBar />
    <div className="min-h-screen flex items-center justify-center bg-teal-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-teal-600">Sign Up</h2>

        <input type="text" placeholder="Name"
          className="w-full mb-4 p-3 border rounded-lg"
          onChange={(e) => setForm({...form, name: e.target.value})} />

        <input type="email" placeholder="Email"
          className="w-full mb-4 p-3 border rounded-lg"
          onChange={(e) => setForm({...form, email: e.target.value})} />

        <input type="password" placeholder="Password"
          className="w-full mb-6 p-3 border rounded-lg"
          onChange={(e) => setForm({...form, password: e.target.value})} />

        <button className="w-full bg-teal-600 text-white p-3 rounded-lg hover:bg-teal-700">
          Sign Up
        </button>
      </form>
    </div>
   </>
  );
}