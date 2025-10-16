import React, { useContext,useState,useEffect } from "react";
import { TodoContext } from "../context/Context";
import { useNavigate } from 'react-router-dom';
const Register = ()=>{
	const navigate = useNavigate();
	const {userRegister,setLoginUser} = useContext(TodoContext);
	const [formData,setFormData] = useState({fullname:"",email:"",phone:"",address:""});

	const handleChange = (e) => {
    	const { id, value } = e.target;
    	setFormData((prev) => ({ ...prev, [id]: value }));
  	};

  	const handleSubmit = (e) => {
    	e.preventDefault();
    	userRegister(formData);
    	setFormData({fullname: "",email: "",phone: "",address: "",});
    };

    useEffect(()=>{
    	if(localStorage.getItem('id')){
    		setLoginUser({
            	userid: localStorage.getItem('id'),
            	username: localStorage.getItem('name'),
            	useremail: localStorage.getItem('email')
          	});
          	navigate('/material');
        }
    },[]);

    return (
		<>
			<div className="grid grid-cols-2">
				<div className="text-black text-center h-screen content-center"><h2 className="text-[100px] text-italic italic font-medium font-[roboto]">Register</h2></div>
    			<div className="text-black text-center content-center">
    				<form onSubmit={handleSubmit} className="max-w-sm mx-auto border-2 border-grey-500 rounded p-8">
    					<div className="mb-5">
    						<label for="email" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fullname *</label>
    						<input value={formData.fullname} onChange={handleChange} type="text" id="fullname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full name" required />
  						</div>

  						<div className="mb-5">
    						<label for="email" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email *</label>
    						<input value={formData.email} onChange={handleChange} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
  						</div>

  						<div className="mb-5">
    						<label for="email" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone *</label>
    						<input value={formData.phone} onChange={handleChange} type="text" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone" required />
  						</div>

  						<div className="mb-5">
    						<label for="email" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
    							<textarea value={formData.address} onChange={handleChange} id="address" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
  						</div>
  						<button type="submit" className="text-left text-white bg-black hover:bg-white hover:text-black hover:border hover:border-black py-2 px-4 rounded">Register</button>
  					</form>
  				</div>
			</div>
		</>
	);
}

export default Register;