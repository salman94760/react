import {useState,useEffect, useContext} from 'react';
import { TodoContext } from "../../context/Context";
import { useNavigate } from 'react-router-dom';
const MaterialAdd = ()=>{
	const navigate = useNavigate();
	const {setLoginUser} = useContext(TodoContext);
	useEffect(()=>{
		document.title = "Add material | React 2"; 

		if(!localStorage.getItem('id')){
    		navigate('/login');
        }
 	},[]);



	const [formData,setFormData] = useState({
		name:'',
		description:'',
		price:'',
		image:'',
	});
	const [message, setMessage] = useState("");
	const [preview, setPreview] = useState(null);
	const handleChange = (e)=>{
		if (e.target.name === "image") {
      		const file = e.target.files[0];
      		setFormData({ ...formData, image: file });
      		if (file) {
        		setPreview(URL.createObjectURL(file));
      		}
    	} else {
      		setFormData({ ...formData, [e.target.name]: e.target.value });
    	}
	}

	const handleSubmit = async (e)=>{
  e.preventDefault();

  const data = new FormData();
  data.append("name", formData.name);
  data.append("description", formData.description);
  data.append("price", formData.price);
  data.append("unit", formData.unit);
  data.append("image", formData.image);
// for (let [key, value] of data.entries()) {
//     console.log(key, value);
//   }
  try {
    const response = await fetch("http://127.0.0.1:8000/api/products", {
      method: "POST",
      body: data,
    });

    const result = await response.json();

    if (response.ok) {
      setMessage(result.message);
      setFormData({ name: "", description: "", price: "0.00", image: "" });
      setPreview(null);
    } else {
      setMessage(result.message || "Something went wrong");
    }
  } catch (error) {
    setMessage("Server not reachable");
  }
};


	return (
		<>
			<div className="grid grid-cols-1">
				<div className="text-black text-center"><h2 className="text-[45px] text-center p-4">Add Material</h2></div>
    			<div className="text-black text-center content-center">
    				<form onSubmit={handleSubmit} className="max-w-lg mx-auto border-2 border-grey-500 rounded p-8">
    					<div className="mb-5">
    						<label for="email" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Material name</label>
    						<input name="name" value={formData.name} onChange={handleChange} type="text" id="fullname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Material name" required />
  						</div>

  						<div className="mb-5">
    						<label for="description" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Material Description</label>
    						<input name="description" value={formData.description} onChange={handleChange} type="text" id="fullname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Material description" required />
  						</div>

  						<div className="grid grid-cols-2">
  							<div className="mb-5 mr-3">
    							<label for="price" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Material Price</label>
    							<input name="price" value={formData.price} onChange={handleChange} type="text" id="fullname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Material Price" required />
  							</div>

  							<div className="mb-5">
    							<label for="unit" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Material unit</label>
    							<select value={formData.unit} onChange={handleChange} name="unit" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
    								<option>Select unit</option>
    								<option value="Kg">Kg</option>
    								<option value="Piece">Piece</option>
    								<option value="Dozen">Dozen</option>
    							</select>
  							</div>	
  						</div>

  						<div className="mb-5">
    						<label for="email" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Material Image</label>
    						<input name="image" accept="image/*" onChange={handleChange} type="file" id="fullname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full name" required />
  						</div>
  						<div className="mb-5">
    						<label for="email" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preview</label>
    						<img src={preview} className="w-full border border-gray-300 h-[200px]"/>
  						</div>
  						
  						<button type="submit" className="text-left text-white bg-black hover:bg-white hover:text-black hover:border hover:border-black py-2 px-4 rounded">Add</button>
  					</form>
  					{message && <p>{message}</p>}
  				</div>
			</div>
		</>
	);
}
export default MaterialAdd;