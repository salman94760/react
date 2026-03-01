import {FaBoxOpen,FaShoppingCart,FaRupeeSign,FaExclamationTriangle,} from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Total Products</p>
            <h2 className="text-3xl font-bold mt-2">2,390</h2>
            <p className="text-green-500 text-sm mt-1">▲ 4.7%</p>
          </div>
          <div className="bg-green-100 p-4 rounded-xl">
            <FaBoxOpen className="text-green-600 text-2xl" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Total Orders</p>
            <h2 className="text-3xl font-bold mt-2">560</h2>
            <p className="text-green-500 text-sm mt-1">▲ 6.2%</p>
          </div>
          <div className="bg-red-100 p-4 rounded-xl">
            <FaShoppingCart className="text-red-500 text-2xl" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Total Revenue</p>
            <h2 className="text-3xl font-bold mt-2">₹1,25,000</h2>
            <p className="text-green-500 text-sm mt-1">▲ 9.1%</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-xl">
            <FaRupeeSign className="text-blue-600 text-2xl" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Low Stock Alerts</p>
            <h2 className="text-3xl font-bold mt-2">8 Products</h2>
          </div>
          <div className="bg-yellow-100 p-4 rounded-xl">
            <FaExclamationTriangle className="text-yellow-500 text-2xl" />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-6 mt-10">
        <div className="col-span-2 bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-4">Sales Chart</h2>
          
          <div className="h-52 bg-gradient-to-r from-green-100 to-green-200 rounded-xl flex items-end p-4">
            <div className="w-full h-32 bg-green-500 rounded opacity-30"></div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-100 p-4 rounded-xl">
              <p className="text-gray-500 text-sm">Weekly Sales</p>
              <h3 className="font-bold text-lg mt-1">2,750</h3>
              <p className="text-green-500 text-sm">▲ +9.8%</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-xl">
              <p className="text-gray-500 text-sm">Monthly Sales</p>
              <h3 className="font-bold text-lg mt-1">₹1,25,000</h3>
              <p className="text-green-500 text-sm">▲ +15.2%</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Top Selling Products</h2>
            <button className="text-sm bg-gray-100 px-3 py-1 rounded-lg">
              View All
            </button>
          </div>

          <ul className="space-y-4">
            {[
              { name: "Apple", units: "430 units", color: "bg-red-500" },
              { name: "Milk", units: "350 units", color: "bg-blue-500" },
              { name: "Rice", units: "290 units", color: "bg-yellow-500" },
              { name: "Bread", units: "260 units", color: "bg-orange-500" },
              { name: "Tomato", units: "220 units", color: "bg-green-500" },
            ].map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span
                    className={`${item.color} text-white w-7 h-7 flex items-center justify-center rounded-full text-sm`}
                  >
                    {index + 1}
                  </span>
                  <span>{item.name}</span>
                </div>
                <span className="text-gray-500">{item.units}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-10">
        <div className="col-span-2 bg-white p-6 rounded-2xl shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Recent Orders</h2>
            <button className="text-sm bg-gray-100 px-3 py-1 rounded-lg">
              View All
            </button>
          </div>

          <div className="space-y-4">
            {[
              { id: "#1256", name: "Rahim", amount: "₹1,200", status: "Completed", color: "bg-green-500" },
              { id: "#1255", name: "Anushka", amount: "₹650", status: "Pending", color: "bg-blue-500" },
              { id: "#1254", name: "Santosh", amount: "₹650", status: "Completed", color: "bg-green-500" },
              { id: "#1253", name: "Asha", amount: "₹320", status: "Canceled", color: "bg-red-500" },
              { id: "#1250", name: "Ramesh", amount: "₹1,150", status: "Completed", color: "bg-green-500" },
            ].map((order, index) => (
              <div key={index} className="flex justify-between items-center border-b pb-3">
                <div className="flex gap-6">
                  <span className="font-semibold">{order.id}</span>
                  <span>{order.name}</span>
                  <span>{order.amount}</span>
                </div>
                <span className={`${order.color} text-white px-3 py-1 rounded-full text-xs`}>
                  {order.status}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-4">Low Stock Products</h2>
          <ul className="space-y-4">
            {[
              { name: "Apple", units: "430 units", color: "bg-red-500" },
              { name: "Milk", units: "350 units", color: "bg-blue-500" },
              { name: "Rice", units: "290 units", color: "bg-yellow-500" },
              { name: "Bread", units: "260 units", color: "bg-orange-500" },
              { name: "Tomato", units: "220 units", color: "bg-green-500" },
              { name: "Potato", units: "210 units", color: "bg-purple-500" },
              { name: "Onion", units: "190 units", color: "bg-pink-500" },
              { name: "Eggs", units: "175 units", color: "bg-indigo-500" },
              { name: "Cheese", units: "160 units", color: "bg-teal-500" },
              { name: "Sugar", units: "150 units", color: "bg-gray-500" },
            ].map((item, index) => (
            <li key={index} className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className={`${item.color} text-white w-7 h-7 flex items-center justify-center rounded-full text-sm`}>
                  {index + 1}
                </span>
                <span>{item.name}</span>
              </div>
              <span className="text-gray-500">{item.units}</span>
            </li>
          ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default AdminDashboard;