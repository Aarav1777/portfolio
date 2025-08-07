import React from 'react';
import './intro.css';
import bg from '../../assests/myImageAA.png';
// import bg from '../../assests/myImageAA.png';


function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="intoname">Aarav</span> <br /> a Web Developer & Programmer
        </span>
        <p className="intropara">
          I am a B.Tech Computer Science student passionate about building websites <br />
          and solving problems through code. <br />
          I explore DSA, work on real-world projects, and continuously learn new technologies.
        </p>

        {/* Buttons container for horizontal alignment */}
        <div className="buttons-container">
          {/* Download CV Button */}
          {/* <a href="/Aarav A2 Ressume.pdf" download="Aa.pdf">
           */}
           <a href="/Aarav A2 Ressume.pdf" download="Aarav_A2_Resume.pdf">
            <button className="btn">
              Download CV
            </button>
          </a>
        </div>
      </div>
      {/* <img src={bg} alt="profile" className="bg" />
       */}
       <img src={bg} alt="profile-pic" className="bg" />

      
       {/* <div class="bg" style="background-image: url('your-image.png');"></div> */}

    </section>
  );
}

export default Intro;
