import React from 'react';
import './Contact.css';

function Contact() {
return (
    <div>
        <h1>Contact Page</h1>
        <p>Get in touch!</p>
        <ul className="contact-list">
            <li>Personal Email: <a href="mailto:kc.takahashi04@gmail.com">kc.takahashi04@gmail.com</a></li>
            <li>School Email: <a href="mailto:kc.takahashi@mail.utoronto.ca">kc.takahashi@mail.utoronto.ca</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/casey-takahashi-35674626b/" target="_blank" rel="noopener noreferrer">Eishi (Casey) Takahashi</a></li>
            <li>Instagram: <a href="https://www.instagram.com/kctaka" target="_blank" rel="noopener noreferrer">@kctaka</a></li>
        </ul>
    </div>
);
}

export default Contact;