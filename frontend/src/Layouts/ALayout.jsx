import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/Layouts/AHeader/AHeader.jsx';
import Footer from '@/Layouts/AFooter/AFooter.jsx'

const ALayout = () => {
    return (
        <div className='Alayout'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default ALayout;