// components/chat/ChatInput.jsx
import React, { useState } from "react";

export default function ChatInput({ onSendMessage }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    onSendMessage(input);
    setInput("");
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Type your thoughts here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleSend} style={styles.button}>
        Send
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    padding: "10px",
    borderTop: "1px solid #ddd",
    backgroundColor: "#ffffff"
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "20px",
    border: "1px solid #ccc",
    marginRight: "10px"
  },
  button: {
    padding: "10px 20px",
    borderRadius: "20px",
    border: "none",
    backgroundColor: "#4caf50",
    color: "white",
    cursor: "pointer"
  }
};
