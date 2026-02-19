import React, { useState } from "react";
import { phq9Questions } from "./phq9Questions";

export default function PHQ9() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(Array(9).fill(0));
  const [finished, setFinished] = useState(false);

  const options = [
    { label: "Not at all", value: 0 },
    { label: "Several days", value: 1 },
    { label: "More than half the days", value: 2 },
    { label: "Nearly every day", value: 3 }
  ];

  const handleAnswer = (value) => {
    const updated = [...answers];
    updated[current] = value;
    setAnswers(updated);

    if (current < phq9Questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  const totalScore = answers.reduce((a, b) => a + b, 0);

  const getSeverity = () => {
    if (totalScore <= 4) return "Minimal";
    if (totalScore <= 9) return "Mild";
    if (totalScore <= 14) return "Moderate";
    if (totalScore <= 19) return "Moderately Severe";
    return "Severe";
  };

  const suicideRisk = answers[8] > 0;

  if (finished) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
          <h2 className="text-2xl font-semibold mb-4">Your Results</h2>
          <p className="text-lg">Score: {totalScore}</p>
          <p className="text-indigo-600 font-medium mt-2">
            Severity: {getSeverity()}
          </p>

          {suicideRisk && (
            <div className="mt-4 bg-red-100 text-red-700 p-4 rounded-lg">
              ⚠️ If you're experiencing thoughts of self-harm,
              please seek immediate professional help.
            </div>
          )}

          <p className="text-sm text-gray-500 mt-4">
            This screening tool does not provide a medical diagnosis.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full">

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            className="bg-indigo-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((current + 1) / 9) * 100}%` }}
          />
        </div>

        <h2 className="text-xl font-semibold mb-2">
          Question {current + 1} of 9
        </h2>

        <p className="text-gray-700 mb-6">
          {phq9Questions[current]}
        </p>

        <div className="space-y-1">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => handleAnswer(opt.value)}
              className="w-full py-3 rounded-xl border border-gray-300 hover:bg-indigo-50 hover:border-indigo-400 transition duration-200"
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
