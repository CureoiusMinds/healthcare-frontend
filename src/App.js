// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/common/Navbar';
import { ToastContainer } from 'react-toastify';
import Footer from './components/common/Footer';
import AboutUs from './components/common/AboutUs';
import Home from './components/common/Home';
import ContactUs from './components/common/ContactUs';
import LoginPage from './components/authentication/Login';
import DoctorSignUp from './components/authentication/DoctorSignUp';
import HospitalSignUp from './components/authentication/HospitalSignUp';
import NGOSignUP from './components/authentication/NGOSignUP';
import SignUp from './components/authentication/signup';
import HospitalHome from './components/hospital/HospitalHome';
import DoctorSearch from './components/hospital/DoctorSearch';
import PostNewAd from './components/hospital/PostNewAd';
import Doctor from './components/doctor/Doctor';
import HospitalJobList from './components/doctor/HospitalJobList';
import NgoJobList from './components/doctor/NgoJobList';
import DoctorJobs from './components/doctor/DoctorJobs';

import AdCard from './components/hospital/AdCard';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/docsignup" element={<DoctorSignUp/>} />
        <Route path="/hospsignup" element={<HospitalSignUp/>} />
        <Route path="/ngosignup" element={<NGOSignUP/>} />
        <Route path="/hospitalhome" element={<HospitalHome/>} />
        <Route path="/search-doctors" element={<DoctorSearch/>} />
        <Route path="/postnewad" element={<PostNewAd/>} />
        <Route path="/adcard" element={<AdCard/>} />
        <Route path="/hospitalJobList" element={<HospitalJobList/>} />
        <Route path="/ngoJobList" element={<NgoJobList/>} />
        <Route path="/doctor" element={<Doctor/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/doctor-jobs" element={<DoctorJobs/>} />
      </Routes>
      <ToastContainer /> 
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
