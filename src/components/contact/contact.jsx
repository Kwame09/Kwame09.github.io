import "./contact.css";
import {
  AiOutlineFacebook,
  AiOutlineMail,
  AiOutlineYoutube,
} from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          href="mailto:kwamedohgbefu@outlook.com"
          className="contact youtube"
          target={"blank"}
        >
          <AiOutlineMail className="icon" />
          <h2>
            Email <span>kwamedohgbefu@outlook.com</span>
          </h2>
        </a>

        <a
          href="https://wa.me/+233204362233"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+233 020 436 2233</span>
          </h2>
        </a>

        <a
          href="https://www.instagram.com/parfaitkwame"
          className="contact instagram"
          target={"blank"}
        >
          <AiOutlineInstagram className="icon" />
          <h2>
            instagram <span>Parfait Kwame</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
