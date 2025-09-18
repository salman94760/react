import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

const MaterialEdit = ()=>{
	const navigate = useNavigate();
	const { id } = useParams();
  	const [product, setProduct] = useState(null);
  	const [formData, setFormData] = useState({
    	name: "",
    	description: "",
    	image: "",
  	});
  	const [message, setMessage] = useState("");
	
	useEffect(() => {
    	fetch(`http://127.0.0.1:8000/api/products/${id}`)
      		.then((res) => res.json())
      		.then((data) => {
      			setFormData({name:data.data.name,description:data.data.description,image:data.data.image});
        		setProduct(data.data); // API se data state me save
      	}).catch((err) => {
        	console.error("Error fetching product:", err);
      	});
  	}, [id]);

  	const handleChange = (e) => {
    	setFormData({ ...formData, [e.target.name]: e.target.value });
  	};

  	const handleSubmit = async (e) => {
  		e.preventDefault();
  		try {
      		const response = await fetch(`http://127.0.0.1:8000/api/products/${id}`, {
        		method: "PUT",
        		headers: {
          			"Content-Type": "application/json",
        		},
        		body: JSON.stringify(formData),
      		});

      		const data = await response.json();
      		if (response.ok) {
        		setMessage("Product updated successfully");
        		setTimeout(() => navigate("/material"), 2000); // 2 sec baad home pe redirect
      		} else {
        		setMessage(data.message || "Failed to update");
      		}
    	} catch (error) {
      		setMessage("Server not reachable");
    	}
  	};

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
    						<input name="description"  value={formData.description} defaultvalue={product.description} onChange={handleChange} type="text" id="fullname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Material description" required />
  						</div>

  						<div className="mb-5">
    						<label for="email" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Edit item image</label>
    						<input name="image" value={formData.image} defaultvalue={product.image} onChange={handleChange} type="text" id="fullname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full name" required />
  						</div>
  						<div className="mb-5">
    						<label for="email" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preview image</label>
    						<img src="" className="w-full border border-gray-300 h-[100px]"/>
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