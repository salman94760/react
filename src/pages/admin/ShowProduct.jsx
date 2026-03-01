import { useContext, useEffect } from "react";
import { TodoContext } from "../../context/Context";
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";

const ShowProduct = () => {
  const { Products, fetchProduct } = useContext(TodoContext);

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <div className="p-6 bg-gray-100 min-h-screen">

        <div className="bg-white rounded-2xl shadow-md p-6">

          <h2 className="text-xl font-semibold mb-6">
            All Products
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">

              {/* ================= TABLE HEADER ================= */}
              <thead>
                <tr className="bg-black text-white">
                  <th className="p-3">ID</th>
                  <th className="p-3">Image</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Description</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Unit</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>

              {/* ================= TABLE BODY ================= */}
              <tbody>
                {Products.product?.length > 0 ? (
                  Products.product.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b hover:bg-gray-50 transition"
                    >
                      <td className="p-3">{item.id}</td>

                      <td className="p-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-12 w-12 object-cover rounded-md border"
                        />
                      </td>

                      <td className="p-3 font-medium">
                        {item.name}
                      </td>

                      <td className="p-3 text-gray-600">
                        {item.description}
                      </td>

                      <td className="p-3 font-semibold">
                        ₹ {item.price}
                      </td>

                      <td className="p-3">
                        {item.unit}
                      </td>

                      {/* ACTION BUTTONS */}
                      <td className="p-3">
                        <div className="flex items-center justify-center gap-4 text-lg">

                          <button className="text-red-500 hover:text-red-700 transition">
                            <FaRegTrashAlt />
                          </button>

                          <button className="text-blue-500 hover:text-blue-700 transition">
                            <FaEdit />
                          </button>

                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="7"
                      className="text-center py-6 text-gray-400"
                    >
                      No Products Found
                    </td>
                  </tr>
                )}
              </tbody>

            </table>
          </div>

        </div>

      </div>
    </>
  );
};

export default ShowProduct;