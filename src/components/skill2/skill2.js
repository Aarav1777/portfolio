import React from 'react'
import './skill2.css'
const Skill2 = () => {

    const skills = [
        { name: "HTML", level: "90%" },
        { name: "CSS", level: "85%" },
        { name: "JavaScript", level: "80%" },
        { name: "React", level: "75%" },
        { name: "Node.js", level: "70%" },
        { name: "Python", level: "60%" }
    ];
  return (
    <div className="skills" id='skillss'>
    <div className="skills-left">
        <h1 className="contactPageTitle">My Skills</h1>
        <h2 className="highlight-text">Develop Skills</h2>
        <p className="skillsDesc">
            I have worked on multiple projects, gaining experience in <strong>web development, backend systems, and UI/UX design.</strong> 
            My technical expertise includes <strong>building scalable applications, optimizing performance,</strong> and creating <strong>user-friendly interfaces.</strong>
        </p>
        <div className="skills-grid">
            {skills.map((skill, index) => (
                <div className="skill-circle" key={index}>
                    <div className="progress" style={{ '--percentage': skill.level }}>
                        <span>{skill.name}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>

    {/* Right Side - Image */}
    {/* <div className="skills-right">
        <img src={MyImage} alt="My Profile" className="profile-img" />
    </div> */}
</div>

  )
}

export default Skill2