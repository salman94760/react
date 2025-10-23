import { NavLink, Outlet } from "react-router-dom";
import {useState,useEffect, useContext} from 'react';
import { TodoContext } from "../context/Context";

const linkStyle = ({ isActive }) => ({
  marginRight: 12,
  textDecoration: "none",
  fontWeight: isActive ? "700" : "400"
});

const Navbar = ()=>{
	
	const navItemClass = "text-[18px] font-medium px-4 py-2 transition-colors duration-300 hover:text-white hover:bg-gray-800 rounded-md cursor-pointer";
	const {logout} = useContext(TodoContext);

	return (
	<>
		<nav className="text-black p-4 flex justify-between items-center border-b-2 border-black m-0">
			<h1 className="text-[25px] font-normal">Grocery</h1>
				<ul className="flex space-x-4">
					<li className={navItemClass}><NavLink style={linkStyle} to="/">Home</NavLink></li>
  				{
  					localStorage.getItem('id')?
  					<>
  						<li className={navItemClass}><strong>{localStorage.getItem('name')}</strong></li>
  						<li className={navItemClass}><NavLink style={linkStyle} className="text-[20px] font-normal hover:text-gray-300" onClick={logout}>Logout</NavLink></li>
  					</>
  					:
  					<>
  					<li><NavLink style={linkStyle} to="/admin-register" className="text-[20px] font-normal hover:text-gray-300">Register</NavLink></li>
  					<li><NavLink style={linkStyle} to="/admin-login" className="text-[20px] font-normal hover:text-gray-300">Login</NavLink></li>
  					</>
  				}
  				
 	 		</ul>
		</nav>
		</>
	);
}
export default Navbar;