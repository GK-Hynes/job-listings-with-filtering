import React from "react";
import JobListing from "./JobListing";

const JobBoard = ({ jobs }) => {
  return (
    <div className="w-full h-full m-0 pt-16 font-spartan bg-light-gray-cyan">
      {jobs.map((job) => (
        <JobListing job={job} key={job.id} />
      ))}
    </div>
  );
};

export default JobBoard;
