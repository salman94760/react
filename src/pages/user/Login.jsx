import {NavLink} from 'react-router-dom';
const Login = ()=>{
	return (
	<>
	<div class="bg-white font-sans">
		<div class="grid grid-cols-1 md:grid-cols-6 min-h-screen">
			<div class="col-span-3 bg-red-50 flex flex-col justify-center items-center relative overflow-hidden">
				<img src="http://127.0.0.1:8000/uploads/common.jpg" alt="Fruits" class="absolute inset-0 w-full h-full object-cover opacity-70"/>
				<div class="absolute inset-0 bg-black/40"></div>
				<div class="relative z-10 text-center text-white">
					<h1 class="text-5xl font-extrabold drop-shadow-lg">Login</h1>
					<p class="mt-4 text-lg font-medium drop-shadow">Welcome back to your grocery store 🍉</p>
				</div>
			</div>

			<div class="col-span-3 flex justify-center items-center p-10 bg-white">
				<div class="w-full max-w-md">
					<h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Login to Your Account</h2>
					<form class="space-y-5">
						<div>
							<label for="email" class="block text-gray-700 font-semibold mb-2">Email Address</label>
							<input type="email" id="email" placeholder="Enter your email" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"/>
          				</div>

          				<div>
          					<label for="password" class="block text-gray-700 font-semibold mb-2">Password</label>
          					<input type="password" id="password" placeholder="Enter your password" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"/>
          				</div>

          				<div class="flex items-center justify-between text-sm">
          					<label class="flex items-center space-x-2 text-gray-600">
              					<input type="checkbox" class="h-4 w-4 text-black focus:ring-black border-gray-300 rounded" />
              					<span>Remember me</span>
            				</label>
            				<a href="#" class="text-red-500 hover:underline">Forgot password?</a>
          				</div>

          				<button type="submit" class="w-full bg-black text-white font-bold py-3 rounded-md border border-transparent hover:bg-white hover:text-black hover:border-black transition">Login</button>
          			</form>

          			<p class="mt-6 text-center text-gray-600 text-sm">Don’t have an account?
          				<a href="#" className="text-black font-semibold hover:underline"><NavLink to="/register" className=" font-normal font-bold"><b>Register</b></NavLink></a>
        			</p>
      			</div>
    		</div>
  		</div>
  	</div>
  	</>
	);
}
export default Login;