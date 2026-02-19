// import React from "react";
import "./SessionCard.css";

export default function SessionCard({ session }) {
  return (
    <div className="session-card">

      <div className="session-info">
        <h3>{session.therapistName}</h3>
        <p>{session.date} | {session.time}</p>
        <p>Mode: {session.mode}</p>

        <span className={`status-badge ${session.status}`}>
          {session.status}
        </span>
      </div>

      <div className="session-actions">

        {session.status === "upcoming" && (
          <>
            {session.mode === "Online" && (
              <button className="primary-btn">Join</button>
            )}
            <button className="secondary-btn">Reschedule</button>
            <button className="danger-btn">Cancel</button>
          </>
        )}

        {session.status === "past" && (
          <>
            <button className="secondary-btn">View Summary</button>
            <button className="primary-btn">Leave Feedback</button>
          </>
        )}

        {session.status === "cancelled" && (
          <button className="primary-btn">Rebook</button>
        )}

      </div>
    </div>
  );
}
