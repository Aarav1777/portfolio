import React from 'react'
import'./skills.css';
import UIDesign from '../../assests/ui-design2.png';
import WebDesign from'../../assests/website-design2.png';
import dsa from'../../assests/dsa.png';


const Skills = () =>{
  return (
    <section id='skills'>
        <span className="skillTitle"> What I do  </span>
        <span className="skilldesc">I am a B.Tech Computer Science student with a passion for web development,
           programming, and problem-solving. I have experience in front-end and back-end development, 
           data structures & algorithms, and software engineering.  </span>
         <div className="skillBars">
          <div className="skillBar">
            <img src={UIDesign} alt=" UIDesign " className="skillBarImg" />
            <div className="skillBarText">
              <h2> Web Development </h2>
              <p> I design and develop responsive websites using HTML, CSS, JavaScript, and frameworks like React and Node.js.</p>
            </div>
          </div>

          <div className="skillBar">
            <img src={WebDesign} alt=" WebDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Software Development </h2>
              <p>I work on real-world projects, including Java-based applications, database management, and system design. </p>
            </div>
          </div>

          <div className="skillBar">
            <img src={dsa} alt="AppDesign " className="skillBarImg" />
            <div className="skillBarText">
              <h2> Problem Solving & DSA </h2>
              <p>I enjoy solving coding challenges and have experience with Data Structures and Algorithms, improving efficiency in code.</p>
            </div>
          </div>


         </div>

    </section>
  );
}

export default Skills;
 