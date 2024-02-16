import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HospitalHome = () => {
  const categories = [
    "SURGERY",
    "CHECK_UP",
    "CARDIOLOGY",
    "ONCOLOGY",
    "NEUROLOGY",
    "ORTHOPEDICS",
    "PEDIATRICS",
    "GYNECOLOGY"
  ];

  const handleSearch = () => {
    toast.success('Searching for doctors...');
    window.location.href = '/search-doctors';
  };

  return (
    <div className="container mt-5">
      <h2>Hospital Home</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category (Specialization)</label>
          <select className="form-select" id="category">
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="experience" className="form-label">Experience</label>
          <input type="number" className="form-control" id="experience" />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date</label>
          <input type="date" className="form-control" id="date" />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleSearch}>Search</button>
      </form>
    </div>
  );
};

export default HospitalHome;
