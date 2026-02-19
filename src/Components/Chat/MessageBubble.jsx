// components/chat/MessageBubble.jsx
import React from "react";

export default function MessageBubble({ sender, text }) {
  const isUser = sender === "user";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        marginBottom: "10px"
      }}
    >
      <div
        style={{
          backgroundColor: isUser ? "#4caf50" : "#e0e0e0",
          color: isUser ? "white" : "black",
          padding: "10px 15px",
          borderRadius: "20px",
          maxWidth: "60%"
        }}
      >
        {text}
      </div>
    </div>
  );
}
