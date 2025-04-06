import React, { useState } from 'react';  // Step 1: Import useState
import './intro.css';
import bg from '../../assests/image.png';

function Intro() {
  // Step 2: State to toggle the visibility of the CV
  const [showCV, setShowCV] = useState(false);

  // Step 3: Function to toggle the visibility of the resume
  const toggleCV = () => {
    setShowCV(!showCV);  // Toggle between true and false
  };

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
          {/* Show CV Button */}
          <button className="btn" onClick={toggleCV}>
            {showCV ? "Hide CV" : "Show CV"} {/* Button text changes based on state */}
          </button>

          {/* Download Resume Button */}
         
          <a href="/resume.pdf" download="Aarav_Resume.pdf">
            <button className="btn">
              Download Resume
            </button>
          </a>
        </div>

        {/* Step 5: Conditionally render the resume PDF inside iframe */}
        {showCV && (
          <iframe
            src="/resume.pdf"  // Path to your resume in the public folder
            width="100%"
            height="600px"  // Adjust the height as needed
            title="Resume"
            className="resume-iframe"
          ></iframe>
        )}
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
}

export default Intro;
