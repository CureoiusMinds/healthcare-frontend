import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import AdCard from "./AdCard";

const HospitalHome = () => {
  const [docsHos, setDocsHos] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jwtToken = sessionStorage.getItem("jwtToken");
        const response = await axios.get("https://localhost:8443/jobs/all", {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });
        setDocsHos(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        // Handle error, e.g., show an error message
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="container text-center">
      <h1 className="display-3">Hospitals Pending Request List</h1>
      {docsHos.map((doc, index) => (
        <AdCard
          key={index}
          hospital={doc.hospital}
          category={doc.category}
          experience={doc.experience}
          date={doc.date}
          hours={doc.hours}
          offerPrice={doc.offerPrice}
          doctorDetails={doc.doctorDetails}
        />
      ))}
      <NavLink className="btn btn-outline-warning p-3" to={"/postnewad"}>
        Post New Ad
      </NavLink>
    </div>
  );
};

export default HospitalHome;
