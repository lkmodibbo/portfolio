import React, { useEffect } from "react";
import '../styles/Footer.css'

const Footer = () => {
  useEffect(() => {
    document.getElementById("year").textContent = new Date().getFullYear();
  }, []);

  return (
    <footer>
      <p>
        &copy; <span id="year"></span> Lukman Modibbo Said. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
