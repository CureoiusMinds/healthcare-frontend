import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchCard from './SearchCard'; 

const DoctorSearch = () => {
  const doctors = [
    { id: 1, name: 'Dr. Meet vasani', specialization: 'Cardiology', experience: 10, chargePerHour: 1500 },
    { id: 2, name: 'Dr. Jayesh', specialization: 'Neurology', experience: 8, chargePerHour: 1200 },
    { id: 3, name: 'Dr.Aditya', specialization: 'Orthopedics', experience: 12, chargePerHour: 1800 },
  ];

  return (
    <div className="container mt-5">
      <h2>Search Results</h2>
      <div className="row">
        {doctors.map(doctor => (
          <div key={doctor.id} className="col-md-4">
            <SearchCard doctor={doctor} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorSearch;
