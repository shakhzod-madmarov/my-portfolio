import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";

import "../styles/Home.css";

function Home() {
  return (
    <main className="home">
      <section className="about">
        <h1> Hi there! I am Shakhzod</h1>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a
            href="https://www.linkedin.com/in/shakhzod-madmarov-010802193/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>

          <a
            href="mailto:shakhdxb@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon />
          </a>

          <a
            href="https://github.com/shakhzod-madmarov"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </a>
        </div>
      </section>
      <section className="skills">
        <h2> Skills</h2>
        <h2> Front-End</h2>
        <p>
          HTML, CSS, SASS, BootStrap, GIT, NPM, Yarn, JavaScript, ReactJS,
          Redux, TypeScript.
        </p>
      </section>
    </main>
  );
}

export default Home;
