import React from "react";
import { ReactComponent as Logo } from "./assets/images/photosnap.svg";

const JobListing = () => {
  return (
    <div className="flex flex-row mx-auto mb-6 w-9/12 max-w-screen-xl bg-white shadow-xl border-solid border-teal-500 border-l-4 rounded">
      <div className="flex flex-row justify-center items-center p-4">
        <div className="h-20 w-20 ml-8">
          <Logo />
        </div>
      </div>
      <div className="flex-1 py-8 px-4">
        <div className="flex flex-row items-center text-sm">
          <h3 className="mr-4 text-desaturated-dark-cyan font-bold py-2">
            Photosnap
          </h3>
          <span className="mr-4 text-xxs font-bold text-white uppercase bg-desaturated-dark-cyan px-2 py-2 rounded-full leading-none align-middle">
            New!
          </span>
          <span className="mr-4 text-xxs font-bold text-white uppercase px-2 py-2 bg-black rounded-full leading-none align-middle">
            Featured
          </span>
        </div>
        <h2 className="text-xl font-bold mb-1 tracking-tight">
          Senior Frontend Developer
        </h2>
        <ul className="flex flex-row items-center text-dark-gray-cyan tracking-tight">
          <li className="mr-4">1d ago</li>
          <li className="mr-4">&#8226;</li>
          <li className="mr-4">Full Time</li>
          <li className="mr-4">&#8226;</li>
          <li className="mr-4">USA only</li>
        </ul>
      </div>
      <div className="flex flex-row justify-center flex-1 p-4 text-sm">
        <ul className="flex flex-row flex-wrap items-center text-desaturated-dark-cyan font-bold">
          <li className="mr-4 bg-light-gray-cyan-filters p-2 rounded">
            Frontend
          </li>
          <li className="mr-4 bg-light-gray-cyan-filters p-2 rounded">
            Senior
          </li>
          <li className="mr-4 bg-light-gray-cyan-filters p-2 rounded">HTML</li>
          <li className="mr-4 bg-light-gray-cyan-filters p-2 rounded">CSS</li>
          <li className="mr-4 bg-light-gray-cyan-filters p-2 rounded">
            JavaScript
          </li>
        </ul>
      </div>
    </div>
  );
};

export default JobListing;
