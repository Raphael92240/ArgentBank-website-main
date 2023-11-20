import React from 'react';
import { NavLink } from "react-router-dom";
import Logo from '@/Assets/Images/argentBankLogo.png';

import { useSelector } from 'react-redux';
import { SelectorUser } from '@/_Redux/Selector/SelectorUser.jsx';

import './header.css';

const AHeader = () => {

    const { userName } = useSelector(SelectorUser)


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
                    <NavLink to="/admin/AuthUser" className="main-nav-item" ><i className="fa fa-user-circle"></i>

                        {userName}
                    </NavLink>

                    <NavLink to="/Home" className="main-nav-item" ><i className="fa fa-sign-out"></i>
                        Sign Out</NavLink>
                </div>
            </nav>
        </header>
    );
};

export default AHeader;