import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TodoContext } from "../../context/Context";

const API_URL = import.meta.env.VITE_API_URL;

const MaterialEdit = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const { addMaterial } = useContext(TodoContext);

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [preview, setPreview] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    unit: "",
    image: null,
  });

  /* ================= AUTH CHECK ================= */
  useEffect(() => {
    if (!localStorage.getItem("id")) {
      navigate("/AdminLogin");
    }
  }, [navigate]);

  /* ================= FETCH PRODUCT ================= */
  useEffect(() => {
    let ignore = false;

    const fetchProduct = async () => {
      try {
        const res = await fetch(`${API_URL}/products/${id}`);
        const data = await res.json();

        if (!ignore) {
          setFormData({
            name: data.data.name,
            description: data.data.description,
            price: data.data.price,
            unit: data.data.unit,
            image: data.data.image,
          });
          setLoading(false);
        }
      } catch {
        setMessage("Failed to load product");
      }
    };

    fetchProduct();

    return () => (ignore = true);
  }, [id]);

  /* ================= INPUT ================= */
  const handleChange = (e) => {

    if (e.target.name === "image") {
      const file = e.target.files[0];

      if (!file) return;

      if (!file.type.startsWith("image/")) {
        setMessage("Only image allowed");
        return;
      }

      if (file.size > 2 * 1024 * 1024) {
        setMessage("Image must be under 2MB");
        return;
      }

      setFormData(prev => ({
        ...prev,
        image: file,
      }));

      setPreview(URL.createObjectURL(file));

    } else {
      setFormData(prev => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  /* ================= MEMORY CLEAN ================= */
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim())
      return setMessage("Name required");

    const data = new FormData();

    data.append("_method", "PUT");

    Object.keys(formData).forEach(key =>
      data.append(key, formData[key])
    );

    data.append(
      "useremail",
      localStorage.getItem("email")
    );

    try {
      await addMaterial(`products/${id}`, data);

      setMessage("Updated Successfully");

      setTimeout(() => navigate("/material"), 1500);

    } catch {
      setMessage("Update failed");
    }
  };

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  /* ================= UI ================= */
  return (
    <div className="flex justify-center p-6">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow rounded-xl p-6 space-y-4"
      >

        <h2 className="text-xl font-semibold text-center">
          Update Material
        </h2>

        {message && (
          <p className="text-red-500 text-center">
            {message}
          </p>
        )}

        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Material Name"
          className="border p-2 w-full rounded"
          required
        />

        <input
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="border p-2 w-full rounded"
          required
        />

        <div className="grid grid-cols-2 gap-3">

          <input
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <select
            name="unit"
            value={formData.unit}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="">Select Unit</option>
            <option value="Kg">Kg</option>
            <option value="Piece">Piece</option>
            <option value="Dozen">Dozen</option>
          </select>

        </div>

        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
        />

        <img
          src={
            preview ||
            `${API_URL}/uploads/${formData.image}`
          }
          alt="preview"
          className="h-28 w-full object-cover border rounded"
        />

        <button
          className="bg-black text-white w-full py-2 rounded"
        >
          Update Product
        </button>

      </form>
    </div>
  );
};

export default MaterialEdit;