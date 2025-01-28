import React from 'react';
import './Dropdown.css';

function Dropdown(items) {
    return (
        <div className="Dropdown">
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}