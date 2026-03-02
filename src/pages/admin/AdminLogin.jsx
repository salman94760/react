import { useContext, useState } from "react";
import { TodoContext } from "../../context/Context";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const AdminLogin = () => {

  const { login, adminloading } = useContext(TodoContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  /* ================= INPUT ================= */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email.trim())
      return setError("Email required");

    if (!formData.password.trim())
      return setError("Password required");

    setError("");

    try {
      await login(formData);
      setFormData({ email: "", password: "" });
    } catch {
      setError("Invalid credentials");
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Login</title>
      </Helmet>

      <div className="min-h-screen grid md:grid-cols-2">

        {/* LEFT */}
        <div className="hidden md:flex items-center justify-center bg-gray-100">
          <h2 className="text-7xl italic font-semibold">
            Login
          </h2>
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-center p-6">

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md border rounded-xl shadow p-8 space-y-5 bg-white"
          >

            <h2 className="text-xl font-semibold text-center">
              Admin Login
            </h2>

            {error && (
              <p className="text-red-500 text-center">
                {error}
              </p>
            )}

            {/* EMAIL */}
            <div>
              <label className="block mb-2 text-sm">
                Email *
              </label>

              <input
                type="email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="admin@email.com"
                required
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block mb-2 text-sm">
                Password *
              </label>

              <input
                type="password"
                name="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Enter password"
                required
              />
            </div>

            {/* REGISTER */}
            <p className="text-sm text-center">
              Not registered?{" "}
              <Link
                to="/admin/register"
                className="text-red-500 underline"
              >
                Register now
              </Link>
            </p>

            {/* BUTTON */}
            <button
              disabled={adminloading}
              className="w-full bg-black text-white py-2 rounded flex justify-center items-center"
            >
              {adminloading ? (
                <ClipLoader
                  color="white"
                  size={20}
                />
              ) : (
                "Login"
              )}
            </button>

          </form>

        </div>
      </div>
    </>
  );
};

export default AdminLogin;