import React from "react";
import '../styles/Project.css'

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="card">
          <h3>LearnFlow</h3>
          <p>
            LearnFlow is a web application that provides online classes to help users 
            improve their digital skills, including productivity tools (Gmail, Google Docs, Sheets) 
            and emerging technologies like AI
          </p>
          <a href="https://github.com/lkmodibbo/LearnFlow-UI" target="_blank">
            View on GitHub
          </a>
        </div>
        <div className="card">
          <h3>E-commerce Website</h3>
          <p>
            A Sipmle E-commerce website using API and Context API
          </p>
          <a href="https://github.com/lukman8840/e-commerce-website" target="_blank">
            View on GitHub
          </a>
        </div>
        <div className="card">
          <h3>Quiz App</h3>
          <p>
            Quiz application with pagination, tracking answers and scores dynamically.
          </p>
          <a href="https://github.com/lukman8840/A-simple-Quiz-App" target="_blank">
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
