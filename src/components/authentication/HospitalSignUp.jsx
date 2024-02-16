import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const HospitalSignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    specialization: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.location || !formData.specialization) {
      toast.error("Please fill in all required fields");
      return;
    }

    fetch("your-backend-url/hospital/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          toast.success("Signup successful!");
        } else {
          toast.error("Signup failed. Please try again later.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Signup failed. Please try again later.");
      });
  };

  return (
    <div className="container">
      <h2 className="mt-4 mb-4">Hospital Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Hospital Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <select
            className="form-control"
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
          >
            <option value="">Select Specialization</option>
            <option value="CHECK_UP">Check Up</option>
            <option value="CARDIOLOGY">Cardiology</option>
            <option value="ONCOLOGY">Oncology</option>
            <option value="NEUROLOGY">Neurology</option>
            <option value="ORTHOPEDICS">Orthopedics</option>
            <option value="PEDIATRICS">Pediatrics</option>
            <option value="GYNECOLOGY">Gynecology</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Sign Up</button>
      </form>
      <Link to="/adcard" className="d-block mt-3">Already have an account? Log In</Link>
    </div>
  );
};

export default HospitalSignUp;
