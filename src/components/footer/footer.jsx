import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { TiSocialGithub } from "react-icons/ti";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        That's all{" "}
        <a href="#home">
          <h2>
            <BsMouse /> - scroll up -
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a href="https://www.instagram.com/parfaitkwame" target={"blank"}>
          <BsInstagram className="social" />
        </a>
        <a href="#">
          <FaFacebookF className="social" />
        </a>
        <a href="mailto:kwamedohgbefu@outlook.com" target={"blank"}>
          <MdEmail className="social" />
        </a>

        <a
          href="https://www.linkedin.com/in/kwame-dohgbefu-57938b246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target={"blank"}
        >
          <FaLinkedinIn className="social" />
        </a>

        <a href="https://github.com/kwame09" target={"blank"}>
          <TiSocialGithub className="social" />
        </a>
      </div>
    </div>
  );
}
export default Footer;
