import React, { useRef } from 'react';
import './contact.css';
// import MyImage from '../../assests/microsoft.png';
import emailjs from '@emailjs/browser';



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
