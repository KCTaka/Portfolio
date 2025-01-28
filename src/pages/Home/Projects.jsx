import React from "react";
import Carousel from '../../components/Carousel';

import './Home.css';

let intro_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    
const cards = [
    {
        title: "DCGAN (Deep Convolutional Generative Adversarial Network) using PyTorch and torchrun",
        content: "This project implements a model based on the paper Unsupervised Representation Learning with Deep Convolutional Generative Adversarial Networks and the original GAN paper by Ian Goodfellow et al. The code includes torchrun capabilities for distributed training on a single cluster. The project is mainly for experimentation and educational purposes for myself understanding fundamental concepts of GANs and its archistecture, undergoing the process of training and testing the model" 
    },
    {
        title: "DQN (Deep Q-Network) using PyTorch for Snake game",
        content: "This project implements a reinforcement learning technique, Deep Q-Network (DQN), to play the game of Snake. The code is based on the original DQN paper by DeepMind and the Snake game is implemented using Pygame. Users can train the model with alterable hyperparameters, model architecture, and game settings. "
    },
    {
        title: "Kalman Filtering for Virtual Remote Control Car",
        content: "This project uses PyGame to simulate a car controlled by keyboard inputs and implements a Kalman filter to estimate the car's position. The project is mainly for educational purposes to understand the Kalman filter and its implementation in a simple scenario."
    },
    {
        title: "Neural Network from Scratch (Only using Numpy) + Visualization",
        content: "This project aims to reproduce various modules used in PyTorch to enhance understanding of Machine Learning and Neural Networks. It includes visualization of Fully Connected Neural Networks using standard stochastic gradient descent optimization. The aim is to fully understand how the backpropagation algorithm works and how the weights are updated during training."
    },
]

function Projects() {
    return (
        <div className="Project">
          <h1>My Projects</h1>
          <Carousel cards={cards} />
        </div>
      );
    }

export default Projects;