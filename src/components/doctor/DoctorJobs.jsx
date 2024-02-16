
import React, { useEffect, useState } from "react";
import hospitalImage from "../../image/hospital.png"
import ngoImage from "../../image/NGO.png"
import { NavLink, useNavigate } from "react-router-dom";
import JobCard from "./JobCard";
import DoctorJobsCards from "./DoctorJobCards";
import axios from "axios";

const DoctorJobs = () => {
    const jobsdata = [
        {
        id:1,
        name: "Bob",
        price: 10,
        hospital: "sanjivni ",
        description:"this is the best job to apply ",
        required:7,
        status:"Completed"
      },{
        id:2,
        name: "Bob",
        price: 10,
        hospital: "sanjivni ",
        description:"this is the best job to apply ",
        required:7,
        status:"Completed"
      },{
        id:3,
        name: "Bob",
        price: 10,
        hospital: "sanjivni ",
        description:"this is the best job to apply ",
        required:7,
        status:"Completed"
      },{
        id:4,
        name: "Bob",
        price: 10,
        hospital: "sanjivni ",
        description:"this is the best job to apply ",
        required:7,
        status:"Completed"
      },{
        id:5,
        name: "Bob",
        price: 10,
        hospital: "sanjivni ",
        description:"this is the best job to apply ",
        required:7,
        status:"Completed"
      },
    ];
   

    console.log(jobsdata);
  return (
    <div className="container text-center">
                    <h1 className='display-3'>Your Applied Jobs</h1>
        { jobsdata.map((job,index) => {
                  return ( <DoctorJobsCards key={index} name={job.name} price={job.price} hospital={job.hospital} description={job.description} required={job.required} status={job.status}/>);
        })}
    </div>
  );
};

export default DoctorJobs;