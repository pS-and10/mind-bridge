export default function EmergencyNotice() {
  return (
    <div style={styles.notice}>
      🚨 If you're in immediate danger or thinking about self-harm,
      please contact a professional or emergency support immediately.
    </div>
  );
}

const styles = {
  notice: {
    backgroundColor: "#ffe5e5",
    color: "#a00000",
    padding: "10px",
    textAlign: "center",
    fontSize: "14px"
  }
};
