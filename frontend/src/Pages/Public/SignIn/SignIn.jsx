import React from 'react';
import './signin.css';

const SignIn = () => {
    return (
        <main className="main bg-dark">
            <div className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label for="username">Username</label
                        ><input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label for="password">Password</label
                        ><input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" /><label for="remember-me"
                        >Remember me</label
                        >
                    </div>
                    <a href="./user.html" className="sign-in-button">Sign In</a>
                    <button className="sign-in-button">Sign In</button>
                </form>
            </div>
        </main>
    );
};

export default SignIn;