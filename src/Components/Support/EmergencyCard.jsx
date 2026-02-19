export default function EmergencyCard() {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-red-400">
      <h2 className="text-xl font-semibold text-red-600 mb-3">
        🚨 Immediate Help
      </h2>

      <p className="text-gray-600 mb-4">
        If you are in immediate danger or having thoughts of self-harm,
        please contact emergency services right now.
      </p>

      <div className="space-y-2">
        <p className="font-medium">Emergency: 112</p>
        <p className="font-medium">
          Kiran Mental Health Helpline: 1800-599-0019
        </p>
      </div>

      <a
        href="tel:18005990019"
        className="inline-block mt-4 bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600 transition"
      >
        Call Helpline
      </a>
    </div>
  );
}
