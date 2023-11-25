import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { accountService } from '@/_Services/accountService';

import { useDispatch } from 'react-redux';


import './signin.css';

const SignIn = () => {

    const [credentials, setcredentials] = useState({
        email: '',
        password: ''
    })
    const dispatch = useDispatch()
    let navigate = useNavigate()


    const onChangelogin = (e) => {
        setcredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()

        accountService.loginUser(credentials)
            .then((response) => {
                accountService.saveToken(response.data.body.token)
                dispatch({
                    type: 'Login/setToken',
                    payload: response.data.body.token
                })
                navigate('/admin/AuthUser')
            })
            .catch((error) => {
                console.log(error)
            })
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

                    <button className="sign-in-button">Sign In</button>
                </form>
            </div>
        </main>
    );
};

export default SignIn;