import React from 'react';
import about from '../../image/about.jpg'
const AboutUs = () => {
  return (
    <div className='container'>
    <div className='row p-5'>
    <div className='col-md-6 col-12 p-5'>
      <figure>
        <img className='img-fluid rounded-5' src={about}></img>
      </figure>
    </div>
    <div className='col-md-6 col-12'>

      <h2 className='display-5'>Bridging Healthcare Gaps Through Flexible Staffing</h2>
      <p className='lead'>
        Focused on connecting quality freelance doctors with hospitals facing resource constraints and talent shortages. We are on a mission to bridge the rural-urban healthcare access divide by efficiently matching medical talent to locations that need it the most.
      </p>
      <p className='lead'>
        Our integrated portal allows hospitals to easily post part-time or temporary doctor positions across departments, while verified doctors can sign up to indicate their availability and interest areas. Our proprietary algorithms then map the best assignments based on credentials, fees, preferences, and requirements.
      </p>
      <p className='lead'>
        By enabling flexible job options for doctors and better capacity utilization, It helps enhance healthcare infrastructure and quality across the country. We incentivize doctor participation in rural postings through our award programs. With seamless profile management, appointment tracking, and built-in payments, we are streamlining healthcare freelancing and placement processes using technology.
      </p>
    </div>
    </div>
    </div>
  );
}

export default AboutUs;
