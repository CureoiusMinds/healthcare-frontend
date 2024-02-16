import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DoctorProfile = () => {
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    mobileNo: '1234567890',
    DoB: '1990-01-01',
    yearsOfEx: 5,
    underGrad: 'Bachelor of Medicine',
    postGrad: 'Master of Surgery',
    otherQualifications: '',
    prevEmployment: 'Hospital ABC',
    bioNote: 'Experienced surgeon specializing in orthopedics.',
    city: 'New York',
    state: 'NY',
    country: 'USA',
    medicalLicenseId: '123456',
    specialization: 'ORTHOPEDICS'
  });

  const handleEdit = () => {
    // Logic for editing profile
    toast.info('Editing profile...');
  };

  return (
    <div className="container mt-5">
      <h2>Doctor Profile</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{profileData.firstName} {profileData.lastName}</h5>
          <p className="card-text"><strong>Email:</strong> {profileData.email}</p>
          <p className="card-text"><strong>Mobile No:</strong> {profileData.mobileNo}</p>
          <p className="card-text"><strong>Date of Birth:</strong> {profileData.DoB}</p>
          <p className="card-text"><strong>Years of Experience:</strong> {profileData.yearsOfEx}</p>
          <p className="card-text"><strong>Undergraduate Degree:</strong> {profileData.underGrad}</p>
          <p className="card-text"><strong>Postgraduate Degree:</strong> {profileData.postGrad}</p>
          <p className="card-text"><strong>Previous Employment:</strong> {profileData.prevEmployment}</p>
          <p className="card-text"><strong>Bio:</strong> {profileData.bioNote}</p>
          <p className="card-text"><strong>City:</strong> {profileData.city}</p>
          <p className="card-text"><strong>State:</strong> {profileData.state}</p>
          <p className="card-text"><strong>Country:</strong> {profileData.country}</p>
          <p className="card-text"><strong>Medical License ID:</strong> {profileData.medicalLicenseId}</p>
          <p className="card-text"><strong>Specialization:</strong> {profileData.specialization}</p>
          <button className="btn btn-primary" onClick={handleEdit}>Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
