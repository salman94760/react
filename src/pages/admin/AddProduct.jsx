import React, { useState } from "react";

const AddProduct = () => {

  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-8 p-6 bg-gray-100 min-h-screen">

        {/* ================= FORM SECTION ================= */}
        <div className="col-span-2 bg-white rounded-2xl shadow-md p-8">

          <h2 className="text-xl font-semibold mb-6">
            Add New Product
          </h2>

          <form className="space-y-5">

            {/* Product Name */}
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Product Name
              </label>
              <input
                name="name"
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter product name"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block mb-2 text-sm font-medium">
                Product Description
              </label>
              <textarea
                name="description"
                rows="3"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter product description"
                required
              />
            </div>

            {/* Price & Unit */}
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label htmlFor="price" className="block mb-2 text-sm font-medium">
                  Product Price
                </label>
                <input
                  name="price"
                  type="number"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter price"
                  required
                />
              </div>

              <div>
                <label htmlFor="unit" className="block mb-2 text-sm font-medium">
                  Product Unit
                </label>
                <select
                  name="unit"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option>Select unit</option>
                  <option value="Kg">Kg</option>
                  <option value="Piece">Piece</option>
                  <option value="Dozen">Dozen</option>
                </select>
              </div>
            </div>

            {/* Image Upload */}
            <div>
              <label htmlFor="image" className="block mb-2 text-sm font-medium">
                Product Image
              </label>
              <input
                name="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full border border-gray-300 rounded-lg p-3 cursor-pointer"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black border border-black transition-all"
            >
              Add Product
            </button>

          </form>
        </div>

        {/* ================= PREVIEW SECTION ================= */}
        <div className="bg-white rounded-2xl shadow-md p-6">

          <h2 className="text-lg font-semibold mb-4">
            Preview
          </h2>

          <div className="border-2 border-dashed border-gray-300 rounded-xl h-[400px] flex items-center justify-center overflow-hidden bg-gray-50">

            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="object-contain h-full w-full"
              />
            ) : (
              <p className="text-gray-400 text-sm">
                Image preview will appear here
              </p>
            )}

          </div>

        </div>

      </div>
    </>
  );
};

export default AddProduct;