import {useState,useEffect,useContext} from 'react';
import Modal from "../../components/Modal";
import {TodoContext} from '../../context/Context';

const Grocery = () =>{
	const {Products,fetchProduct,Loader,loading,addToCart} = useContext(TodoContext);
	const [isOpen, setIsOpen] = useState(false);
	
	useEffect(()=>{
		fetchProduct();
	},[]);

	const goToCart = ()=>{
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

	if (loading) return <Loader />;
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
      <button onClick={()=>addToCart({'id':item.id,'name':item.name,'price':item.price,'user_id':localStorage.getItem('id')})} className="cart-btn"><i className="fas fa-shopping-cart"></i> Add</button>
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