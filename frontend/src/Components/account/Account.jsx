import React from 'react';
import "./Account.css";

const Account = ({ title, cash, text }) => {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">{cash}</p>
                <p className="account-amount-description">{text}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    );
};

export default Account;