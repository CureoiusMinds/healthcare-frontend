
import React, { useEffect, useState } from 'react';
import hospitalImage from "../../image/hospital.png"
import ngoImage from "../../image/NGO.png"
import { NavLink, useNavigate } from "react-router-dom";
import JobCard from './JobCard';

const NgoJobList = () => {
    const jobsdata = [
        {
        id:1,
        name: "Bob",
        price: 10,
        hospital: "sanjivni ",
        description:"this is the best job to apply ",
        required:7
      },{
        id:2,
        name: "Bob",
        price: 10,
        hospital: "sanjivni ",
        description:"this is the best job to apply ",
        required:7
      },{
        id:3,
        name: "Bob",
        price: 10,
        hospital: "sanjivni ",
        description:"this is the best job to apply ",
        required:7
      },{
        id:4,
        name: "Bob",
        price: 10,
        hospital: "sanjivni ",
        description:"this is the best job to apply ",
        required:7
      },{
        id:5,
        name: "Bob",
        price: 10,
        hospital: "sanjivni ",
        description:"this is the best job to apply ",
        required:7
      },
    ];

  return (
    <div className="container text-center">
                    <h1 className='display-3'>NGO Job List Follows</h1>
        { jobsdata.map((job,index) => {
                  return ( <JobCard key={index} name={job.name} price={job.price} hospital={job.hospital} description={job.description} required={job.required}/>);
        })}
    </div>
  );
};

export default NgoJobList;