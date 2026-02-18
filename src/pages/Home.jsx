// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Hero Section */}
      <section style={{ textAlign: "center", marginBottom: "60px" }}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: "3rem", marginBottom: "20px" }}
        >
          Engineering Precision, Building Strength
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ fontSize: "1.2rem", color: "#555" }}
        >
          Quality Fabrication You Can Trust — Serving Residential & Commercial Projects
        </motion.p>
      </section>

      {/* Featured Services */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px", marginBottom: "60px" }}>
        {[
          { title: "Custom Metal Fabrication", desc: "Precision engineering for decorative and structural projects." },
          { title: "Pipe Bending & Forming", desc: "Steel & GI pipes formed to exact specifications." },
          { title: "Stainless Steel & GI Handrails", desc: "Safe, durable, and visually appealing railing systems." },
          { title: "Furniture Fabrication", desc: "Tables, chairs, and other metal furnishings." },
        ].map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            style={{ padding: "20px", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}
          >
            <h3 style={{ marginBottom: "10px" }}>{service.title}</h3>
            <p style={{ color: "#555" }}>{service.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Call to Action */}
      <section style={{ textAlign: "center" }}>
        <motion.a
  href="https://wa.me/919847731803?text=Hello%20Janatha%20Engineering!"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.1 }}
  style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "10px", backgroundColor: "#25D366", borderRadius: "8px" }}
>
  <img src="/icons/whatsapp.png" alt="WhatsApp" width={24} />
</motion.a>
      </section>
    </div>
  );
}

export default Home;
