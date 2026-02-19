import MessageBubble from "./MessageBubble";

export default function ChatMessages({ messages }) {
  return (
    <div style={styles.container}>
      {messages.map((msg, index) => (
        <MessageBubble key={index} sender={msg.sender} text={msg.text} />
      ))}
    </div>
  );
}

const styles = {
  container: {
    flex: 1,
    overflowY: "auto",
    padding: "15px",
  },
};
