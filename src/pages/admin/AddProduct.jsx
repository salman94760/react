import React, { useState, useEffect } from "react";

const AddProduct = () => {

  /* ================= STATE ================= */
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    unit: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /* ================= INPUT CHANGE ================= */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* ================= IMAGE CHANGE ================= */
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    // ✅ type validation
    if (!file.type.startsWith("image/")) {
      setError("Only image files allowed");
      return;
    }

    // ✅ size validation (2MB)
    if (file.size > 2 * 1024 * 1024) {
      setError("Image must be under 2MB");
      return;
    }

    setError("");

    setFormData((prev) => ({
      ...prev,
      image: file,
    }));

    setPreview(URL.createObjectURL(file));
  };

  /* ================= MEMORY CLEANUP ================= */
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const data = new FormData();

      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      // ✅ Example API call
      // await axios.post("/api/product", data);

      console.log("Submitted:", formData);

      alert("Product Added Successfully");

      // reset
      setFormData({
        name: "",
        description: "",
        price: "",
        unit: "",
        image: null,
      });

      setPreview(null);

    } catch (err) {
      setError("Something went wrong");
    }

    setLoading(false);
  };

  /* ================= UI ================= */
  return (
    <div className="grid grid-cols-3 gap-8 p-6 bg-gray-100 min-h-screen">

      {/* ========= FORM ========= */}
      <div className="col-span-2 bg-white rounded-2xl shadow-md p-8">

        <h2 className="text-xl font-semibold mb-6">
          Add New Product
        </h2>

        {error && (
          <p className="text-red-500 mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* NAME */}
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Product Name"
            required
            className="w-full border p-3 rounded-lg"
          />

          {/* DESCRIPTION */}
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Product Description"
            required
            className="w-full border p-3 rounded-lg"
          />

          {/* PRICE + UNIT */}
          <div className="grid grid-cols-2 gap-5">
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price"
              required
              className="border p-3 rounded-lg"
            />

            <select
              name="unit"
              value={formData.unit}
              onChange={handleChange}
              required
              className="border p-3 rounded-lg"
            >
              <option value="">Select Unit</option>
              <option value="Kg">Kg</option>
              <option value="Piece">Piece</option>
              <option value="Dozen">Dozen</option>
            </select>
          </div>

          {/* IMAGE */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border p-3 rounded-lg"
          />

          {/* BUTTON */}
          <button
            disabled={loading}
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-lg disabled:opacity-50"
          >
            {loading ? "Adding..." : "Add Product"}
          </button>

        </form>
      </div>

      {/* ========= PREVIEW ========= */}
      <div className="bg-white rounded-2xl shadow-md p-6">

        <h2 className="text-lg font-semibold mb-4">
          Preview
        </h2>

        <div className="border-2 border-dashed h-[400px] flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden">

          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="object-contain w-full h-full"
            />
          ) : (
            <p className="text-gray-400">
              Image preview will appear here
            </p>
          )}

        </div>

      </div>

    </div>
  );
};

export default AddProduct;