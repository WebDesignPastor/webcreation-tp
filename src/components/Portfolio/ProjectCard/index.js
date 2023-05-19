import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="project-card__tech-list">
        {project.technologies.map((tech, i) => (
          <li key={i}>
            <FontAwesomeIcon icon={tech} />
          </li>
        ))}
      </ul>
      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
        Voir le site
      </a>
    </div>
  );
};

export default ProjectCard;
