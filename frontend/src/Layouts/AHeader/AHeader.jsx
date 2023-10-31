import React from 'react';
import { NavLink } from "react-router-dom";
import Logo from '@/Assets/Images/argentBankLogo.png';
import './header.css';

const AHeader = () => {
    return (
        <header>
            <nav class="main-nav">
                <NavLink to="/Home" className="main-nav-logo" >
                    <img
                        class="main-nav-logo-image"
                        src={Logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 class="sr-only">Argent Bank</h1>
                </NavLink>
                <div>
                    <NavLink to="/admin/AuthUser" className="main-nav-item" ><i class="fa fa-user-circle"></i>
                        Tony</NavLink>

                    <NavLink to="/Home" className="main-nav-item" ><i class="fa fa-sign-out"></i>
                        Sign Out</NavLink>
                </div>
            </nav>
        </header>
    );
};

export default AHeader;