import { useState, useEffect,useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";
const Dashboard = ()=>{
	const navigate = useNavigate();
	const [products, setProducts] = useState([]);
  	const [loading, setLoading] = useState(true);
  	const [error, setError] = useState("");

  	const handleDelete = async (id) => {
  		try {
    		const response = await fetch(`http://127.0.0.1:8000/api/products/${id}`, {method: "DELETE",});
    		const data = await response.json();
    		if (response.ok) {
      			setError("Product deleted successfully");
      			setProducts(products.filter((item) => item.id !== id));
    		} else {
      			setError(data.message || "Failed to delete");
    		}
  		} catch (error) {
    		setError("Server not reachable");
  		}
	};


	useEffect(()=>{
		document.title = "Material | React 2";

		if(!localStorage.getItem('id')){
    		navigate('/login');
        }







		const fetchProducts = async()=>{
			try{
				const response = await fetch("http://127.0.0.1:8000/api/products");
        		const data = await response.json();
        		if (response.ok) {
          			setProducts(data.data);
        		} else {
          			setError(data.message || "Failed to fetch products");
        		}

			}catch(err){
				setError("Server not reachable");	
			}finally{
				setLoading(false);
			}
		}
		fetchProducts();
	},[]);
	if (loading) return <p>Loading...</p>;
  	if (error) return <p className="text-red-500">{error}</p>;

	return (
		<>
		<div className="w-full p-8">
			<div><button className="btn btn-success"><NavLink to="/add-material" className="text-[20px] font-normal hover:text-gray-300">Add(+)</NavLink></button></div>
			<h2 className="-mt-10 text-[45px] text-center p-4">Product list</h2>
		<table className="w-full border-collapse border border-gray-800 text-center">
  			<thead>
    			<tr>
      				<th className="border border-gray-300">ID</th>
      				<th className="border border-gray-300">Name</th>
      				<th className="border border-gray-300">Description</th>
      				<th className="border border-gray-300">Image</th>
      				<th className="border border-gray-300">Action</th>
    			</tr>
  			</thead>
  			<tbody>
  			{products?.map((item,index)=>{
  				return (
  					<tr key={item.id}>
      					<td className="border border-gray-300">{item.id}</td>
      					<td className="border border-gray-300">{item.name}</td>
      					<td className="border border-gray-300">{item.description}</td>
      					<td className="border border-gray-300"><img className="w-[170px]" src={`http://127.0.0.1:8000/uploads/`+item.image} /></td>
      					<td className="border border-gray-300">
      						<button className="bg-blue-300 rounded py-1 px-3 m-1" onClick={() => navigate(`/edit-material/${item.id}`)}>Edit</button>
      						<button onClick={() => handleDelete(item.id)} className="bg-red-500 rounded py-1 px-3 m-1">Delete</button>
      					</td>
    				</tr>
  				); 
  			})}
  			</tbody>
		</table>
	</div>
		</>
	);
}

export default Dashboard;