import {useState,useEffect,useContext} from 'react';
import Modal from "../components/Modal";
import {TodoContext} from '.././context/Context';

const Grocery = () =>{
	const {Products,fetchProduct} = useContext(TodoContext);
	

	// const [Product,setProduct] = useState([]);
	const [loading, setLoading] = useState(true);
  	const [error, setError] = useState("");
  	const [isOpen, setIsOpen] = useState(false);
	useEffect(()=>{
		fetchProduct();
	},[]);

	const addToCart = ()=>{
		// const userId = localStorage.getItem('userId');
		// if(userId == null && userId == undefined){
		// 	setIsOpen(true);
		// }else{
		// 	console.log(userId);
		// }
	}

	const addToWishList = ()=>{
		// console.log("here1");
	}




	// if (loading) return <p>Loading...</p>;
  	// if (error) return <p className="text-red-500">{error}</p>;

	return (
		<>
		<Modal type="signIn" setIsOpen={setIsOpen} isOpen={isOpen}/>
			<div className="w-full bannerdiv">
				
			</div>
			<div className="grid grid-cols-4 mt-4">
				{Products.product.map((item,index)=>{
					if(item.image){
						var imageShow = item.image;
					}else{
						var imageShow = 'common.jpg';
					}
					return (
					<div key={item.id} className="product-card">
  <div className="product-image">
    <img src={`http://127.0.0.1:8000/uploads/${imageShow}`} alt="Fresh Salad" />
  </div>

  <div className="product-content">
    <div className="product-name">{item.name}</div>
    <div className="product-price">{item.price} / {item.unit}</div>

    {/* ✅ NEW DESCRIPTION BLOCK */}
    <div className="product-description">
      <p>{item.description}</p>
    </div>

    <div className="quantity">
      <span>Quantity:</span>
      <div className="qty-btns">
        <button><i className="fas fa-minus"></i></button>
        <span>2</span>
        <button><i className="fas fa-plus"></i></button>
      </div>
    </div>

    <div className="actions">
      <button className="cart-btn"><i className="fas fa-shopping-cart"></i> Add</button>
      <button className="wishlist-btn"><i className="fas fa-heart"></i> Save</button>
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