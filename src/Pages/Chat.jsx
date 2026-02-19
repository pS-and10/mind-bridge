import React, { useState } from "react";
import ChatHeader from "../Components/Chat/ChatHeader";
import ChatMessages from "../Components/Chat/ChatMessages";
import ChatInput from "../Components/Chat/ChatInput";
import EmergencyNotice from "../Components/Chat/EmergencyNotice";
import Navbar from "../Components/Navbar/Navbar";

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hi, I’m MindBridge AI. I’m here to support you. How are you feeling today?"
    }
  ]);

  const [showEmergency, setShowEmergency] = useState(false);

  const emergencyKeywords = ["suicide", "kill myself", "self harm", "die"];

  const generateAIResponse = (userText) => {
    if (userText.toLowerCase().includes("stress")) {
      return "It sounds like you're feeling stressed. Would you like to try a short breathing exercise?";
    }
    return "I’m here to listen. Tell me more about what’s on your mind.";
  };

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    const newUserMessage = { sender: "user", text };
    setMessages((prev) => [...prev, newUserMessage]);

    // Emergency detection
    const isEmergency = emergencyKeywords.some((word) =>
      text.toLowerCase().includes(word)
    );

    if (isEmergency) {
      setShowEmergency(true);
    } else {
      const aiReply = {
        sender: "ai",
        text: generateAIResponse(text)
      };
      setMessages((prev) => [...prev, newUserMessage, aiReply]);
    }
  };

  return (
    <>
    <Navbar />
    <div style={styles.container}>
      <ChatHeader />
      {showEmergency && <EmergencyNotice />}
      <ChatMessages messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "85vh",
    backgroundColor: "#f5f8fa"
  }
};
