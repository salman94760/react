import React from 'react';
import { Routes, Route } from "react-router-dom";

import Grocery from '../pages/shop/Grocery';

const Router = ()=>{
	return (
		<>
        <Routes>
            <Route path="/" element={<Grocery />} />
        </Routes>
		</>
	);
}
export default Router;