import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Signup from './components/signup';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer';
import LoginPage from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes> 
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      <ToastContainer /> 
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
