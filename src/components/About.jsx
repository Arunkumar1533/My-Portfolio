import React from "react";
import { motion } from "framer-motion";
import Aboutimg from "../assets/Aboutimg.jpg";

const AboutSection = () => {
  return (
    <section
      className="about-section container1"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        A B O U T M E{" "}
      </h1>
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="about-image">
          <img src={Aboutimg} alt="About Us" />
        </div>
        <div className="about-text">
          <p>
          <b>👨‍💻 Hi, I'm Arunkumar – Frontend Developer</b>
          </p>
          <p>
          I craft engaging, high-performance web experiences with clean, responsive, and interactive designs. Passionate about UI perfection, performance optimization, and seamless user experiences, I specialize in React.js, Next.js, and modern web technologies.

🚀 Blending aesthetics with functionality to build intuitive and scalable applications.
📢 Strong collaborator, continuously improving communication for impactful solutions.

Let’s create something exceptional! ✨
          </p>
         
          <p>
            My approach to development focuses on both aesthetics and
            functionality, ensuring that every project I work on is intuitive
            and user-friendly.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
