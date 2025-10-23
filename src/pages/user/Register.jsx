import {NavLink} from 'react-router-dom';
const Register = ()=>{
	return (
	<>
	<div className="bg-white font-sans">
		<div className="grid grid-cols-1 md:grid-cols-6 min-h-screen">
			<div className="col-span-3 bg-red-50 flex flex-col justify-center items-center relative overflow-hidden">
				<img src="http://127.0.0.1:8000/uploads/common.jpg" alt="Fruits" className="absolute inset-0 w-full h-full object-cover opacity-70"/>
				<div className="relative z-10 text-center text-white">
        			<h1 className="text-5xl font-extrabold drop-shadow-lg">Register</h1>
        			<p className="mt-4 text-lg font-medium drop-shadow">Fresh groceries, delivered to your door 🍎</p>
      			</div>
      			<div className="absolute inset-0 bg-black/40"></div>
    		</div>

    		<div className="col-span-3 flex justify-center items-center p-10 bg-white">
      			<div className="w-full max-w-md">
        			<h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create a New Account</h2>
        			<form className="space-y-5">
        				<div>
        					<label for="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
        					<input type="text" id="name" placeholder="Enter your full name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"/>
          				</div>

          				<div>
          					<label for="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
          					<input type="email" id="email" placeholder="Enter your email" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"/>
          				</div>

          				<div>
          					<label for="phone" className="block text-gray-700 font-semibold mb-2">Phone</label>
            				<input type="text" id="phone" placeholder="Enter your phone" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"/>
          				</div>

          				<div>
            				<label for="address" className="block text-gray-700 font-semibold mb-2">Address Details</label>
            				<textarea id="address" placeholder="House no., street, landmark, area..." rows="4" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"></textarea>
            			</div>

            			<button type="submit" className="w-full bg-black text-white font-bold py-3 rounded-md border border-transparent hover:bg-white hover:text-black hover:border-black transition">Register</button>
            		</form>

            		<p className="mt-6 text-center text-gray-600 text-sm">Already have an account ?&nbsp;

          				<a href="#" className="text-black font-semibold hover:underline"><NavLink to="/login" className=" font-normal font-bold"><b>Login</b></NavLink></a>
        			</p>
      			</div>
    		</div>
  		</div>
  	</div>
  	</>
	);
}
export default Register;

/*
<li><NavLink style={linkStyle} to="/register" className="text-[20px] font-normal hover:text-gray-300">Register</NavLink></li>
  					<li><NavLink style={linkStyle} to="/login" className="text-[20px] font-normal hover:text-gray-300">Login</NavLink></li>*/