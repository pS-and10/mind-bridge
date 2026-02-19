export default function ResourcesHeader() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Explore Mental Wellness Resources</h1>
      <p style={styles.subtitle}>
        Find helpful articles, exercises, and tools to support your mental well-being.
      </p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "40px 20px",
  },
  title: {
    fontSize: "32px",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "16px",
    color: "#555",
    maxWidth: "600px",
    margin: "0 auto",
  },
};
