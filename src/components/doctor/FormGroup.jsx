import React, { useState } from 'react';

const FormGroup = () => {
  const [showDoctorSearch, setShowDoctorSearch] = useState(false);
  const [doctors, setDoctors] = useState([]); // State to manage added doctors

  const handleAddDoctorClick = () => {
    setShowDoctorSearch(true);
  };

  // Placeholder function to simulate adding a doctor
  // In a real application, you'd likely be adding a specific doctor selected from search results
  const handleAddDoctorToList = () => {
    const newDoctor = { name: "Doctor Name", specialty: "Specialty" }; // Example doctor data
    setDoctors([...doctors, newDoctor]); // Add the new doctor to the list
    setShowDoctorSearch(false); // Hide search after adding
  };

  const handleSearchDoctor = () => {
    console.log('Searching Doctor...');
    // Implement search logic here
    // After search, you would typically show search results to select and add a doctor from
  };

  const handleCreateGroup = () => {
    console.log('Creating group with doctors:', doctors);
    // Implement group creation logic here
  };

  return (
    <div className='container' style={{marginTop:"100px",marginBottom:"100px"}}>
      <div className='mb-3'>
        <label htmlFor='description' className='form-label'>
          Description
        </label>
        <input type='text' className='form-control' id='description' placeholder='Enter description' />
      </div>

      {doctors.map((doctor, index) => (
        <div key={index} className="alert alert-secondary" role="alert">
          {doctor.name} - {doctor.specialty}
        </div>
      ))}

      {!showDoctorSearch && (
        <button className='btn btn-primary' onClick={handleAddDoctorClick}>
          Add Doctor
        </button>
      )}

      {showDoctorSearch && (
        <div className='mt-3'>
          <div className='input-group mb-3'>
            <input type='text' className='form-control' placeholder='Search doctor by name' aria-label='Doctors name' />
            <button className='btn btn-outline-secondary' type='button' onClick={handleSearchDoctor}>
              Search
            </button>
            {/* Simulate adding a searched doctor */}
            <button className='btn btn-success' type='button' onClick={handleAddDoctorToList}>
              Add Member
            </button>
          </div>
        </div>
      )}

      {doctors.length > 0 && (
        <button className='btn btn-success ms-3' onClick={handleCreateGroup}>
          Create Group
        </button>
      )}
    </div>
  );
};

export default FormGroup;
