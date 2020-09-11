import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import JobBoard from "./JobBoard";
import data from "./data.json";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => setJobs(data), []);

  const filterJobs = ({ role, level, languages, tools }) => {
    if (filters.length === 0) {
      return true;
    }

    // Merge tags
    let tags = [];
    tags.push(role, level, languages, tools);
    tags = tags.flat();

    return filters.every((filter) => tags.includes(filter));
  };

  const handleFilter = (tag) => {
    // Don't add same tag twice
    if (filters.includes(tag)) return;

    setFilters([...filters, tag]);
  };

  const removeFilter = (selectedFilter) => {
    setFilters(filters.filter((filter) => filter !== selectedFilter));
  };

  const clearFilters = () => {
    setFilters([]);
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
        {filters.length > 0 && (
          <Filters
            filters={filters}
            removeFilter={removeFilter}
            clearFilters={clearFilters}
          />
        )}
        <JobBoard jobs={filteredJobs} handleFilter={handleFilter} />
      </main>
    </div>
  );
}

export default App;
