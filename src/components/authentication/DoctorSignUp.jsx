import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DoctorSignup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobileNo: '',
    DoB: '',
    yearsOfEx: '',
    underGrad: '',
    postGrad: '',
    otherQualifications: '',
    prevEmployment: '',
    bioNote: '',
    city: '',
    state: '',
    country: '',
    medicalLicenseId: '',
    specialization: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Signup successful!');
  };

  return (
    <div className="container mt-5">
      <h2>Doctor Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input type="text" className="form-control" name="firstName" value={formData.firstName} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Mobile Number</label>
          <input type="text" className="form-control" name="mobileNo" value={formData.mobileNo} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Date of Birth</label>
          <input type="date" className="form-control" name="DoB" value={formData.DoB} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Years of Experience</label>
          <input type="number" className="form-control" name="yearsOfEx" value={formData.yearsOfEx} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Undergraduate Degree</label>
          <input type="text" className="form-control" name="underGrad" value={formData.underGrad} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Postgraduate Degree</label>
          <input type="text" className="form-control" name="postGrad" value={formData.postGrad} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Other Qualifications</label>
          <input type="text" className="form-control" name="otherQualifications" value={formData.otherQualifications} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Previous Employment</label>
          <input type="text" className="form-control" name="prevEmployment" value={formData.prevEmployment} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Bio Note</label>
          <textarea className="form-control" name="bioNote" value={formData.bioNote} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">City</label>
          <input type="text" className="form-control" name="city" value={formData.city} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">State</label>
          <input type="text" className="form-control" name="state" value={formData.state} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Country</label>
          <input type="text" className="form-control" name="country" value={formData.country} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Medical License ID</label>
          <input type="text" className="form-control" name="medicalLicenseId" value={formData.medicalLicenseId} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Specialization</label>
          <select className="form-select" name="specialization" value={formData.specialization} onChange={handleChange}>
            <option value="">Select Specialization</option>
            <option value="SURGERY">Surgery</option>
            <option value="CHECK_UP">Check Up</option>
            <option value="CARDIOLOGY">Cardiology</option>
            <option value="ONCOLOGY">Oncology</option>
            <option value="NEUROLOGY">Neurology</option>
            <option value="ORTHOPEDICS">Orthopedics</option>
            <option value="PEDIATRICS">Pediatrics</option>
            <option value="GYNECOLOGY">Gynecology</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default DoctorSignup;
