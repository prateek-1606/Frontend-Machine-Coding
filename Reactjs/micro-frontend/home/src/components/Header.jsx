const styles = {
  header: {
    backgroundColor: "#f4f4f4",
    padding: "10px",
    textAlign: "center",
    borderBottom: "1px solid #ddd",
  },
  title: {
    margin: 0,
    fontSize: "24px",
    color: "#333",
  },
};

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>My Header</h1>
    </header>
  );
};

export default Header;
