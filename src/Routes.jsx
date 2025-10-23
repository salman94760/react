import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
import Material from "./pages/admin/Material";
import MaterialAdd from "./pages/admin/Add";
import MaterialEdit from "./pages/admin/Edit";

/***frontend start****/
import Grocery from "./pages/Grocery";
import Cart from "./pages/Cart";
import Thankyou from "./pages/Thankyou";
import NotFound from "./pages/NotFound";

/*****admin crud section ********/
import AdminLogin from "./pages/AdminLogin";
import AdminRegister from "./pages/AdminRegister";
const Router = ()=>{
	return (
		<>
        <Routes>
            {/*****admin section******/}
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin-register" element={<AdminRegister />} />
            
            {/*****admin section******/}

            <Route path="/" element={<Grocery />} />
            {/*<Route path="/login" element={<Login />} />*/}
            {/*<Route path="/register" element={<Register />} />*/}

            <Route path="/material" element={<Material />} />
            <Route path="/add-material" element={<MaterialAdd />} />
            <Route path="/edit-material/:id" element={<MaterialEdit />} />

            <Route path="/cart" element={<Cart />} />
            <Route path="/thankyou" element={<Thankyou />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
		</>
	);
}
export default Router;