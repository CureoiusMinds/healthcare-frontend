import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchCard = ({ doctor }) => {
  const handleRequest = () => {
    toast.success(`Requested appointment with ${doctor.name}`);
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{doctor.name}</h5>
        <p className="card-text">Specialization: {doctor.specialization}</p>
        <p className="card-text">Experience: {doctor.experience} years</p>
        <p className="card-text">Charge per hour: Rs.{doctor.chargePerHour}</p>
        <button className="btn btn-primary" onClick={handleRequest}>Request Appointment</button>
      </div>
    </div>
  );
};

export default SearchCard;
