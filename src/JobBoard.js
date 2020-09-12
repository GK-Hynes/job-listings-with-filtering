import React from "react";
import JobListing from "./JobListing";

const JobBoard = ({ jobs, handleFilter }) => {
  return (
    <div className="w-full h-full pt-20">
      {jobs.map((job) => (
        <JobListing job={job} key={job.id} handleFilter={handleFilter} />
      ))}
    </div>
  );
};

export default JobBoard;
