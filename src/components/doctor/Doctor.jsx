
import React, { useEffect, useState } from 'react';
import hospitalImage from "../../image/hospital.png"
import ngoImage from "../../image/NGO.png"
import { NavLink, useNavigate } from "react-router-dom";
import JobCard from "./JobCard";

const Doctor = () => {
  return (
    <div className="container text-center">
        <div className='row '>
    <h1 className='diaplay-3'>Apply job for</h1>
            <div className='col px-5 '>
            <NavLink className="nav-link p-5" to={"/hospitalJobList"}>
                <figure>
                    <img src={hospitalImage} className='img-fluid rounded-5'></img>
                </figure>
                <div className='title display-5'>
                    Hospital
                </div>
            </NavLink>
            </div>
            <div className='col px-5'>
            <NavLink className="nav-link p-5" to={"/ngoJobList"}>
                <figure>
                    <img src={ngoImage} className='img-fluid rounded-5'></img>
                </figure>
                <div className='title display-5'>
                    NGO
                </div>
            </NavLink>
            </div>
        </div>
    </div>
  );
};

export default Doctor;