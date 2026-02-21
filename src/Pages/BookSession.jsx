import React, { useState } from "react";
import SessionTypeSelector from "../Components/BookSession/SessionTypeSelector";
import ProfessionalCard from "../Components/BookSession/ProfessionalCard";
import DateTimePicker from "../Components/BookSession/DateTimePicker";
import BookingSummary from "../Components/BookSession/BookingSummary";
import "../Components/BookSession//Booking.css";
import NavBar from "../Components/Navbar/Navbar";

const professionals = [
  {
    id: 1,
    name: "Dr. Ananya Sharma",
    specialization: "Clinical Psychologist",
    experience: "5 Years",
  },
  {
    id: 2,
    name: "Dr. Rahul Mehta",
    specialization: "Psychiatrist",
    experience: "8 Years",
  },
];

export default function BookSession() {
  const [sessionType, setSessionType] = useState("");
  const [selectedProfessional, setSelectedProfessional] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  const handleConfirm = () => {
    if (!sessionType || !selectedProfessional || !date || !time) {
      alert("Please fill all required fields.");
      return;
    }

    alert("Session booked successfully!");
  };

  return (
    <>
    <NavBar />
    <div className="booking-container">
        
      <h2 className="font-heading text-4xl md:text-5xl font-semibold text-emerald-800">Book a Session</h2>

      <SessionTypeSelector
        sessionType={sessionType}
        setSessionType={setSessionType}
      />

      <div className="section">
        <h3 > Select Professional</h3>
        <div className="professional-list">
          {professionals.map((pro) => (
            <ProfessionalCard
              key={pro.id}
              pro={pro}
              selectedProfessional={selectedProfessional}
              setSelectedProfessional={setSelectedProfessional}
            />
          ))}
        </div>
      </div>

      <DateTimePicker
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
      />

      <div className="section">
        <h3>Additional Notes (Optional)</h3>
        <textarea
          placeholder="Briefly describe your concern..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      <BookingSummary
        sessionType={sessionType}
        selectedProfessional={selectedProfessional}
        date={date}
        time={time}
      />

      <button className="confirm-btn" onClick={handleConfirm}>
        Confirm Booking
      </button>
    </div>
    </>
    
  );
}