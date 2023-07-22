import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://www.instagram.com/shakhzod.madmarov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>

        <a
          href="https://www.facebook.com/shakhzod.madmarov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </a>

        <a
          href="https://www.linkedin.com/in/shakhzod-madmarov-010802193/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
      <p> &copy; 2023 Shakhzod Madmarov</p>
    </div>
  );
}

export default Footer;