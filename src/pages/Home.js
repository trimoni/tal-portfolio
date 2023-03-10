import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import '../styles/Home.css'
import Link from '@material-ui/core/Link'

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Tal</h2>
        <div className="prompt">
          <p> A Software Developer with a passion for learning and creating.</p>
          <Link href='https://www.linkedin.com/in/talrimoni/'><LinkedInIcon /></Link>
          <Link href='https://github.com/trimoni'><GitHubIcon /></Link>
          <Link href={`mailto:trimoni8@gmail.com`}><EmailIcon /></Link>
        </div>
        <div className="skills">
          <h1> Skills</h1>
          <ol className="list">
            <li className="item">
              <h2> Front-End</h2>
              <span>
                ReactJS, HTML, CSS, JavaScript, BootStrap, Yarn, NPM</span>
            </li>
            <li className="item">
              <h2> Back-End</h2>
              <span>
                NodeJs, ExpressJS, SQL, MongeDB, Django, AWS, Azure</span>
            </li>
            <li className="item">
              <h2> Languages</h2>
              <span>
                JavaScript, Python, Java, C++</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Home;
