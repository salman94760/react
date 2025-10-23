import { useState, useEffect,useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";
import { TodoContext } from "../../context/Context";
import '../../assets/product.css';
const Dashboard = ()=>{
	const navigate = useNavigate();
	const {deleteProduct,Products,fetchProduct} = useContext(TodoContext);	

	const [products, setProducts] = useState([]);
  	const [loading, setLoading] = useState(true);
  	const [error, setError] = useState("");

  	console.log(Products);


	useEffect(()=>{
		document.title = "Material";

		if(!localStorage.getItem('id')){
    		navigate('/admin-login');
        }else{
        	fetchProduct();
        }
    },[]);
	
	// if (loading) return <p>Loading...</p>;
  	// if (error) return <p className="text-red-500">{error}</p>;

	return (
	<>
		<div className="w-full p-8">
			<h1 className="-mt-10 text-[45px] text-center p-4">Product List</h1>
			<div class="add-button">
       			<button>
       				<NavLink to="/add-material" className="text-[16px] font-normal hover:text-gray-300"><i class="fa fa-plus"></i> Add Product</NavLink>




            		
        		</button>


        		











    		</div>

    		<div class="table-container">
        		<table className="border-gray-300 border">
            		<thead>
                		<tr>
                    		<th>ID</th>
                    		<th>Name</th>
                    		<th>Description</th>
                    		<th>Image</th>
                    		<th>Action</th>
                		</tr>
            		</thead>
            		<tbody>
            		{Products.product.map((item,index)=>{
  						return (
  							<tr key={item.id}>
                    			<td>{item.id}</td>
                    			<td>{item.name}</td>
                    			<td>{item.description}</td>
                    			<td><img class="product-img" src={`http://127.0.0.1:8000/uploads/`+item.image} onerror="this.src='https://via.placeholder.com/80?text=No+Image'" /></td>
                    			<td>
                        			<button onClick={() => navigate(`/edit-material/${item.id}`)} className="btn edit" title="Edit"><i class="fa fa-edit"></i></button>
                        			<button onClick={() => deleteProduct(item.id)} className="btn delete" title="Delete"><i class="fa fa-trash"></i></button>
                    			</td>
                			</tr>
                		); 
  					})}
            	</tbody>
        	</table>
    	</div>
	</div>
	</>
	);
}

export default Dashboard;