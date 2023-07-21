/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "Project 1",
      img: "/projects/1.png",
      gLink: "https://github.com/yashk9293/Music-Player",
      lLink: "https://yashk9293.github.io/Music-Player/",
    },
    {
      title: "Project 2",
      img: "/projects/2.png",
      gLink: "https://github.com/yashk9293/weather_webApp",
      lLink: "https://yashk9293.github.io/weather_webApp/",
    },
    {
      title: "Project 3",
      img: "/projects/3.png",
      gLink: "https://github.com/yashk9293/image-search-engine",
      lLink: "https://yashk9293.github.io/image-search-engine/",
    },
    {
      title: "Project 4",
      img: "/projects/4.png",
      gLink: "https://github.com/yashk9293/Timer_countdown",
      lLink: "https://yashk9293.github.io/Timer_countdown/",
    },
    {
      title: "Project 5",
      img: "/projects/5.png",
      gLink: "https://github.com/yashk9293/QR-Code-Generator",
      lLink: "https://yashk9293.github.io/QR-Code-Generator/",
    },
    {
      title: "Project 6",
      img: "/projects/6.png",
      gLink: "https://github.com/yashk9293/Stopwatch",
      lLink: "https://yashk9293.github.io/Stopwatch/",
    },
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href="https://github.com/yashk9293"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
