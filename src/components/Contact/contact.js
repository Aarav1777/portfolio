import React, { useRef } from 'react';
import './contact.css';
// import MyImage from '../../assests/microsoft.png';
import emailjs from '@emailjs/browser';

const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React", level: "75%" },
    { name: "Node.js", level: "70%" },
    { name: "Python", level: "60%" }
];

const Contact = () => {
    const form = useRef(); // Needed for email sending

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm(
            'service_84h3fxj',
            'template_l0a0tzf',
            form.current,
            'sKr4qLn4IPejTpaaU'
        )
        .then(
            (result) => {
                console.log('SUCCESS!', result.text);
                alert('Email Sent Successfully!');
            },
            (error) => {
                console.error('FAILED...', error);
                alert('Email Failed to Send. Check Console.');
            }
        );
    };

    return (
        <section id="contactPage">
            {/* Skills Section */}
            <div className="skills">
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

            {/* Contact Section */}
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">
                    Please fill out the form below to discuss any worry 
                </span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className='name' placeholder='Your Name' name='from_name' required />
                    <input type="email" className='email' placeholder='Your Email' name='from_email' required />
                    <textarea className='msg' name="message" rows="5" placeholder='Your Message' required></textarea>
                    <button type='submit' className="submitBtn">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
