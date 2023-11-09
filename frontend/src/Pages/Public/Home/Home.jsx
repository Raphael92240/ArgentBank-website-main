import React from 'react';
import iconchat from '@/Assets/Images/icon-chat.png';
import iconmoney from '@/Assets/Images/icon-money.png';
import iconsecurity from '@/Assets/Images/icon-security.png';
import Hero from '@/Components/hero/Hero.jsx';
import Card from '@/Components/card/Card.jsx';

import "./home.css";

const Home = () => {

    return (
        <main>
            <section className="homepage">
                <Hero title="Promoted Content"
                    p1="No fees."
                    p2="No minimum deposit."
                    p3="High interest rates."
                    text="Open a savings account with Argent Bank today!"
                />

                <section className="features">
                    <h2 className="sr-only">Features</h2>
                    <Card image={iconchat} title="You are our #1 priority" text="Need to talk to a representative? You can get in touch through our
                            24/7 chat or through a phone call in less than 5 minutes." />
                    <Card image={iconmoney} title="More savings means higher rates" text="The more you save with us, the higher your interest rate will be!" />
                    <Card image={iconsecurity} title="Security you can trust" text="We use top of the line encryption to make sure your data and money
                            is always safe." />
                </section>
            </section>
        </main>
    );
};

export default Home;