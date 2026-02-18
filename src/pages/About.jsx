// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div style={{ padding: "40px", maxWidth: "1000px", margin: "0 auto" }}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: "40px" }}
      >
        About Janatha Engineering Industries
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{ lineHeight: "1.8", color: "#555", marginBottom: "20px" }}
      >
        Janatha Engineering Industries is a trusted engineering and fabrication company based in Angamaly, Kerala. We specialize in transforming metal into functional and aesthetic solutions for residential and commercial clients. Our services include precision metal bending, custom fabrication, stainless steel and GI handrails, furniture, and more.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{ lineHeight: "1.8", color: "#555", marginBottom: "20px" }}
      >
        Our mission is to deliver high-quality engineering solutions, combining craftsmanship with innovation to meet the unique needs of every client. We pride ourselves on timely delivery, expert workmanship, and a commitment to customer satisfaction.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        style={{ lineHeight: "1.8", color: "#555" }}
      >
        At Janatha Engineering Industries, we envision becoming the premier metal engineering partner in the region — known for innovation, durability, and exceptional service quality.
      </motion.p>
    </div>
  );
}

export default About;
