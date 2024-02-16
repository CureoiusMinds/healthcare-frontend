
import React, { useEffect, useState } from 'react';
import hospitalImage from "../../image/hospital.png"
import ngoImage from "../../image/NGO.png"
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const GroupCard = (prop) => {

    // const handleAccept=()=>{
    //     toast.success("job is assigned to you ");
    // }

  return (
   
        <div className='row rounded-5 my-5 py-5' style={{border:"1px solid green"}}>
            <div className='col-md-4 col-12'>
            <div className='m-3'>
               <h1 className='lead'> Leader : {prop.leader} </h1>
            </div>
            <div className='m-3'>
               <h1 className='lead'> members : {prop.members} </h1>
            </div>
            </div>
            <div className='col-md-4 col-12'>
            <div className='m-3'>
               <h1 className='lead'> Description : {prop.description}</h1>
            </div>
            </div>

        </div>
  );
};

export default GroupCard;