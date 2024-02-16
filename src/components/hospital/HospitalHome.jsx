import React from "react";
import { Link } from "react-router-dom";
import AdCard from "./AdCard";

const HospitalHome = () => {
    const docsHos =[
        {
            hospital:"testing",
            category:'something',
            experience:'2',
            date:'11-11-11',
            hours:'6',
            offerPrice:'1520',
            doctorDetails:{
                name:'pramit',
                experience:'6',
                contact:'no contact'
            }
        },
        {
            hospital:"testing",
            category:'something',
            experience:'2',
            date:'11-11-11',
            hours:'6',
            offerPrice:'1520',
            doctorDetails:{
                name:'pramit',
                experience:'6',
                contact:'no contact'
            }
        },
        {
            hospital:"testing",
            category:'something',
            experience:'2',
            date:'11-11-11',
            hours:'6',
            offerPrice:'1520',
            doctorDetails:{
                name:'pramit',
                experience:'6',
                contact:'no contact'
            }
        }
    ];
  return (
    <div className="container text-center">
        <h1 className="display-3">Hospitals Pending Request List </h1>      
        { docsHos.map((doc,index) => {
                  return ( <AdCard key={index} hospital={doc.hospital} category={doc.category} experience={doc.experience} date={doc.date} hours={doc.hours} offerPrice={doc.offerPrice} doctorDetails={doc.doctorDetails}/>);
        })}
    </div>
  );
};

export default HospitalHome;
