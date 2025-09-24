import React, { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ProfilePic from '../assets/Passport-image.jpeg';
import '../styles/Hero.css'

const Hero = () => {
  useEffect(() => {
    // Typewriter effect
    const text =
      "A passionate Frontend Developer, ALX Trainee & FlexiSAF Intern.";
    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        document.getElementById("typing-text").textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    }
    typeWriter();
  }, []);

  return (
    <section className="hero">
      <img
        src={ProfilePic}
        alt="Lukman Modibbo Said"
        className="profile-pic"
      />
      <div className="hero-text">
        <h1>
          Hello, I’m <span>Lukman Modibbo Said</span>
        </h1>
        <p id="typing-text"></p>
        <div className="hero-links">
          <a href="https://github.com/lukman8840" target="_blank">
            <FaGithub size={20} /> GitHub
          </a>
          <a href="www.linkedin.com/in/lukman-modibbo-sa-id" target="_blank">
            <FaLinkedin size={20} /> LinkedIn
          </a>
          <a href="/My_Resume.pdf" target="_blank">Download Resume</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
