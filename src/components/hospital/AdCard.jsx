import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AdCard = ({ ad }) => {
  const handleApply = () => {
    if (!ad || !ad.doctorDetails) {
      toast.error('Doctor details not provided!', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      console.log('Applying for ad:', ad);
      toast.success('Applied successfully!', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        {ad ? (
          <>
            <h5 className="card-title">{ad.hospital}</h5>
            <p className="card-text">Category: {ad.category}</p>
            <p className="card-text">Experience: {ad.experience}</p>
            <p className="card-text">Date: {ad.date}</p>
            <p className="card-text">Hours: {ad.hours}</p>
            <p className="card-text">Offer Price: {ad.offerPrice}</p>
            {ad.doctorDetails ? (
              <>
                <p className="card-text">Doctor's Name: {ad.doctorDetails.name}</p>
                <p className="card-text">Doctor's Experience: {ad.doctorDetails.experience}</p>
                <p className="card-text">Doctor's Contact: {ad.doctorDetails.contact}</p>
              </>
            ) : (
              <p className="card-text">Doctor details not provided</p>
            )}
            <button className="btn btn-primary" onClick={handleApply}>Apply</button>
          </>
        ) : (
          <p className="card-text">Ad details not available</p>
        )}
      </div>

    </div>
  );
};

export default AdCard;
