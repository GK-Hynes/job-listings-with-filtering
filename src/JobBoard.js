import React from "react";
import JobListing from "./JobListing";

const JobBoard = () => {
  return (
    <div className="w-full h-full m-0 pt-16 font-spartan bg-light-gray-cyan">
      <JobListing />
      <JobListing />
      <JobListing />
    </div>
  );
};

export default JobBoard;
