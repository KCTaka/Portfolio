import React from "react";
import Carousel from '../../components/Carousel';

import './Home.css';

let intro_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    
const cards = [
    {
        title: "PPO (Proximal Policy Optimization) using PyTorch for Any Game Environment",
        content: "This project aims to implement Proximal Policy Optimization only using PyTorch for machine learning. Test game environment would be the Snake game, however, the code should be robust for other game environments." 
    },
    {
        title: "Blob-Like Game using Unity",
        content: "Similar to the game of agario, this project aims to create a game where the player controls a blob and must eat other blobs to grow larger with interesting game mechanics."
    },
    {
        title: "Card Dealing Robot",
        content: "This project aims to create a robot that can shuffle and deal cards for a game of poker. The robot should be able to recognize the cards and deal them to the players in a fair manner."
    },
    {
        title: "InstaPersona (Personality Imitator using Llama-3b)",
        content: "This project aims to create a personality imitator using the Llama-3b model from OpenAI. The user can input a text and the model will generate a response in the style of a given personality from the instagram direct message files."
    },
]

function Experience() {
    return (
        <div className="Experience">
          <h1>Projects in Progress</h1>
          <Carousel cards={cards} />
        </div>
      );
    }

export default Experience;