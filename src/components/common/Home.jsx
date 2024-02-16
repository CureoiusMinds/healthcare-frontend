import React from 'react';
import about from '../../image/about.jpg'
import home from '../../image/home.png'
import { NavLink } from 'react-router-dom';
const AboutUs = () => {
  return (
    <div className='container '>
    <div className='row p-5'>
    <div className='col-md-6 col-12 p-5'>
      <figure>
        <img className='img-fluid rounded-5' src={home} style={{height:"400px"}}></img>
      </figure>
    </div>
    <div className='col-md-6 col-12 text-center d-flex'>
        <div className='my-auto text-center'>

      <h2 className='display-3'> We Work For Doctors</h2>
      <p className='lead'>we focus on the best performance for the customers</p>
        <NavLink className='btn btn-outline-success' to={"/signup"}>Join Us</NavLink>
        </div>
      
    </div>
    </div>
    </div>
  );
}

export default AboutUs;
