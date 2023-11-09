import React from 'react';

import "./Hero.css";

const Hero = ({ title, p1, p2, p3, text }) => {
    return (
        <div className="hero">
            <section className="hero-content">
                <h2 className="sr-only">{title}</h2>
                <p className="subtitle">{p1}</p>
                <p className="subtitle">{p2}</p>
                <p className="subtitle">{p3}</p>
                <p className="text">{text}</p>
            </section>
        </div>
    );
};

export default Hero;