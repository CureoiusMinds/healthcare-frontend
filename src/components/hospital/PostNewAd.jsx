import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PostNewAd = () => {
  const [category, setCategory] = useState('');
  const [experience, setExperience] = useState('');
  const [date, setDate] = useState('');
  const [hours, setHours] = useState('');
  const [offerPrice, setOfferPrice] = useState('');

  const Specialization = {
    SURGERY: 'Surgery',
    CHECK_UP: 'Check-up',
    CARDIOLOGY: 'Cardiology',
    ONCOLOGY: 'Oncology',
    NEUROLOGY: 'Neurology',
    ORTHOPEDICS: 'Orthopedics',
    PEDIATRICS: 'Pediatrics',
    GYNECOLOGY: 'Gynecology'
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here you would handle the submission logic, like sending the data to a server
    // This functionality can be added later as per the requirement

    toast.success('Application submitted successfully!', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="container">
      <h2 className="mb-4">Apply for Hospital Ad</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="category">Category:</label>
          <select className="form-select" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
            {Object.values(Specialization).map((specialization, index) => (
              <option key={index} value={specialization}>{specialization}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="experience">Experience:</label>
          <input type="text" className="form-control" id="experience" placeholder="Enter experience" value={experience} onChange={(e) => setExperience(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="date">Date:</label>
          <input type="date" className="form-control" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="hours">Hours:</label>
          <input type="number" className="form-control" id="hours" placeholder="Enter hours" value={hours} onChange={(e) => setHours(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="offerPrice">Offer Price:</label>
          <input type="number" className="form-control" id="offerPrice" placeholder="Enter offer price" value={offerPrice} onChange={(e) => setOfferPrice(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Apply</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default PostNewAd;
