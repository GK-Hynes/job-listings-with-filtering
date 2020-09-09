import React, { useState, useEffect } from "react";
import JobBoard from "./JobBoard";
import data from "./data.json";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  return (
    <div className="">
      <header className="w-full h-40  bg-desaturated-dark-cyan">
        <img
          className="w-full h-full"
          src="/images/bg-header-desktop.svg"
          alt=""
        />
      </header>
      <main className="flex flex-col min-h-screen w-full">
        <JobBoard jobs={jobs} />
      </main>
    </div>
  );
}

export default App;
