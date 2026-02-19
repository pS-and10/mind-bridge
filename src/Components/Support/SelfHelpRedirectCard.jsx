import { useNavigate } from "react-router-dom";

export default function SelfHelpRedirectCard() {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 text-center">
      <h3 className="text-lg font-semibold text-teal-700 mb-3">
        Not in Immediate Crisis?
      </h3>

      <p className="text-gray-600 mb-4">
        You can explore guided exercises, breathing techniques, and
        wellness resources.
      </p>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => navigate("/screening")}
          className="bg-teal-500 text-white px-4 py-2 rounded-xl hover:bg-teal-600 transition"
        >
          Start Assessment
        </button>

        <button
          onClick={() => navigate("/resources")}
          className="border border-teal-600 text-teal-600 px-4 py-2 rounded-xl hover:bg-teal-50 transition"
        >
          Explore Resources
        </button>
      </div>
    </div>
  );
}
