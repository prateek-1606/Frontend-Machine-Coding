import React from "react";

const styles = {
  footer: {
    backgroundColor: "#f4f4f4",
    padding: "10px",
    textAlign: "center",
    borderTop: "1px solid #ddd",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    boxSizing: "border-box", // Ensures padding doesn't affect width
  },
  text: {
    margin: 0,
    fontSize: "14px",
    color: "#333",
  },
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>My Footer</p>
    </footer>
  );
};
export default Footer;
