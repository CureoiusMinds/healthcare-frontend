
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
      axios.post("https://localhost:8443/users/signin", user)
        .then((response) => {
          console.log(response.data);
          sessionStorage.setItem("token",response.data.jwt);
        }).catch((error) => {
          toast.error("Invalid Credentials");
        })
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
      <div className="row">

        {/* Left Side Image */}
        <div className="col-sm-12 col-md-6 col-lg-6 mb-5 left">
          <img
            src={sideImage}
            alt=""
            className="img-fluid login-side-image"
          ></img>
        </div>

        {/* Right Side Form */}
        <div className="col-sm-12 col-md-6 col-lg-6 ps-sm-1 pe-sm-1 ps-md-1 pe-md-1 ps-lg-5 pe-lg-5 emerge">
          <div className="p-sm-5 p-md-2 p-lg-5">
            <div className="display-5 text-success mb-5">Welcome Back</div>
            <form onSubmit={handleLogin}>
              {/* Email */}
              <div className="col-sm-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="email">Email<span className='text-danger'> *</span></label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
              {/* Password */}
              <div className="col-sm-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="password">Password<span className='text-danger'> *</span></label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                onChange={handleChange}
                                // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\s])(?=.*[\S])[^\s]{8,}$"
                                title="Password must contain at least one uppercase letter, one lowercase letter, one digit, and no spaces"
                                required
                            />
                        </div>
                    </div>
             
              {/* Login Button */}
              <button type="submit" className="btn btn-outline-success my-3" >
                Log Me In
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  ); 
};

export default Login;