import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import JobBoard from "./JobBoard";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  // Mock fetching data from API
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

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
    <div>
      <header className="w-full h-40  bg-desaturated-dark-cyan bg-header-mobile sm:bg-header-desktop bg-center bg-cover"></header>
      <main className="flex flex-col min-h-screen w-full bg-light-gray-cyan font-spartan">
        <div className="container mx-auto px-4">
          {filters.length > 0 && (
            <Filters
              filters={filters}
              removeFilter={removeFilter}
              clearFilters={clearFilters}
            />
          )}
          <JobBoard jobs={filteredJobs} handleFilter={handleFilter} />
        </div>
      </main>
    </div>
  );
}

export default App;
