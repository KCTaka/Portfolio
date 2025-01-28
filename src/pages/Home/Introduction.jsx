import React from "react";

import './Home.css';

function Introduction() {
    let intro_text = "I am an aspiring Engineering Science Robotics students at the University of Toronto. My main interest consists of; robotics, machine learning, and software development. I am currently looking for a PEY Co-op/internship for the 2025-2026 year. I have yet to have a working experience in either of these fields and am eager to learn more to grow and develop my skills further.";

    return (
        <div className = 'Introduction'>
        <h1>Eishi (Casey) Takahashi</h1>
        <p>{intro_text}</p>
        </div>
    );
    }

export default Introduction;