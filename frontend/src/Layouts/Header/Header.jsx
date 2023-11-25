// Assurez-vous que vous avez bien exporté votre reducer comme suit dans votre fichier ReducerLogin.js
// Si vous utilisez createSlice, cela ressemble à ceci :
// export const ReducerLogin = createSlice({ ... });

// Dans votre composant Header :

import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '@/Assets/Images/argentBankLogo.webp';

import { useSelector, useDispatch } from 'react-redux';
import { SelectorUser } from '@/_Redux/Selector/SelectorUser.jsx';
import { SelectorLogin } from '@/_Redux/Selector/SelectorLogin.jsx';
import { accountService } from '@/_Services/accountService';
import { loggout } from "@/_Redux/Reducer/ReducerLogin";
import './header.css';

const Header = () => {
    const { token } = useSelector(SelectorLogin);
    const { userName } = useSelector(SelectorUser);
    const [firstName, setFirstName] = useState("");
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const setInfos = async () => {
        const decodedToken = await accountService.getProfile(token);
        setFirstName(decodedToken.firstName);
    };

    useEffect(() => {
        if (token) {
            setInfos();
        }
        // eslint-disable-next-line
    }, [token]);

    const handleLogout = () => {
        localStorage.removeItem('token');

        dispatch(loggout());

        navigate('/Home');
    };

    return (
        <header>
            <nav className="main-nav">
                <NavLink to="/Home" className="main-nav-logo" >
                    <img
                        className="main-nav-logo-image"
                        src={Logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                <div>
                    {token && (
                        <>
                            <NavLink to="/admin/AuthUser" className="main-nav-item" >
                                <i className="fa fa-user-circle"></i>
                                {userName === null ? firstName : userName}
                            </NavLink>
                            <button className="main-nav-item" onClick={handleLogout}>
                                <i className="fa fa-sign-out"></i>
                                Sign Out
                            </button>
                        </>
                    )}
                    {!token && (
                        <NavLink to="/SignIn" className="main-nav-item" >
                            Sign in
                        </NavLink>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
