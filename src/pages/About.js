import "./About.css";

const About = (props) => {
  return (
    <div className="about-body">
      <div className="about-container">
        <div className="about-social">
          <a
            className="a about-g"
            href="https://github.com/elvisEspinozaN"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          <a
            className="a about-a"
            href="https://www.linkedin.com/in/elvis-espinoza/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
          <div>email</div>
        </div>
        <span className="about-the">the app</span>
        <span className="about-app">
          repoPortfolio, is a React based app that allows any user post their
          own projects. With a login authentication, users are able to upload
          their projects with some detailed information. With the use of React,
          MongoDB, Google Firebase and more!
        </span>
        <span className="about-the">next steps</span>
        <span className="about-next">imporvements to...</span>
      </div>
    </div>
  );
};

export default About;
