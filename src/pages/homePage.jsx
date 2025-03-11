// import React from 'react';
import { Carousel } from "react-bootstrap";
import { projects } from "../data/project";
import { Link } from "react-router-dom";

function HomePage() {
  const liveProjects = projects.filter((project) => !project.isComingSoon);

  return (
    <div className="container py-5 min-vh-100">
      <header className="text-center mb-5">
        <h1>Hello World</h1>
        <h3>Welcome to My Personal Website</h3>
        <p className="lead">
          Explore my projects and discover my professional journey.
        </p>
      </header>

      <Carousel>
        {liveProjects.map((project, index) => (
          <Carousel.Item key={index}>
            <a
              href={project.renderLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="d-block w-100"
                src={project.image}
                alt={project.title}
                style={{ objectFit: "cover", height: "400px" }}
              />
              <Carousel.Caption>
                <div className="carousel-title-box">
                  <h3>{project.title}</h3>
                </div>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
        ))}
      </Carousel>

      <section className="mt-5 text-center">
        <h2>About My Work</h2>
        <p>
          I am passionate about developing innovative solutions and creative
          projects. My portfolio showcases a range of work—from dynamic web
          applications to engaging user experiences. Click on any project above
          to learn more.
        </p>

        <br />
        <br />
        <hr />
        <br />
        <br />

        <div className="mb-5">
          <p className="lead">
            List of Projects are available at the click of the button.
          </p>
          <Link
            className="btn btn-lg btn-primary"
            to="/portfolio"
            style={{ fontSize: "2.3rem" }}
          >
            Click Me!
          </Link>
        </div>
      </section>

      <style>
        {`
          .carousel-title-box {
            display: inline-block;
            padding: 10px 20px;
            background-color: rgba(0, 0, 0, 0.5);
            border: 2px solid #fff;
            border-radius: 5px;
          }
          .carousel-title-box h3 {
            margin: 0;
            color: #fff;
            font-weight: bold;
          }
        `}
      </style>
    </div>
  );
}

export default HomePage;
