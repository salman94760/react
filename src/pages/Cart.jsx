const Cart = ()=>{
	return (
		<>
			<div className="w-full">
				<div className="grid grid-cols-12 p-8 gap-4">
					<div className="col-span-6 m-2 overflow-y-auto h-[600px]">
						<div className="grid grid-cols-2  border border-gray-300 rounded my-4">
							<div className="text-black p-4">image</div>
							<div className="text-black p-4">
								<h1>title: gfbfg</h1>
								<p>price:120</p>
								<p>add del button</p>
								<div className="flex">
									<button type="button" className="w-[100px] mr-2 rounded px-2 py-1 bg-black text-white hover:border hover:border-black">delete</button>
									<button type="button" className="w-[100px] mr-2 rounded px-2 py-1 bg-black text-white hover:border hover:border-black">whishlist</button>
								</div>
							</div>
						</div><div className="grid grid-cols-2  border border-gray-300 rounded my-4">
							<div className="text-black p-4">image</div>
							<div className="text-black p-4">
								<h1>title: gfbfg</h1>
								<p>price:120</p>
								<p>add del button</p>
								<div className="flex">
									<button type="button" className="w-[100px] mr-2 rounded px-2 py-1 bg-black text-white hover:border hover:border-black">delete</button>
									<button type="button" className="w-[100px] mr-2 rounded px-2 py-1 bg-black text-white hover:border hover:border-black">whishlist</button>
								</div>
							</div>
						</div><div className="grid grid-cols-2  border border-gray-300 rounded my-4">
							<div className="text-black p-4">image</div>
							<div className="text-black p-4">
								<h1>title: gfbfg</h1>
								<p>price:120</p>
								<p>add del button</p>
								<div className="flex">
									<button type="button" className="w-[100px] mr-2 rounded px-2 py-1 bg-black text-white hover:border hover:border-black">delete</button>
									<button type="button" className="w-[100px] mr-2 rounded px-2 py-1 bg-black text-white hover:border hover:border-black">whishlist</button>
								</div>
							</div>
						</div>
					</div>
					<div className="col-span-6 border border-gray-300 m-4 p-4">
						<div className="">
							<h1>Gross total: 4534</h1>
							<h1>Discount: 4324</h1>
							<h1>Round off: 4534</h1>
							<h1>Total: 4534</h1>
							<button type="button" className="w-[100px] bg-black text-white px-2 py-1 rounded">Pay now</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Cart;