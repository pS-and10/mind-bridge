export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
      
      <h1 className="text-xl font-bold text-emerald-700">
        <a href="/">MindBridge</a>
      </h1>

      <div className="hidden md:flex gap-10 font-heading text-textsub">
        <a href="/" className="hover:text-primary transition">Home</a>
        <a href="/Screening" className="hover:text-primary transition">Screening</a>
        <a href="/Resources" className="hover:text-primary transition">Resources</a>
        <a href="/Support" className="hover:text-primary transition">Support</a>
      </div>

      <div className="flex gap-4">
        <button className="px-4 py-2 border border-emerald-500 rounded-xl text-emerald-600 hover:bg-emerald-50 transition">
          Sign Up
        </button>
        <button className="px-4 py-2 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition">
          Login
        </button>
      </div>
    </nav>
  );
}
