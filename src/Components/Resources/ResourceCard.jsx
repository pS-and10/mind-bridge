//  import resourcesData from "./resourcesData";

export default function ResourceCard({ title, description, category }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
      <span style={styles.tag}>{category}</span>
      <button style={styles.button}>Read More</button>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "20px",
    width: "280px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
  },
  title: {
    marginBottom: "10px",
  },
  description: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "15px",
  },
  tag: {
    fontSize: "12px",
    backgroundColor: "#e0f2f1",
    padding: "4px 8px",
    borderRadius: "12px",
    display: "inline-block",
    marginBottom: "10px",
  },
  button: {
    padding: "6px 12px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#4CAF50",
    color: "white",
  },
};
