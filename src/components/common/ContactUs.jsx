import React from 'react';
import styles from './ContactUs.css'; 
import contactUs from '../../image/undraw_contact_us_re_4qqt.svg';

const ContactUs = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.upper}>
        <div className={styles.upperLeft}>
          <div className={`card-shadow ${styles.imageContainer}`}>
            <img src={contactUs} className='img-fluid' alt='Contact Us' />
          </div>
        </div>
        <div className={styles.upperRight}>
          <div className={styles.inner}>
            <h1 className='font-weight-light mt-2'>Quick Contact</h1>
            <form>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='form-group mt-2'>
                    <input
                      className='form-control'
                      type='text'
                      placeholder='Name'
                    />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group mt-2'>
                    <input
                      className='form-control'
                      type='email'
                      placeholder='Email Address'
                    />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group mt-2'>
                    <input
                      className='form-control'
                      type='text'
                      placeholder='Phone'
                    />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group mt-2'>
                    <textarea
                      className='form-control'
                      rows='3'
                      placeholder='Message'
                    ></textarea>
                  </div>
                </div>
                <div className='col-md-12'>
                  <button
                    type='submit'
                    className='btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2'
                  >
                    <span> SUBMIT</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.lower}>
        <div className={styles.card}>
          <img
            src='https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png'
            alt='Address'
          />
          <h6 className='font-weight-medium'>Address</h6>
          <p>601 Sherwood Ave, San Bernardino</p>
        </div>
        <div className={styles.card}>
          <img
            src='https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png'
            alt='Phone'
          />
          <h6 className='font-weight-medium'>Phone</h6>
          <p>251 546 9442 | 630 446 8851</p>
        </div>
        <div className={styles.card}>
          <img
            src='https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png'
            alt='Email'
          />
          <h6 className='font-weight-medium'>Email</h6>
          <p>info@wrappixel.com | 123@wrappixel.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
