import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Tal</h2>
        <div className="prompt">
          <p> A Software Developer with a passion for learning and creating.</p>
          <LinkedInIcon />
          <GitHubIcon />
          <EmailIcon />
        </div>
        <div className="skills">
          <h1> Skills</h1>
          <ol className="list">
            <li className="item">
              <h2> Front-End</h2>
              <span> </span>
            </li>
            <li className="item">
              <h2> Back-End</h2>
              <span> </span>
            </li>
            <li className="item">
              <h2> Languages</h2>
              <span> </span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Home;
