import {Link} from 'react-router-dom';
const ShowProduct = () =>{
	return (
	<>
	<div className="grid grid-cols-1">
		<table class="border-collapse border border-gray-400 m-4">
			<thead>
				<tr>
					<th class="border border-gray-400 p-2">Product name</th>
					<th class="border border-gray-400 p-2">Product Description</th>
					<th class="border border-gray-400 p-2">Product Price</th>
					<th class="border border-gray-400 p-2">Product unit</th>
					<th class="border border-gray-400 p-2">Product Image</th>
					<th class="border border-gray-400 p-2">Action</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="border border-gray-400 p-2">Cell 1</td>
					<td class="border border-gray-400 p-2">Cell 2</td>
					<td class="border border-gray-400 p-2">Cell 2</td>
					<td class="border border-gray-400 p-2">Cell 2</td>
					<td class="border border-gray-400 p-2">Cell 2</td>
					<td class="border border-gray-400 p-2">Cell 2</td>
				</tr>		
			</tbody>
		</table>
	</div>
	</>
	);	
}

export default ShowProduct;