import "./members.css";
import BrotherImg from "../props/membersImage/myBrother.png";
import JunityImg from "../props/membersImage/Junity.png";
import Shoonihy from "../props/membersImage/shunia.png";
import CedarImg from "../props/membersImage/cedar.png";
import SemaImg from "../props/membersImage/sema.png";

const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">My Recent Works</h1>
      <div className="card">
        <img src={BrotherImg} alt="" className="card-image" />
        <div className="card-content">
          <h2 className="card-title">MY-BROTHER INFO SITE</h2>
          <p className="card-description">
            This is a template of an informational website for the latest and
            popular supermarket in Takoradi. The website was developed in 2025
            with React, Tailwind, JavaScript,Shadcn UI components and node.js.
          </p>
          <button className="card-button">
            <a
              href="https://relaxed-tarsier-4d7ae6.netlify.app/"
              target={"blank"}
            >
              Learn More
            </a>
          </button>
        </div>
      </div>

      <div className="card">
        <img src={JunityImg} alt="" className="card-image" />
        <div className="card-content">
          <h2 className="card-title">JUNITY</h2>
          <p className="card-description">
            This system was developed using React, SCSS, and ApexCharts for the
            frontend, and Node.js and Express for the backend. The Student
            Mentoring and Opportunity Matching App is a powerful platform
            designed to connect students with mentors and match them with
            relevant educational and career opportunities. This innovative app
            aims to bridge the gap between students and experienced
            professionals, enabling mentorship and fostering personal and
            professional growth.
          </p>
          <button className="card-button">
            <a href="https://www.joinjunity.com/" target={"blank"}>
              Learn More
            </a>
          </button>
        </div>
      </div>

      <div className="card">
        <img src={Shoonihy} alt="" className="card-image" />
        <div className="card-content">
          <h2 className="card-title">SHOONIYH</h2>
          <p className="card-description">
            The website for an auto-fill extension system for browsers was
            developed using React, CSS, and Bootstrap for the frontend, and
            Django for the backend.
          </p>
          <button className="card-button">
            <a href="https://shooniyh.com" target={"blank"}>
              Learn More
            </a>
          </button>
        </div>
      </div>

      <div className="card">
        <img src={CedarImg} alt="" className="card-image" />
        <div className="card-content">
          <h2 className="card-title">CEDAR</h2>
          <p className="card-description">
            A company website for showcasing the services provided by the
            company and other good information about the company. Built with
            React, Tailwind CSS, and FontAwesome for the frontend.
          </p>
          <button className="card-button">
            <a href="https://www.cedarinspectionventures.com/" target={"blank"}>
              Learn More
            </a>
          </button>
        </div>
      </div>

      <div className="card">
        <img src={SemaImg} alt="" className="card-image" />
        <div className="card-content">
          <h2 className="card-title">SEMA</h2>
          <p className="card-description">
            This project was developed using React, Redux, Tailwind, SCSS,
            Django.It is a website for managing polls, forums, discussions, and
            blogs, with support for English and Swahili languages. The platform
            includes three user interfaces: Admin, Content Creator, and Guest.
            Key features include in-app chat and granular permissions
            configuration.
          </p>
          <button className="card-button">
            <a href="https://sema.africanchildprojects.org" target={"blank"}>
              Learn More
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Members;
