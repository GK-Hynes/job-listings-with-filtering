import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import JobBoard from "./JobBoard";
import data from "./data.json";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState(["CSS"]);

  useEffect(() => {
    setJobs(data);
  }, []);

  const filterJobs = ({ role, level, languages, tools }) => {
    if (filters.length === 0) {
      return true;
    }

    // Merge tags
    let tags = [];
    tags.push(role, level, languages, tools);
    tags = tags.flat();

    return tags.some((tag) => filters.includes(tag));
  };

  const handleFilter = (tag) => {
    setFilters(...filters, tag);
  };

  const removeFilter = (chosenFilter) => {
    setFilters(filters.filter((fil) => fil !== chosenFilter));
  };

  const filteredJobs = jobs.filter(filterJobs);

  return (
    <div className="">
      <header className="w-full h-40  bg-desaturated-dark-cyan">
        <img
          className="w-full h-full"
          src="/images/bg-header-desktop.svg"
          alt=""
        />
      </header>
      <main className="flex flex-col min-h-screen w-full bg-light-gray-cyan">
        <Filters filters={filters} removeFilter={removeFilter} />
        <JobBoard jobs={filteredJobs} handleFilter={handleFilter} />
      </main>
    </div>
  );
}

export default App;
