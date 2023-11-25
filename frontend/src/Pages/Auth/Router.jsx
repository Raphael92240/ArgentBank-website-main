import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { AuthUser } from '@/Pages/Auth/Index'

import Layout from '@/Layouts/Layout'

const router = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/AuthUser" element={<AuthUser />} />

            </Route>
        </Routes>
    );
};

export default router;