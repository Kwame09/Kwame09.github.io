import cvUrl from "../props/docs/Kwame'sResume.pdf";
import "./header.css";

function Header() {
  return (
    <div id="home" className="container header-container">
      <h3>
        <p>
          I<span>'</span>m
        </p>
        Kwame
      </h3>
      <h2>Front-End Web Developer</h2>
      <a href={cvUrl} download="Kwame'sResume.pdf" className="download-button">
        Download CV
      </a>
    </div>
  );
}
export default Header;
