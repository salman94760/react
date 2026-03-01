import React, { useContext } from "react";
import { Link, Outlet,NavLink,useLocation } from 'react-router-dom';
import { TodoContext } from "../context/Context";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
const AdminLayout = () => {
	const {logout} = useContext(TodoContext);
	const location = useLocation();
	
	const getPageTitle = () => {
		if (location.pathname.includes("/admin/add-product")) {
			return "Add Product";
		}
		if (location.pathname.includes("/admin/show-product")) {
    		return "Show Product";
		}
		if (location.pathname.includes("/admin/edit-product")) {
    		return "Edit Product";
		}
  		if (location.pathname.includes("/admin/dashboard")) {
    		return "Dashboard";
  		}
  		return "";
	};
	return (
		<div className="grid grid-cols-4 h-screen">

    {/* ===== LEFT SIDEBAR ===== */}
    <div className="border-r-2 h-screen sticky top-0">
      <h2 className="text-center text-2xl border-b-2 h-[60px] flex items-center justify-center">
       <div className="flex items-center justify-center gap-2 text-2xl font-bold h-[60px] border-b">
  <span className="text-green-600 text-3xl">🛒</span>
  FreshMart
</div>
      </h2>

      <ul>
        <li className="border-b-2">
          <NavLink
            to=""
            end
            className={({ isActive }) =>
              `block p-4 font-medium ${
                isActive
                  ? "bg-black text-white"
                  : "text-black hover:bg-black hover:text-white"
              }`
            }
          >
            Dashboard
          </NavLink>
        </li>

        <li className="border-b-2">
          <NavLink
            to="add-product"
            className={({ isActive }) =>
              `block p-4 font-medium ${
                isActive
                  ? "bg-black text-white"
                  : "text-black hover:bg-black hover:text-white"
              }`
            }
          >
            Add Product
          </NavLink>
        </li>

        <li className="border-b-2">
          <NavLink
            to="show-product"
            className={({ isActive }) =>
              `block p-4 font-medium ${
                isActive
                  ? "bg-black text-white"
                  : "text-black hover:bg-black hover:text-white"
              }`
            }
          >
            Show Product
          </NavLink>
        </li>

        <li className="border-b-2">
          <button
            onClick={()=>{logout('admin')}}
            className="block w-full text-left p-4 font-medium hover:bg-black hover:text-white"
          >
            Log out
          </button>
        </li>
      </ul>
    </div>

    {/* ===== RIGHT CONTENT ===== */}
    <div className="col-span-3 flex flex-col h-screen">

      {/* Header */}
    

<div className="border-b bg-white px-6 h-[60px] flex items-center justify-between">

  {/* Left side - Page Title */}
  <h1 className="text-xl font-semibold">{getPageTitle()}</h1>

  {/* Right side - Actions */}
  <div className="flex items-center gap-6">

    {/* Search Bar */}
    <div className="relative">
      <FiSearch className="absolute top-2.5 left-3 text-gray-400" />
      <input
        type="text"
        placeholder="Search..."
        className="pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none"
      />
    </div>

    {/* Notification */}
    <div className="relative cursor-pointer">
      <FaBell size={18} />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
        3
      </span>
    </div>

    {/* Profile */}
    <div className="flex items-center gap-2 cursor-pointer">
      <FaUserCircle size={22} />
      <span className="text-sm font-medium">Admin</span>
    </div>

  </div>
</div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-4">
        <Outlet />
      </div>

    </div>
  </div>
	);
};

export default AdminLayout;