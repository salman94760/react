import { useParams,useNavigate } from "react-router-dom";
const Modal = ({type,setIsOpen,isOpen})=>{
	const navigate = useNavigate();
	if (!isOpen) return null;
	const goToRegisterPage = ()=>{
		setTimeout(() => navigate("/register"), 2000);
	}

	return (
		<>
		<div className="p-8">
			<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300">
				<div className="bg-white rounded-lg shadow-lg w-[450px] p-6 transform transition-transform duration-300 scale-95 animate-scale-in">
					
					<h2 className="text-xl font-bold mb-4">
  						{type === 'signIn' 
  						? 
  							<div className="flex justify-between items-center p-4 border-b border-gray-200">
  								<div className="text-xl font-bold">Sign In</div>
  								<div  onClick={() => setIsOpen(false)} className="text-xl font-bold cursor-pointer px-3 py-1 border border-gray-400 rounded hover:border-red-500 hover:text-red-500">X</div>
							</div> 
						: 'Other Modal'
						}
					</h2>

            		{
            			type === 'signIn'?
            			<>
            			<form className="max-w-sm mx-auto border-2 border-grey-500 rounded p-8">

						<div className="mb-5">
							<label for="email" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email *</label>
    					<input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
  					</div>

  					<div className="mb-5">
    					<label for="password" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password *</label>
    					<input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter password" required />
  					</div>

  					<div className="flex items-start mb-5">
    					<div className="flex items-center h-5">
      					<input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    					</div>
    					
    						<label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  					</div>
  					
  					<button type="submit" className="text-left text-white bg-black hover:bg-white hover:text-black hover:border hover:border-black py-2 px-4 rounded">Submit</button>
  					
  				</form>
  				<button onClick={goToRegisterPage} type="button" className="ml-4 text-left text-white bg-black hover:bg-white hover:text-black hover:border hover:border-black py-2 px-4 rounded">Register</button>
  				</>
            			:
            			<p className="mb-4">This modal has smooth fade and scale animations using Tailwind CSS!</p>
            		}


            		{
            			type === 'signIn' ? '' : <div className="flex justify-end">
              			<button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">Close</button>
            		</div>}



            		
          		</div>
        	</div>
        </div>
  		</>
	);
}
export default Modal;