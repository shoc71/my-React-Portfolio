// import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/project';

const PortfolioPage = () => {
  return (
    <div className="container-fluid" style={{ padding: '50px 0' }}>
      <h2 className="text-center mb-5">My Portfolio</h2>
      <div className="container px-4">
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card position-relative overflow-hidden" style={{ width: '100%' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="project-overlay">
                  <h5
                    className="project-title"
                    onClick={() => !project.isComingSoon && window.open(project.renderLink, '_blank')}
                    style={{ cursor: project.isComingSoon ? 'not-allowed' : 'pointer' }}
                  >
                    {project.title}
                  </h5>
                  {!project.isComingSoon && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-icon"
                    >
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          .card {
            position: relative;
          }
          .project-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.5);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
            z-index: 2;
          }
          .card:hover .project-overlay {
            opacity: 1;
          }
          .project-title {
            color: black;
            font-weight: bold;
            transition: color 0.3s ease-in-out;
            margin-bottom: 8px;
          }
          .project-title:hover {
            color: #007bff;
          }
          .github-icon {
            color: black;
            font-size: 1.5rem;
            transition: color 0.3s ease-in-out;
            text-decoration: none;
          }
          .github-icon:hover {
            color: #007bff;
          }
        `}
      </style>
    </div>
  );
};

export default PortfolioPage;
