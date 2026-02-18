// src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "20px", background: "#f5f5f5", marginTop: "50px" }}>
      © {new Date().getFullYear()} Janatha Engineering Industries. All Rights Reserved.
    <a 
  href="https://www.instagram.com/janathaengineering/" 
  target="_blank" 
  rel="noopener noreferrer" 
  style={{ margin: "0 10px" }}
>
  <img src="/icons/instagram.png" alt="Instagram" width={24} />
</a>

    </footer>
  );
}

export default Footer;
