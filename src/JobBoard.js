import React from "react";
import JobListing from "./JobListing";

const JobBoard = () => {
  return (
    <div className="margin-auto">
      <h1 className="text-2xl text-gray-500">JobBoard</h1>
      <JobListing />
    </div>
  );
};

export default JobBoard;
