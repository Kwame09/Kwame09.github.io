import "./home.css";
import img from "../props/membersImage/mainCircle.jpg";
import Buttons from "../button/button";

function Home() {
  return (
    <div id="home" className="container home-container">
      <div className="logo">
        <div className="hover-show active">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>

        <img src={img} alt="" />
      </div>

      <h2>
        <span>About Me</span> <br />
        <p>
          I am a self-taught front-end developer from living in the western part
          of Ghana west Africa with a passion for crafting beautiful and
          functional web experiences. For the past 2 years, I've been on a
          self-directed journey into the world of front-end development.
          <br />
          Fueled by curiosity and a love for problem-solving, I dove headfirst
          into learning HTML, CSS, and JavaScript. Online resources, tutorials,
          and personal projects became my classroom, and the web became my
          playground. Today, I possess a strong foundation in front-end
          technologies and a knack for building user-friendly and responsive
          websites that come alive across all devices.
          <br />
          I'm constantly pushing myself to stay up-to-date with the
          ever-evolving world of web development. I'm a firm believer in the
          power of collaboration and the magic that happens when creativity
          meets functionality. This portfolio is a testament to my journey and a
          glimpse into the kind of developer I am. Let's connect and see what we
          can build together!
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
