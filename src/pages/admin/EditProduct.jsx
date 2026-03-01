import { useEffect, useState,useContext } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { TodoContext } from "../../context/Context";

const MaterialEdit = ()=>{
	const navigate = useNavigate();
	const { id } = useParams();
	const {addMaterial} = useContext(TodoContext);	
  	const [product, setProduct] = useState(null);
  	const [formData, setFormData] = useState({
    	name: "",
    	description: "",
    	price: "",
    	unit: "",
    	image: "",
  	});
  	const [message, setMessage] = useState("");
	const [preview, setPreview]  = useState(null);
	useEffect(() => {
		if(!localStorage.getItem('id')){
    		navigate('/AdminLogin');
        }
    	fetch(`http://127.0.0.1:8000/api/products/${id}`)
      		.then((res) => res.json())
      		.then((data) => {
      			setFormData({name:data.data.name,description:data.data.description,price:data.data.price,unit:data.data.unit,image:data.data.image});
        		setProduct(data.data); // API se data state me save
      	}).catch((err) => {
        	console.error("Error fetching product:", err);
      	});
  	}, [id]);

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

		if (!formData.name.trim()) {
    		setMessage("Product name is required");
    		return;
  		}
		
		if (!formData.description.trim()) {
    		setMessage("Product description is required");
    		return;
  		}
		
		if (!formData.price || isNaN(formData.price) || Number(formData.price) <= 0) {
    		setMessage("Please enter a valid price");
    		return;
  		}

  		if (!formData.unit) {
    		setMessage("Please select a unit");
    		return;
  		}
		const data = new FormData();
		data.append("_method", "PUT");
  		data.append("name", formData.name);
  		data.append("description", formData.description);
  		data.append("price", formData.price);
  		data.append("unit", formData.unit);
  		data.append("image", formData.image);
  		data.append("useremail", localStorage.getItem('email'));
  		addMaterial('products/'+id,data);
  	}











  	// const handleSubmit = async (e) => {
  	// 	e.preventDefault();
  	// 	try {
    //   		const response = await fetch(`http://127.0.0.1:8000/api/products/${id}`, {
    //     		method: "PUT",
    //     		headers: {
    //       			"Content-Type": "application/json",
    //     		},
    //     		body: JSON.stringify(formData),
    //   		});

    //   		const data = await response.json();
    //   		if (response.ok) {
    //     		setMessage("Product updated successfully");
    //     		setTimeout(() => navigate("/material"), 2000); // 2 sec baad home pe redirect
    //   		} else {
    //     		setMessage(data.message || "Failed to update");
    //   		}
    // 	} catch (error) {
    //   		setMessage("Server not reachable");
    // 	}
  	// };

  	if (!product) {
    	return <p>Loading...</p>;
  	}

	return (
		<>
			<div className="grid grid-cols-1">
				<div className="text-black text-center"><h2 className="text-[45px] text-center p-4">Update Material</h2></div>
    			<div className="text-black text-center content-center">
    				<form onSubmit={handleSubmit} className="max-w-sm mx-auto border-2 border-grey-500 rounded p-8">
    					<div className="mb-5">
    						<label for="email" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Edit item</label>
    						<input name="name"  value={formData.name} defaultvalue={product.name} onChange={handleChange} type="text" id="fullname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Material name" required />
  						</div>

  						<div className="mb-5">
    						<label for="email" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Edit item description</label>
    						<input name="description"  value={formData.description} defaultvalue={product.description} onChange={handleChange} type="text" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Material description" required />
  						</div>
  						<div className="grid grid-cols-2">
  							<div className="mb-5 mr-3">
    							<label for="price" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Price</label>
    							<input name="price" value={formData.price} defaultvalue={product.price} onChange={handleChange} type="text" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Material Price" required />
  							</div>

  							<div className="mb-5">
    							<label for="unit" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product unit</label>
    							<select value={formData.unit} id="unit" defaultvalue={product.unit} onChange={handleChange} name="unit" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
    								<option>Select unit</option>
    								<option value="Kg">Kg</option>
    								<option value="Piece">Piece</option>
    								<option value="Dozen">Dozen</option>
    							</select>
  							</div>	
  						</div>
  						<div className="mb-5">
    						<label for="email" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Edit item image</label>
    						<input name="image" accept="image/*" onChange={handleChange} type="file" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full name" />
  						</div>
  						<div className="mb-5">
    						<label for="email" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preview image</label>
    						<img
  src={preview ? preview : `http://127.0.0.1:8000/uploads/${formData.image}`}
  className="w-full border border-gray-300 h-[100px]"
  alt="Preview"
/>
  						</div>


  						
  						<button type="submit" className="text-left text-white bg-black hover:bg-white hover:text-black hover:border hover:border-black py-2 px-4 rounded">Update</button>
  					</form>
  					 {message && <p className="mt-2 text-center">{message}</p>}
  				</div>
			</div>
		</>
	);
}
export default MaterialEdit;