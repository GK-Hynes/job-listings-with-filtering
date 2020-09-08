import React, { useState, useEffect } from "react";
import JobBoard from "./JobBoard";
import data from "./data.json";
// import HeaderImageDesktop from "../public/images/bg-header-desktop.svg";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  return (
    <div className="">
      <header className="w-full h-40 bg-header-desktop bg-desaturated-dark-cyan">
        {/* <img className="w-full h-full" src={HeaderImageDesktop} alt="" /> */}
      </header>
      <main className="flex flex-col min-h-screen w-full">
        <JobBoard jobs={jobs} />
      </main>
    </div>
  );
}

export default App;
