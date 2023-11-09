import React from 'react';
import Account from '@/Components/account/Account.jsx';

import './authuser.css';

const AuthUser = () => {
    return (
        <section className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account title="Argent Bank Checking (x8349)" cash="$2,082.79" />
            <Account title="Argent Bank Savings (x6712)" cash="$10,928.42" />
            <Account title="Argent Bank Credit Card (x8349)" cash="$184.30" />
        </section>
    );
};

export default AuthUser;