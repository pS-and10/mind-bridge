import React from "react";

export default function BookingSummary({
  sessionType,
  selectedProfessional,
  date,
  time,
}) {
  if (!sessionType && !selectedProfessional && !date && !time) return null;

  return (
    <div className="summary-box">
      <h3>Booking Summary</h3>
      <p><strong>Session Type:</strong> {sessionType}</p>
      <p>
        <strong>Professional:</strong>{" "}
        {selectedProfessional ? selectedProfessional.name : ""}
      </p>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Time:</strong> {time}</p>
    </div>
  );
}