import { Link, Outlet,NavLink } from 'react-router-dom';

const AdminLayout = () => {
	return (
		<div className="grid grid-cols-4 min-h-screen">
			<div className="h-auto border-x-2">
				<h2 className="text-center text-2xl border-b-2 pb-2 h-[50px] flex items-center justify-center">
					Grocery
				</h2>

				<ul>
					<li className="border-b-2">
						<NavLink to="" end className={
							({ isActive }) =>`block p-4 font-medium ${isActive? "bg-black text-white": "text-black hover:bg-black hover:text-white"}`
						} >Dashboard</NavLink>
					</li>

					<li className="border-b-2">
						<NavLink to="add-product" end className={
							({ isActive }) =>`block p-4 font-medium ${isActive? "bg-black text-white": "text-black hover:bg-black hover:text-white"}`
						} >Add Product</NavLink>
					</li>

					<li className="border-b-2">
						<NavLink to="show-product" end className={
							({ isActive }) =>`block p-4 font-medium ${isActive? "bg-black text-white": "text-black hover:bg-black hover:text-white"}`
						} >Show Product</NavLink>
					</li>
				</ul>
			</div>

			<div className="col-span-3">
				<div className="grid grid-cols-4 border-b-2 p-4 h-[50px]">
					Header
				</div>

				<div className="grid grid-cols-1 m-4">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default AdminLayout;