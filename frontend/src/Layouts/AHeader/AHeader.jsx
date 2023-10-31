import React from 'react';
import { NavLink } from "react-router-dom";
import Logo from '@/Assets/Images/argentBankLogo.png';
import './header.css';

const AHeader = () => {
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
                        Tony</NavLink>

                    <NavLink to="/Home" className="main-nav-item" ><i className="fa fa-sign-out"></i>
                        Sign Out</NavLink>
                </div>
            </nav>
        </header>
    );
};

export default AHeader;