import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";


export default function DoctorSignUp() {

    const dispatch = useDispatch();

    const [personal, setPersonal] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        gender: ""
    });

    const [confirmPassword, setConfirmPassword] = useState("");

    const personalDetailChange = (e) => {
        const { name, value } = e.target;
        setPersonal((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const savePersonalDetails = (e) => {
        e.preventDefault();
        if (confirmPassword !== personal.password)
            toast.error("Password Do Not Match!");
        else if (personal.gender === "none" || personal.gender === "")
            toast.error("Select Valid Gender");
        else if(personal.contactNumber.length !== 10)
            toast.error("Contact Number must have 10 digits only")
        else {
            console.log(personal)
            // dispatch();
            toast.success("Success!");
        }
    }

    return (
        <div className="container col-md-10">
            <div className="row text-center ">
                <h2 className="text-center lead fs-2 py-5 p-md-4">  Personal Details </h2>
            </div>
            <form onSubmit={savePersonalDetails}>
                <div className="row m-3">
                    <div className="col-sm-12 col-md-4">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name <span className='text-danger'>*</span></label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                name="firstName"
                                pattern='[a-zA-Z]{2,50}'
                                defaultValue={personal.firstName}
                                title="Please Enter Valid First Name"
                                onChange={personalDetailChange}
                                required
                                autoFocus
                            />
                        </div>
                    </div>
                   
                    <div className="col-sm-12 col-md-4">
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name<span className='text-danger'> *</span></label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                name="lastName"
                                pattern='[a-zA-Z]{2,50}'
                                defaultValue={personal.lastName}
                                onChange={personalDetailChange}
                                required
                            />
                        </div>
                    </div>
               
                    <div className="col-sm-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="email">Email<span className='text-danger'> *</span></label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                defaultValue={personal.email}
                                onChange={personalDetailChange}
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="row m-3">
                    <div className="col-sm-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="password">Password<span className='text-danger'> *</span></label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                onChange={personalDetailChange}
                                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\s])(?=.*[\S])[^\s]{8,}$"
                                title="Password must contain at least one uppercase letter, one lowercase letter, one digit, and no spaces"
                                required
                            />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="password">Confirm Password<span className='text-danger'> *</span></label>
                            <input
                                type="password"
                                className="form-control"
                                id="confirmPassword"
                                name="password"
                                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\s])(?=.*[\S])[^\s]{8,}$"
                                title="Password must contain at least one uppercase letter, one lowercase letter, one digit, and no spaces"
                                required
                                onChange={handleConfirmPassword}
                                readOnly={personal.password === "" ? true : false}
                            />
                        </div>
                    </div>
                </div>
                <div className="row m-3">
                    <div className="col-sm-12 col-md-4">
                        <div className="form-group">
                            <label htmlFor='gender'>Gender<span className='text-danger'> *</span></label>
                            <select className='form-select' name='gender' onChange={personalDetailChange}>
                                <option value="none">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="form-group">
                            <label htmlFor="contactNumber">Contact Number<span className='text-danger'> *</span></label>
                            <input
                                type="number"
                                className="form-control"
                                id="contactNumber"
                                name="contactNumber"
                                defaultValue={personal.contactNumber}
                                onChange={personalDetailChange}
                                required
                                min={1000000000}
                                max={9999999999}
                            />
                        </div>
                    </div>
                   
                </div>
               
                <div className='text-center'>
                    <button type='submit' className="btn px-4 mt-3 btn-success">
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}