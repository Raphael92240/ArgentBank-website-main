import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Home } from '@/Pages/Public/Index'
import { AuthUser } from '@/Pages/Auth/Index'

import Layout from '@/Layouts/Layout'

const router = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/AuthUser" element={<AuthUser />} />

            </Route>
        </Routes>
    );
};

export default router;