import React, { useEffect } from "react";
import '../styles/BackToTop.css'

const BackToTop = () => {
  useEffect(() => {
    const backToTop = document.getElementById("backToTop");
    const scrollHandler = () => {
      backToTop.style.display = window.scrollY > 300 ? "block" : "none";
    };
    window.addEventListener("scroll", scrollHandler);

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return <button id="backToTop">↑</button>;
};

export default BackToTop;
