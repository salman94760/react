import {Link} from 'react-router-dom';
const AddProduct = () =>{
	return (
	<>
	<div className="grid grid-cols-2">
		<div>
			<form className="border-2 border-grey-500 rounded p-8">
				<div className="mb-5">
					<label for="email" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product name</label>
					<input name="name" type="text" id="fullname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Material name" required />
              	</div>

              	<div className="mb-5">
                	<label for="description" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                	<input name="description" type="text" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Material description" required />
              	</div>

              	<div className="grid grid-cols-2">
                	<div className="mb-5 mr-3">
                  		<label for="price" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Price</label>
                  		<input name="price" type="text" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Material Price" required />
                	</div>

                	<div className="mb-5">
                  		<label for="unit" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product unit</label>
                  		<select id="unit" name="unit" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                    		<option>Select unit</option>
                    		<option value="Kg">Kg</option>
                    		<option value="Piece">Piece</option>
                    		<option value="Dozen">Dozen</option>
                  		</select>
                	</div>  
              	</div>

              	<div className="mb-5">
                	<label for="email" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Image</label>
                	<input name="image" accept="image/*" type="file" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full name" />
              	</div>
              	<button type="submit" className="text-left text-white bg-black hover:bg-white hover:text-black hover:border hover:border-black py-2 px-4 rounded">Add</button>
            </form>
		</div>	
		
		<div>
			<div className=" border-grey-500 rounded p-8 pt-0">
            	<label for="email" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preview</label>
                <img className="w-full border border-gray-300 h-[70vh]"/>
            </div>
		</div>	
	</div>
	</>
	);	
}

export default AddProduct;