import React from "react";
import {
  useLoaderData,
  //useParams
} from "react-router-dom";

const CareerDetails = () => {
  // const { id } = useParams();
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details For {career.title}</h2>
      <p>Starting Salary : {career.salary}</p>
      <p>Location : {career.location}</p>
      <p className="details">
        Excepteur excepteur dolore proident labore anim veniam cillum. Anim
        excepteur sunt aliqua id ullamco. Dolor ad dolore nulla non exercitation
        nostrud aliquip laborum enim.
      </p>
    </div>
  );
};

// loader function

export const careerDetailLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/careers/" + id);
  if (!res.ok){
    throw Error('Could not find that details');
    
  }
    
  return res.json();
};

export default CareerDetails;
