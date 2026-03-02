import { useContext, useState, useEffect } from "react";
import { TodoContext } from "../../context/Context";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ClipLoader } from "react-spinners";
import { msgError } from "../../utils/helpers";

const AdminRegister = () => {

  const navigate = useNavigate();
  const { userRegister, setLoginUser, adminloading } =
    useContext(TodoContext);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
    role: "admin",
  });

  const [error, setError] = useState("");

  /* ================= INPUT ================= */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  /* ================= VALIDATION ================= */
  const validateForm = () => {

    if (!formData.fullname.trim())
      return "Name required";

    if (!/\S+@\S+\.\S+/.test(formData.email))
      return "Invalid email";

    if (!/^[0-9]{10}$/.test(formData.phone))
      return "Phone must be 10 digits";

    return null;
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      msgError(validationError);
      return;
    }

    setError("");

    try {
      await userRegister(formData);

      setFormData({
        fullname: "",
        email: "",
        phone: "",
        address: "",
        role: "admin",
      });

    } catch {
      setError("Registration failed");
    }
  };

  /* ================= AUTO LOGIN ================= */
  useEffect(() => {

    const id = localStorage.getItem("id");

    if (id) {
      setLoginUser({
        userid: id,
        username: localStorage.getItem("name"),
        useremail: localStorage.getItem("email"),
      });

      navigate("/material");
    }

  }, [navigate, setLoginUser]);

  return (
    <>
      <Helmet>
        <title>Admin Register</title>
      </Helmet>

      <div className="min-h-screen grid md:grid-cols-2">

        {/* LEFT */}
        <div className="hidden md:flex items-center justify-center bg-gray-100">
          <h2 className="text-7xl italic font-semibold">
            Register
          </h2>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center items-center p-6">

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md bg-white shadow rounded-xl p-8 space-y-4"
          >

            <h2 className="text-xl font-semibold text-center">
              Admin Registration
            </h2>

            {error && (
              <p className="text-red-500 text-center">
                {error}
              </p>
            )}

            <input
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              placeholder="Full Name"
              className="border p-2 w-full rounded"
            />

            <input
              type="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="border p-2 w-full rounded"
            />

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="border p-2 w-full rounded"
            />

            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="border p-2 w-full rounded"
            />

            <p className="text-sm text-center">
              Have an account?{" "}
              <Link
                to="/admin/login"
                className="text-red-500 underline"
              >
                Sign in
              </Link>
            </p>

            <button
              disabled={adminloading}
              className="w-full bg-black text-white py-2 rounded flex justify-center"
            >
              {adminloading ? (
                <ClipLoader color="white" size={20} />
              ) : (
                "Register"
              )}
            </button>

          </form>

        </div>
      </div>
    </>
  );
};

export default AdminRegister;