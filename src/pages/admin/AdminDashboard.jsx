const AdminDashboard = () =>{
	return (
		<>
    <div className="grid grid-cols-4">
      <div className="h-auto  border-x-2">
        <h2 className="text-center text-2xl border-b-2 pb-2 h-[100px] flex items-center justify-center">Grocery</h2>
        <ul>
          <li className="border-b-2 p-4">Dashboard</li>
          <li className="border-b-2 p-4">Add Material</li>
          <li className="border-b-2 p-4">Show Material</li>
          <li className="border-b-2 p-4">Log out</li>
        </ul>
      </div>
      <div className="col-span-3">
        <div className="grid grid-cols-4 border-b-2 p-4  h-[100px]">sdcsdcsdc</div>
        <div className="grid grid-cols-4 m-4">
          <div className="m-4 w-[200px]">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <p className="text-xs tracking-widest text-gray-400 uppercase">Posts</p>
              <h2 className="text-3xl font-semibold text-gray-700 mt-2">2,390</h2>
              <p className="mt-2 text-sm font-medium text-green-500">▲ 4.7%</p>
              <div className="h-10 mt-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded"></div>
            </div>
          </div>

          <div className="m-4 w-[200px]">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <p className="text-xs tracking-widest text-gray-400 uppercase">Posts</p>
              <h2 className="text-3xl font-semibold text-gray-700 mt-2">2,390</h2>
              <p className="mt-2 text-sm font-medium text-green-500">▲ 4.7%</p>
              <div className="h-10 mt-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded"></div>
            </div>
          </div>

          <div className="m-4 w-[200px]">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <p className="text-xs tracking-widest text-gray-400 uppercase">Posts</p>
              <h2 className="text-3xl font-semibold text-gray-700 mt-2">2,390</h2>
              <p className="mt-2 text-sm font-medium text-green-500">▲ 4.7%</p>
              <div className="h-10 mt-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded"></div>
            </div>
          </div>

          <div className="m-4 w-[200px]">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <p className="text-xs tracking-widest text-gray-400 uppercase">Posts</p>
              <h2 className="text-3xl font-semibold text-gray-700 mt-2">2,390</h2>
              <p className="mt-2 text-sm font-medium text-green-500">▲ 4.7%</p>
              <div className="h-10 mt-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
		</>
	);	
}

export default AdminDashboard;