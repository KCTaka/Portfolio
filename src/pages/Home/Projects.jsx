import React from "react";

import Card from '/src/components/Card';

import './Home.css';

function Projects() {
    let intro_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    
    const cards = [
        {
            title: "Card 1",
            content: intro_text
        },
        {
            title: "Card 2",
            content: intro_text
        },
        {
            title: "Card 3",
            content: intro_text
        },
        {
            title: "Card 4",
            content: intro_text
        },
        {
            title: "Card 5",
            content: intro_text
        },
        {
            title: "Card 6",
            content: intro_text
        },
        {
            title: "Card 7",
            content: intro_text
        }

    ]

    return (
        <div className="Project">
        <h1>Projects</h1>
        <div className="card-container">
            {cards.map((card, index) => (
                <Card key={index} title={card.title} content={card.content} />
            ))}
        </div>
        </div>
    );
    }

export default Projects;