
import React, { useState } from "react";
import axios from "axios";
import "./login.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? "http://localhost:5000/login" : "http://localhost:5000/register";

    try {
      const response = await axios.post(endpoint, formData);
      setMessage(response.data.message);

      if (isLogin) {
        localStorage.setItem("token", response.data.token);
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="body">
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="card p-4" style={{ width: "350px" }}>
          <h2 className="text-center mb-3">{isLogin ? "Login" : "Register"}</h2>
          {message && <p className="text-center text-danger">{message}</p>}
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" name="name" className="form-control" required onChange={handleChange} />
              </div>
            )}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" name="email" className="form-control" required onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" name="password" className="form-control" required onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary w-100">{isLogin ? "Login" : "Register"}</button>
            <p className="mt-3 text-center">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <span className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Register" : "Login"}
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
