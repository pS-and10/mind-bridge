import "./EmptyState.css";

export default function EmptyState({ message, buttonText }) {
  return (
    <div className="empty-state">
      <h3>{message}</h3>
      {buttonText && (
        <button className="empty-btn">
          {buttonText}
        </button>
      )}
    </div>
  );
}
