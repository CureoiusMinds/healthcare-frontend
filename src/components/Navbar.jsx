import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { toast } from "react-toastify";

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light text-secondary sticky-top  shadow fixed" style={{backgroundColor:"rgba(255, 255, 255, 0.9)" }}>
        <div className="container-fluid mx-auto ">
            <NavLink className="navbar-brand w-25 p-02" to={"/"}><span className="display-4"> Health Care</span></NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto ">
                    <li className="nav-item me-4">
                        <NavLink className="nav-link" style={{color:"#6c131c"}} to={"/"}>Home</NavLink>
                    </li>

                    <li className="nav-item me-4">
                        <NavLink className="nav-link" style={{color:"#6c131c"}} to={"/login"}>Login</NavLink>
                    </li>
                    <li className="nav-item me-4">
                        <NavLink className="nav-link"style={{color:"#6c131c"}} to={"/signup"}>Sign up</NavLink>
                  </li>
                  
                </ul>
            </div>
        </div>
    </nav>
    </>)
};

export default Navbar;
