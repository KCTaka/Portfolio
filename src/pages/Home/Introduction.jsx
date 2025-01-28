import React from "react";

import './Home.css';

function Introduction() {
    let intro_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    return (
        <div className = 'Introduction'>
        <h1>Introduction Page</h1>
        <p>{intro_text} {intro_text} {intro_text} {intro_text}</p>
        </div>
    );
    }

export default Introduction;