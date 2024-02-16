import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const handleOptionClick = (option) => {
    toast.success(`Selected ${option}`);
  };

  return (
    <div className="full-page-container d-flex align-items-center justify-content-center" >
      <div className="container vh-75">
        <h2 className="display-3">You Are :</h2>
        <div className="d-flex justify-content-center">
          <Link to="/docsignup">
            <button
              className="btn btn-primary me-5 "
              onClick={() => handleOptionClick("Doctor")}
            >
              <span className="lead p-3">Doctor</span>
            </button>
          </Link>
          <Link to="/hospsignup">
            <button
              className="btn btn-success me-5 "
              onClick={() => handleOptionClick("Hospital")}
            >
              <span className="lead p-3">Hospital</span>
            </button>
          </Link>
          <Link to="/ngosignup">
            <button
              className="btn btn-warning "
              onClick={() => handleOptionClick("NGO")}
            >
              <span className="lead p-3">NGO</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
