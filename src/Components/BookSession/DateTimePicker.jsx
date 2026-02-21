import React from "react";

export default function DateTimePicker({ date, setDate, time, setTime }) {
  return (
    <div className="section">
      <h3>Select Date & Time</h3>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <select value={time} onChange={(e) => setTime(e.target.value)}>
        <option value="">Select Time</option>
        <option value="10:00 AM">10:00 AM</option>
        <option value="12:00 PM">12:00 PM</option>
        <option value="3:00 PM">3:00 PM</option>
        <option value="6:00 PM">6:00 PM</option>
      </select>
    </div>
  );
}