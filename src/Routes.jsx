import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Material from "./pages/admin/Material";
import MaterialAdd from "./pages/admin/Add";
import MaterialEdit from "./pages/admin/Edit";

/***frontend start****/
import Grocery from "./pages/Grocery";
import Cart from "./pages/Cart";
import Thankyou from "./pages/Thankyou";
import NotFound from "./pages/NotFound";

const Router = ()=>{
	return (
		<>
			  <Routes>
        <Route path="/" element={<Grocery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/material" element={<Material />} />
        <Route path="/add-material" element={<MaterialAdd />} />
        <Route path="/edit-material/:id" element={<MaterialEdit />} />

        {/*<Route path="/grocery" element={<Grocery />} />*/}
        <Route path="/cart" element={<Cart />} />
        <Route path="/thankyou" element={<Thankyou />} />
         <Route path="*" element={<NotFound />} />

     </Routes>
		</>
	);
}
export default Router;