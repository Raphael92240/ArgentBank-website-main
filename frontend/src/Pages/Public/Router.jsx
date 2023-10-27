import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, SignIn, } from '@/Pages/Public/Index'

import Layout from '@/Layouts/Layout'

const router = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="" element={<Navigate to="/Home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/SignIn" element={<SignIn />} />
            </Route>
        </Routes>
    );
};

export default router;