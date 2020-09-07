import React from "react";
import JobBoard from "./JobBoard";
import HeaderImageDesktop from "./assets/images/bg-header-desktop.svg";

function App() {
  return (
    <div className="">
      <header className="w-full h-40 bg-header-desktop bg-desaturated-dark-cyan">
        <img className="w-full h-full" src={HeaderImageDesktop} alt="" />
      </header>
      <main className="flex flex-col h-screen w-full">
        <JobBoard />
      </main>
    </div>
  );
}

export default App;
