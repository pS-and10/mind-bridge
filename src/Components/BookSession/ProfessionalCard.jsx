import React from "react";

export default function ProfessionalCard({
  pro,
  selectedProfessional,
  setSelectedProfessional,
}) {
  return (
    <div
      className={`card ${
        selectedProfessional?.id === pro.id ? "selected" : ""
      }`}
      onClick={() => setSelectedProfessional(pro)}
    >
      <h4>{pro.name}</h4>
      <p>{pro.specialization}</p>
      <p>{pro.experience}</p>
    </div>
  );
}