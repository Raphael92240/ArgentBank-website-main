import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

import { accountService } from '@/_Services/accountService';

import './signin.css';

const SignIn = () => {
    let navigate = useNavigate()

    const [credentials, setcredentials] = useState({
        email: '',
        password: ''
    })

    const onChangelogin = (e) => {
        setcredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/api/v1/user/login', credentials)
            .then((res) => {
                console.log(res)
                accountService.saveToken(res.data.body.token)
                navigate('/admin/AuthUser')
            })
            .catch((err) => { console.log(err) });
    }

    return (
        <main className="main bg-dark">
            <div className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={onSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" name='email' id="username" value={credentials.email} onChange={onChangelogin} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' id="password" value={credentials.password} onChange={onChangelogin} />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <Link to="/admin/AuthUser" className="sign-in-button">Sign In</Link>
                    <button className="sign-in-button">Sign In</button>
                </form>
            </div>
        </main>
    );
};

export default SignIn;