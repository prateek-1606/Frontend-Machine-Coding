import React from "react";

const ProductPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Product Page</h1>
      <p style={styles.description}>
        Welcome to the Product Page! Here you can find a variety of products to
        suit your needs.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  description: {
    fontSize: "16px",
    color: "#555",
  },
};

export default ProductPage;
