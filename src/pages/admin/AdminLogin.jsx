import {useContext,useState} from 'react';
import {TodoContext} from '../../context/Context';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const AdminLogin = ()=>{
	const [formData,setFormData] = useState({email:"",password:""})
	const {login} = useContext(TodoContext);

	const handleChange = (e)=>{
		const {id,value} = e.target;
		setFormData((prev)=>({...prev,[id]:value}));
	}

	const handleSubmit = (e) => {
		e.preventDefault();
    	login(formData);
    	setFormData({email: "",password: ""});
    };
	return (
		<>
		<Helmet>
        <title>Admin login</title>
        <link rel="icon" type="image/png" href="/home-icon.png" />
      </Helmet>
			<div className="grid grid-cols-2">
				<div className="text-black text-center h-screen content-center"><h2 className="text-[100px] text-italic italic font-medium font-[roboto]">Login</h2></div>
    			<div className="text-black text-center content-center">
    				<form onSubmit={handleSubmit} className="max-w-sm mx-auto border-2 border-gray-500 rounded p-8">

						<div className="mb-5">
							<label htmlFor="email" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email *</label>
    					<input value={formData.email} onChange={handleChange} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
  					</div>

  					<div className="mb-5">
    					<label htmlFor="password" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password *</label>
    					<input value={formData.password} onChange={handleChange} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter password" required />
  					</div>

  					<div className="flex items-start mb-5">
    					<div className="flex items-center h-5">
      					<input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
    					</div>
    					<label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
    					<label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Not registered? <Link className="text-red-500 underline" to="/admin/register">Register now.</Link></label>
  					</div>
  					
  					<button type="submit" className="text-left text-white bg-black hover:bg-white hover:text-black hover:border hover:border-black py-2 px-4 rounded">Submit</button>
  				</form>
  			</div>
			</div>
		</>
	);
}

export default AdminLogin;