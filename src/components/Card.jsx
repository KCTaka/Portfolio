import React from 'react';
import './Card.css';

function Card({title, content}) {
    return (
        <div className="Card">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}

export default Card;