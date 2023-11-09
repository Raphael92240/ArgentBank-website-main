import React from 'react';
import "./Card.css";

const Card = ({ title, image, text }) => {
    return (
        <div className="feature-item">
            <img src={image} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>
                {text}
            </p>
        </div>
    );
};

export default Card;