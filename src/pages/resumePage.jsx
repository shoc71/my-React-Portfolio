const ResumePage = () => {
  return (
    <div className="container py-5 min-vh-1000">
      <header className="mb-5 text-center">
        <h3 className="display-5">
          <b>Resume</b>
        </h3>
        <p className="lead">Download my resume below</p>
        <a
          href="/path-to-resume.pdf" // Replace with actual file path
          className="btn btn-primary btn-lg"
          download
        >
          Download Resume
        </a>
      </header>

      <section>
        <h2 className="h3 mb-3">Summary of Coding Skills</h2>

        <div className="row">
          <div className="col-md-6">
            <h4 className="h5">Front-End Development</h4>
            <ul>
              <li>HTML5</li>
              <li>CSS</li>
              <li>
                JavaScript (ES6+) <sub>(wait...)</sub>
              </li>
              <li>
                Typescript <sub>(hold on...)</sub>
              </li>
              <li>Bootstrap</li>
              <li>Chakra UI</li>
              <li>React</li>
              <li>
                Apollo <sub>(as an API to the apollo-server)</sub>
              </li>
            </ul>
          </div>

          <div className="col-md-6">
            <h4 className="h5">Back-End Development</h4>
            <ul>
              <li>APIs (REST, GraphQL)</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Databases: MySQL, PostgreSQL, MongoDB</li>
              <li>Sequelize, Mongoose (ORM/ODM)</li>
              <li>GraphQL</li>
              <li>Docker</li>
              <li>Python (pygame, pandas, numpy)</li>
              <li>git</li>
              <li>Ubuntu Linux</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumePage;