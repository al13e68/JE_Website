// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <nav style={{ padding: "15px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#0077ff", color: "#fff" }}>
      <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Janatha Engineering</div>
      <div>
        <Link to="/" style={{ margin: "0 15px", color: "#fff", textDecoration: "none" }}>Home</Link>
        <Link to="/about" style={{ margin: "0 15px", color: "#fff", textDecoration: "none" }}>About Us</Link>
        <Link to="/gallery" style={{ margin: "0 15px", color: "#fff", textDecoration: "none" }}>Gallery</Link>
      </div>
    </nav>
  );
}

export default Navbar;
