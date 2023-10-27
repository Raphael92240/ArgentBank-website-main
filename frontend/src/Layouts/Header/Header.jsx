import React from 'react';
import { NavLink } from "react-router-dom";
import Logo from '@/Assets/Images/argentBankLogo.png';
import './Header.css';

const Header = () => {
    return (
        <header>
            <nav class="main-nav">
                <NavLink to="/home" className="main-nav-logo" >
                    <img
                        class="main-nav-logo-image"
                        src={Logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 class="sr-only">Argent Bank</h1>
                </NavLink>
                <div>
                    <NavLink to="/sign-in" className="main-nav-item" ><i class="fa fa-user-circle"></i>
                        Sign In</NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Header;