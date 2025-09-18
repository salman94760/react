import { NavLink, Outlet } from "react-router-dom";
import {useState,useEffect} from 'react';
const linkStyle = ({ isActive }) => ({
  marginRight: 12,
  textDecoration: "none",
  fontWeight: isActive ? "700" : "400"
});

const Navbar = ()=>{
	const [userId,setUserId] = useState(''); 
	useEffect(()=>{
		var userId = localStorage.getItem('userId');
		if(userId == null && userId == undefined){
			setUserId(userId);
		}
	},[]);
	return (
		<>
		<nav className="text-black p-4 flex justify-between items-center border-b-2 border-black m-0">
  			<h1 className="text-[25px] font-normal">Basics</h1>
  			<ul className="flex space-x-4">
  				<li><NavLink style={linkStyle} to="/" className="text-[20px] font-normal hover:text-gray-300">Home</NavLink></li>
  				{
  					userId?
  					<li className="text-[20px] font-normal hover:text-gray-300">Salman khan</li>
  					:
  					<>
  					<li><NavLink style={linkStyle} to="/register" className="text-[20px] font-normal hover:text-gray-300">Register</NavLink></li>
  					<li><NavLink style={linkStyle} to="/login" className="text-[20px] font-normal hover:text-gray-300">Login</NavLink></li>
  					</>
  				}
  				
 	 		</ul>
		</nav>
		</>
	);
}
export default Navbar;