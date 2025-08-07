import React from 'react';
import './skill2.css';

const Skill2 = () => {
  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React", level: "75%" },
    { name: "Node.js", level: "70%" },
    { name: "Python", level: "60%" },
    { name: "Java", level: "75%", special: true }
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h1 className="skills-title">My Skills</h1>
        <h2 className="skills-subtitle">Technical Expertise</h2>
        <p className="skills-description">
          I specialize in <strong>web development, backend systems, and scalable applications</strong>. I’m always focused on <strong>creating intuitive interfaces</strong> and <strong>writing efficient, maintainable code</strong>.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            skill.special ? (
              <div className="skill-bar-container" key={index}>
                <span className="skill-bar-label">{skill.name}</span>
                <div className="skill-bar">
                  <div
                    className="skill-bar-fill"
                    style={{ width: skill.level }}
                  ></div>
                </div>
                <span className="skill-bar-percentage">{skill.level}</span>
              </div>
            ) : (
              <div className="skill-item" key={index}>
                <div
                  className="skill-progress"
                  style={{ background: `conic-gradient(#0056b3 ${skill.level}, #ddd 0)` }}
                >
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}</span>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill2;
