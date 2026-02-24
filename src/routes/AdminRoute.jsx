import React from 'react';
import { Routes, Route } from "react-router-dom";

import AdminLogin from '../pages/admin/AdminLogin';
import AdminRegister from '../pages/admin/AdminRegister';
import AdminDashboard from '../pages/admin/AdminDashboard';

const AdminRouter = ()=>{
	return (
		<>
        <Routes>
            <Route path="admin/login" element={<AdminLogin />} />
            <Route path="admin/register" element={<AdminRegister />} />
            <Route path="admin/dashboard" element={<AdminDashboard />} />
        </Routes>
		</>
	);
}
export default AdminRouter;