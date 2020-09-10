import React from "react";
import JobListing from "./JobListing";

const JobBoard = ({ jobs, handleFilter }) => {
  return (
    <div className="w-full h-full m-0 pt-20 font-spartan">
      {jobs.map((job) => (
        <JobListing job={job} key={job.id} handleFilter={handleFilter} />
      ))}
    </div>
  );
};

export default JobBoard;
