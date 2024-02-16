
import React, { useEffect, useState } from "react";
import hospitalImage from "../../image/hospital.png"
import ngoImage from "../../image/NGO.png"
import { NavLink, useNavigate } from "react-router-dom";
import JobCard from "./JobCard";
import GroupCard from "./GroupCard";

const Group = () => {
    const navigate = useNavigate();
    const groupsData = [
        {
            id: 1,
            Leader: "Bob",
            Members: 10,
            description: "Best group "
        }
    ];

    const handleCreateGroup = () => {
            navigate("/formgroups");
    }

    console.log(groupsData);
    return (
        <>
            <div className="container text-center">
                <h1 className='display-3'>Groups</h1>
                {groupsData.map((group) => {
                    return (<GroupCard leader={group.Leader} members={group.Members} description={group.description} />);
                })}
            </div>
            <div className='col-md-4 col-12 d-flex justify-content-center'>
                <button className='btn btn-dark btn-lg' onClick={handleCreateGroup}>Form New Group</button>
            </div>
            <br />
        </>
    );
};

export default Group;