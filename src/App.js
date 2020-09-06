import React from "react";
import JobBoard from "./JobBoard";

function App() {
  return (
    <div className="">
      <header className="header w-full h-40 bg-desaturated-dark-cyan"></header>
      <main className="flex flex-col h-screen w-full">
        <JobBoard />
      </main>
    </div>
  );
}

export default App;
