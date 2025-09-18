import {useState,useEffect} from 'react';
import Modal from "../components/Modal";
const Grocery = () =>{
	const [Product,setProduct] = useState([]);
	const [loading, setLoading] = useState(true);
  	const [error, setError] = useState("");
  	const [isOpen, setIsOpen] = useState(false);
	useEffect(()=>{
		const fetchProducts = async ()=>{
			try{
				const response = await fetch("http://127.0.0.1:8000/api/products");
				const data = await response.json();
				if(response.ok){
					setProduct(data.data);	
				}else{
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

	const addToCart = ()=>{
		const userId = localStorage.getItem('userId');
		if(userId == null && userId == undefined){
			setIsOpen(true);
		}else{
			console.log(userId);
		}
	}

	const addToWishList = ()=>{
		console.log("here1");
	}




	if (loading) return <p>Loading...</p>;
  	if (error) return <p className="text-red-500">{error}</p>;

	return (
		<>
		<Modal type="signIn" setIsOpen={setIsOpen} isOpen={isOpen}/>
			<div className="w-full">
				<img className="w-full h-[330px]" src="" />
			</div>
			<div className="grid grid-cols-6 mt-4">
				{Product.map((item,index)=>{
					if(item.image){
						var imageShow = item.image;
					}else{
						var imageShow = 'common.jpg';
					}
					return (
						<div key={item.id} className="text-black m-1 border rounded p-4 ml-4 my-2">
							<img src={`http://127.0.0.1:8000/uploads/${imageShow}`}  className="h-[150px]"/>
							<div className="text-black">
								<h1>Name: {item.name}</h1>
								<h1>Price: {item.price}/- ({item.unit})</h1>
							
								<p>inc/dec 2</p>
								<div className="flex">
									<button onClick={addToCart} className="mr-[20px] hover:text-sm text-sm bg-black text-white hover:text-black hover:bg-white hover:border border-black rounded py-2 px-2 hover:leading-none hover:px-[0.4rem] hover:py-[0.4rem]">Add to cart</button>
									<button onClick={addToWishList} className="bg-black text-white hover:text-black hover:bg-white hover:border border-black rounded py-2 px-2 hover:text-sm">Whishlist</button>
								</div>
							</div>
						</div>	
					);
				})}
			</div>
		</>
	);
}

export default Grocery;