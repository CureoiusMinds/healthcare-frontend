import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const PostNewAd = () => {

  const [ads, setAds] = useState({
    adType: "normal",
    category: "",
    experience: "",
    date: "",
    hours: "",
    offerPrice:""
});


const personalDetailChange = (e) => {
    const { name, value } = e.target;
    setAds((prevState) => ({
        ...prevState,
        [name]: value,
    }));
};

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here you would handle the submission logic, like sending the data to a server
    console.log(ads);
    toast.success('Ad posted successfully!', {
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
      <h2 className="mb-4">Post New Hospital Ad</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="adType">Select Ad Type:</label>
          <select className="form-select" id="adType" value={adType} onChange={personalDetailChange}>
            <option value="normal">Normal Ad</option>
            <option value="group">Group Ad</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="category">Category:</label>
          <select className="form-select" id="category" value={category} onChange={personalDetailChange}>
            {Object.values(Specialization).map((specialization, index) => (
              <option key={index} value={specialization}>{specialization}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="experience">Experience:</label>
          <input type="text" className="form-control" id="experience" placeholder="Enter experience" value={experience} onChange={personalDetailChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="date">Date:</label>
          <input type="date" className="form-control" id="date" value={date} onChange={personalDetailChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="hours">Hours:</label>
          <input type="number" className="form-control" id="hours" placeholder="Enter hours" value={hours} onChange={personalDetailChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="offerPrice">Offer Price:</label>
          <input type="number" className="form-control" id="offerPrice" placeholder="Enter offer price" value={offerPrice} onChange={personalDetailChange} />
        </div>
        <button type="submit" className="btn btn-primary">Post Ad</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default PostNewAd;
