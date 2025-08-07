import React from 'react';
import './intro.css';
import profilePic from '../../assests/profile_pic.jpg'; // ✅ Make sure path is correct

function Intro() {
  return (
    <section id="intro">
      <div className="intro-row">
        <div className="intro-left">
          <span className="hello">Hello,</span>
          <br></br>
          <span className="introText">
            I'm <span className="intoname">Aarav</span> <br /> a Web Developer & Programmer
          </span>
          <p className="intropara">
            I am a B.Tech Computer Science student passionate about building websites <br />
            and solving problems through code. <br />
            I explore DSA, work on real-world projects, and continuously learn new technologies.
          </p>
          <br />
          <br />
          <br />
          <br />
          
          <div className="buttons-container">
            <a href="/Aarav A2 Ressume.pdf" download="Aarav_A2_Resume.pdf">
              <button className="btn">Download CV</button>
            </a>
          </div>
        </div>

        <div className="intro-right">
          <img src={profilePic} alt="profile" className="intro-img" />
        </div>
      </div>
    </section>
  );
}

export default Intro;
