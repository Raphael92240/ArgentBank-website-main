import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { AuthUser } from '@/Pages/Auth/Index'

import ALayout from '@/Layouts/ALayout'

const router = () => {
    return (
        <Routes>
            <Route element={<ALayout />}>
                <Route path="/AuthUser" element={<AuthUser />} />

            </Route>
        </Routes>
    );
};

export default router;