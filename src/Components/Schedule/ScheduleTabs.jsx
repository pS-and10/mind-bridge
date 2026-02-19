export default function ScheduleTabs({ activeTab, setActiveTab }) {
  return (
    <div style={styles.container}>
      
      <button
        style={{
          ...styles.tabButton,
          ...(activeTab === "upcoming" ? styles.activeTab : {})
        }}
        onClick={() => setActiveTab("upcoming")}
      >
        Upcoming
      </button>

      <button
        style={{
          ...styles.tabButton,
          ...(activeTab === "past" ? styles.activeTab : {})
        }}
        onClick={() => setActiveTab("past")}
      >
        Past
      </button>

    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px"
  },
  tabButton: {
    padding: "10px 20px",
    borderRadius: "20px",
    border: "1px solid #ccc",
    backgroundColor: "#f5f5f5",
    cursor: "pointer",
    fontWeight: "500",
    transition: "0.3s"
  },
  activeTab: {
    backgroundColor: "#6c63ff",
    color: "#fff",
    border: "none"
  }
};
