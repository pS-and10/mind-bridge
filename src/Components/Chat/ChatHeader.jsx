// components/chat/ChatHeader.jsx
import React from "react";

export default function ChatHeader() {
  return (
    <div style={styles.header}>
      <h2>Talk to MindBridge AI</h2>
      <p style={{ fontSize: "12px", color: "gray" }}>
        Supportive AI • Not a medical professional
      </p>
    </div>
  );
}

const styles = {
  header: {
    padding: "15px",
    borderBottom: "1px solid #ddd",
    backgroundColor: "#ffffff"
  }
};
