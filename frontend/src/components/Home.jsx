
import React, { useState } from "react";
import axios from "axios";
import "./upload.css";

const Upload = () => {
  const [formData, setFormData] = useState({ title: "", description: "", image: null });
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("image", formData.image);
    try {
      await axios.post("http://localhost:5000/upload", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage("Recipe uploaded successfully!");
    } catch (error) {
      setMessage("Error uploading recipe");
    }
  };
  return (
    <div className="body">
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="card p-4 w-50">
          <h2 className="text-center mb-3">Upload Recipe</h2>
          {message && <p className="text-center text-success">{message}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Recipe Title</label>
              <input type="text" name="title" className="form-control" placeholder="Enter recipe title" required onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea name="description" className="form-control" rows="3" placeholder="Enter description" required onChange={handleChange}></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Upload Recipe Image</label>
              <input type="file" className="form-control" required onChange={handleFileChange} />
            </div>
            <button type="submit" className="btn btn-primary w-100">Submit Recipe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Upload;
