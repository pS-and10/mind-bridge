import { useNavigate } from "react-router-dom";

export default function ProfessionalSupportCard() {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md rounded-2xl p-6">
      <h3 className="text-lg font-semibold text-teal-700 mb-3">
        Professional Support
      </h3>

      <p className="text-gray-600 mb-4">
        Connect with a licensed mental health professional for guidance and support.
      </p>

      <button
        onClick={() => navigate("/booking")}
        className="bg-teal-600 text-white px-4 py-2 rounded-xl hover:bg-teal-700 transition"
      >
        Book Session
      </button>
    </div>
  );
}
