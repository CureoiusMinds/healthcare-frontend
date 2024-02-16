
import sideImage from "../../image/LoginImage.png"
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios, { HttpStatusCode } from 'axios';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';


const Login = () => {


  const [user, setUser] = useState({
    email: "",
    password: "",
    roleType: "Patient",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // To handle Login Event
  const handleLogin = (e) => {
    e.preventDefault();
    // Sent to the Reducer where state is changed
    console.log(user)
    const formData = new FormData();
    formData.append("email", user.email);
    formData.append("password", user.password);

    //Patient
    if (user.roleType === "Patient") {
    //   axios.post("http://localhost:8080/jobseeker/Patient", user)
    //     .then((response) => {
    //       console.log(response.data);
    //     }).catch((error) => {
    //       toast.error("Invalid Credentials");
    //     })
    }

    //Doctor
    else if (user.roleType === "Doctor") {
     
    }

    //Hospital -> Optional
    else if (user.roleType === "Hospital") {

    }
  };

  return (
    <div className="container mt-5 mb-5 p-4">
      <h1>hii</h1>
    </div>
  );
};

export default Login;