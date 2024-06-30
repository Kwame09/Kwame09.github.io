import "./members.css";

const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">My Recent Works</h1>
      <div className="member member-1">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">JUNITY</h1>
          <h4 className="about">
            This systtem was developed with React,SCss and Apex chart for the
            frontend. The Student Mentoring and Opportunity Matching App is a
            powerful platform designed to connect students with mentors and
            match them with relevant educational and career opportunities. This
            innovative app aims to bridge the gap between students and
            experienced professionals, enabling mentorship and fostering
            personal and professional growth.
          </h4>

          <a
            href="https://joinjunity.com"
            target="_blank"
            className="contact-member"
            rel="noreferrer noopener"
          >
            <span>Link</span>
          </a>
        </div>
      </div>

      <div className="member member-2">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">KAZE 360</h1>
          <h4 className="about">
            This ERP system was desiugReact, Typescript,Tailwind and Antdesign
            for the frontend.The App is a web-based application designed to
            streamline and automate various processes within an organization. It
            serves as a centralized platform for managing employee information,
            recruitment,payroll, loan system, job posting, company events,
            performance evaluation, and other essential tasks.
          </h4>
          <a
            href="//app.kazi-360.com"
            target="_blank"
            className="contact-member"
            rel="noreferrer noopener"
          >
            <span>Link</span>
          </a>
        </div>
      </div>

      <div className="member member-3">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">SHOONIYH</h1>
          <h4 className="about">
            The website for an auto-fill extension system for browser and the
            website for this system was built with React, css and bootstrap for
            the frontend.
          </h4>
          <a
            href="https://shooniyh.com"
            target="_blank"
            className="contact-member"
            rel="noreferrer noopener"
          >
            <span>Link</span>
          </a>
        </div>
      </div>

      <div className="member member-4">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">CEDAR</h1>
          <h4 className="about">
            A Company website for showcasing the services provided by the
            company and other good information about the company. React,
            tailwind css and fontawsome for the fronted.
          </h4>
          <a
            href="https://www.cedarinspectionventures.com"
            target="_blank"
            className="contact-member"
            rel="noreferrer noopener"
          >
            <span>Link</span>
          </a>
        </div>
      </div>
      <div className="member member-5">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">GIDI-PROPERTIES</h1>
          <h4 className="about">
            A real estate system built with PHP, HTML, Javascript, Bootstrap. It
            has a features which enebles a person to upload properties for
            advertisement, payment shystem and features which allows agents and
            companies to transact safely.
          </h4>
          <a
            href="https://gidiproperty.com/"
            target="_blank"
            className="contact-member"
            rel="noreferrer noopener"
          >
            <span>Link</span>
          </a>
        </div>
      </div>
      <div className="member member-6">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">SEMA</h1>
          <h4 className="about">
            This project was developed with React, Redux, Tailwind, Scss for the
            fronted. It is a website for managing polls, forums, discussions and
            blogs with support for English and Swahili languages. It included
            three user types; Admin interface, Content Creator interface and
            Guest interface. It also includes in-app chat and granular
            permissions configuration.
          </h4>
          <a
            href="https://sema.africanchildprojects.org"
            target="_blank"
            className="contact-member"
            rel="noreferrer noopener"
          >
            <span>Link</span>
          </a>
        </div>
      </div>
      <div className="member member-7">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">GHANA REDCROSS</h1>
          <h4 className="about">
            A portal for the Redross of Ghana which was was with HTML, CSS, and
            Javascript for the frotend.
          </h4>
          <a
            href="https://redcrossgh.org/"
            target="_blank"
            className="contact-member"
            rel="noreferrer noopener"
          >
            <span>Link</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Members;
