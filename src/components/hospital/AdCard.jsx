import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AdCard = (ad) => {
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

  const handleReject=()=>{
    
  }

  return (
    <div className="my-4">
      <div className="text-start rounded-5 px-5" style={{ border: "2px solid green" }}>
        {ad ? (
          <>
            <div className='row lead'>
                <h5 className="card-title display-5">{ad.hospital}</h5>
              <div className='col-md-4 col-12'>

                <p className="card-text">Category: {ad.category}</p>
                <p className="card-text">Date: {ad.date}</p>
              </div>
              <div className='col-md-4 col-12'>
                <p className="card-text">Experience: {ad.experience}</p>
              </div>
              <div className='col-md-4 col-12'>
                <p className="card-text">Hours: {ad.hours}</p>
                <p className="card-text">Offer Price: {ad.offerPrice}</p>
              </div>
            </div>
            <div className='row'>
              {ad.doctorDetails ? (
                <>
                  <p className="card-text">Doctor's Name: {ad.doctorDetails.name}</p>
                  <p className="card-text">Doctor's Experience: {ad.doctorDetails.experience}</p>
                  <p className="card-text">Doctor's Contact: {ad.doctorDetails.contact}</p>
                </>
              ) : (
                <p className="card-text">Doctor details not provided</p>
              )}
            </div>
            <div className='row text-end my-2'>
              <div className='col-md-6 col-12'>

              </div>
              <div className='col-md-6 col-12'>
            <button className="btn btn-success mx-4 " onClick={handleApply}>Accept</button>
            <button className="btn btn-danger " onClick={handleReject}>Reject</button>
            </div>
            </div>
          </>
        ) : (
          <p className="card-text">Ad details not available</p>
        )}
      </div>
    </div>

  );
};

export default AdCard;
