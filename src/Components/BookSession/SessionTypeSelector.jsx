import React from "react";

export default function SessionTypeSelector({ sessionType, setSessionType }) {
  const types = ["Online", "Offline", "Chat Session"];

  return (
    <div className="section">
      <h3>Select Session Type</h3>
      <div className="session-types">
        {types.map((type) => (
          <div
            key={type}
            className={`card ${sessionType === type ? "selected" : ""}`}
            onClick={() => setSessionType(type)}
          >
            {type}
          </div>
        ))}
      </div>
    </div>
  );
}