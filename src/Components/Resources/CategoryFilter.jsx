import React from "react";

export default function CategoryFilter({ categories, selectedCategory, onSelect }) {
  return (
    <div style={styles.container}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          style={{
            ...styles.button,
            backgroundColor: selectedCategory === category ? "#4CAF50" : "#f0f0f0",
            color: selectedCategory === category ? "#fff" : "#000",
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
    padding: "20px",
  },
  button: {
    padding: "8px 16px",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
  },
};
