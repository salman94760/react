import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../context/Context";
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";

const ShowProduct = () => {
  const { Products, fetchProduct } = useContext(TodoContext);

  const [loading, setLoading] = useState(true);

  /* ================= FETCH ================= */
  useEffect(() => {
    const loadProducts = async () => {
      try {
        await fetchProduct();
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [fetchProduct]);

  /* ================= DELETE ================= */
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    console.log("Delete product:", id);
    // deleteProduct(id)
  };

  /* ================= SAFE DATA ================= */
  const productList = Products?.product || [];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <div className="bg-white rounded-2xl shadow-md p-6">

        <h2 className="text-xl font-semibold mb-6">
          All Products
        </h2>

        {loading ? (
          <p className="text-center text-gray-400">
            Loading products...
          </p>
        ) : (
          <div className="overflow-x-auto">

            <table className="w-full text-sm text-left">

              {/* HEADER */}
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

              {/* BODY */}
              <tbody>
                {productList.length > 0 ? (
                  productList.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="p-3">{item.id}</td>

                      {/* IMAGE SAFE LOAD */}
                      <td className="p-3">
                        <img
                          src={item.image || "/placeholder.png"}
                          alt={item.name}
                          loading="lazy"
                          onError={(e) =>
                            (e.target.src = "/placeholder.png")
                          }
                          className="h-12 w-12 object-cover rounded-md border"
                        />
                      </td>

                      <td className="p-3 font-medium">
                        {item.name}
                      </td>

                      <td className="p-3 text-gray-600 max-w-xs truncate">
                        {item.description}
                      </td>

                      <td className="p-3 font-semibold">
                        ₹ {item.price}
                      </td>

                      <td className="p-3">
                        {item.unit}
                      </td>

                      {/* ACTION */}
                      <td className="p-3">
                        <div className="flex justify-center gap-4 text-lg">

                          <button
                            onClick={() => handleDelete(item.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <FaRegTrashAlt />
                          </button>

                          <button className="text-blue-500 hover:text-blue-700">
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
        )}

      </div>
    </div>
  );
};

export default ShowProduct;