import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>
        <FaEnvelope />{" "}
        <a href="mailto:lukmansaidmodibbo@gmail.com">
        </a>
      </p>
      <p>
        <FaGithub />{" "}
        <a
          href="https://github.com/lukman8840"
          target="_blank"
          rel="noopener noreferrer"
        >
         
        </a>
      </p>
      <p>
        <FaLinkedin />{" "}
        <a
          href="www.linkedin.com/in/lukman-modibbo-sa-id"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        </a>
      </p>
    </section>
  );
};

export default Contact;
