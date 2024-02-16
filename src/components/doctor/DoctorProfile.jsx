import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DoctorProfile = () => {
    const [profileData, setProfileData] = useState({
      firstName: '',
      lastName: '',
      email: '',
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
      specialization: '',
    });
  
    useEffect(() => {
      const fetchProfile = async () => {
        try {
          const jwtToken = sessionStorage.getItem('jwtToken');
          const response = await axios.get('https://localhost:8443/doctor/1/profile', {
            headers: {
              Authorization: `Bearer ${jwtToken}`
            }
          });
          setProfileData(response.data);
        } catch (error) {
          console.error('Failed to fetch profile:', error);
          toast.error('Failed to fetch profile data');
        }
      };
  
      fetchProfile();
    }, []);
  
    const handleEdit = async () => {
      // Example logic for editing profile
      try {
        const jwtToken = sessionStorage.getItem('jwtToken');
        await axios.put('https://localhost:8443/doctor/1/profile', profileData, {
          headers: {
            Authorization: `Bearer ${jwtToken}`
          }
        });
        toast.info('Profile updated successfully.');
      } catch (error) {
        console.error('Failed to update profile:', error);
        toast.error('Failed to update profile');
      }
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
