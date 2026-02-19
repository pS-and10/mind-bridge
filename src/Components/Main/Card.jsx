import { useNavigate } from "react-router-dom";

export default function Card({ title, description, path }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(path)}
      className="cursor-pointer bg-white/80 backdrop-blur-md rounded-2xl shadow-md p-6 border border-green-100 
                 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
    >
      <h2 className="text-xl font-semibold text-emerald-700">
        {title}
      </h2>

      <p className="mt-3 text-gray-600 text-sm">
        {description}
      </p>

      {/* <button className="mt-6 bg-emerald-500 text-white px-4 py-2 rounded-xl 
                         hover:bg-emerald-600 transition">
        Select
      </button> */}
    </div>
  );
}
