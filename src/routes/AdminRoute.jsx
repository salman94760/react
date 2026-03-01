import React from 'react';
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import AdminLogin from '../pages/admin/AdminLogin';
import AdminRegister from '../pages/admin/AdminRegister';
import PublicRoute from '../routes/PublicRoute';
import AdminLayout from '../layouts/Layout';

import AdminDashboard from '../pages/admin/AdminDashboard';
import AddProduct from '../pages/admin/AddProduct';
import ShowProduct from '../pages/admin/ShowProduct';

const AdminRouter = () => {
	return (
		<Routes>
			<Route path="admin/login" element={
				<PublicRoute>
					<AdminLogin />
				</PublicRoute>
			} />
			<Route path="admin/register" element={
				<PublicRoute>
					<AdminRegister />
				</PublicRoute>
			} />

			<Route path="admin/dashboard" element={
				<ProtectedRoute>
					<AdminLayout />
				</ProtectedRoute>
			}>
				<Route index element={<AdminDashboard />} />
				<Route path="add-product" element={<AddProduct />} />
				<Route path="show-product" element={<ShowProduct />} />
			</Route>
		</Routes>
	);
}

export default AdminRouter;