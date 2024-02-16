import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/common/Navbar';
import Signup from './components/authentication/signup';
import { ToastContainer } from 'react-toastify';
import Footer from './components/common/Footer';
import LoginPage from './components/authentication/Login';
import Doctor from './components/doctor/Doctor';
import HospitalJobList from './components/doctor/HospitalJobList';
import NgoJobList from './components/doctor/NgoJobList';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes> 
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/hospitalJobList" element={<HospitalJobList/>} />
        <Route path="/ngoJobList" element={<NgoJobList/>} />
        <Route path="/doctor" element={<Doctor/>} />
      </Routes>
      <ToastContainer /> 
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
