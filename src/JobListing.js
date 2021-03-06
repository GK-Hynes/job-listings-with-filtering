import React from "react";

const JobListing = ({ job, handleFilter }) => {
  const {
    company,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools
  } = job;

  let tags = [];
  tags.push(role, level, languages, tools);
  tags = tags.flat();

  return (
    <div
      className={`flex flex-col lg:flex-row mb-10 lg:mb-6 px-4 bg-white shadow-xl rounded-md ${
        featured && `border-solid border-teal-500 border-l-4`
      }`}
    >
      <div className="flex lg:justify-center lg:items-center lg:pr-4 lg:pl-6 lg:py-8">
        <div className="h-12 w-12 -mt-6 lg:mt-0 lg:h-24 lg:w-24">
          <img className="w-full h-full" src={logo} alt={company} />
        </div>
      </div>
      <div className="py-4 md:px-2 lg:py-8 border-b-2 border-solid border-gray-400 lg:border-none">
        <div className="flex items-center py-2">
          <h3 className="mr-4 text-sm text-desaturated-dark-cyan font-bold">
            {company}
          </h3>
          {job.new && (
            <span className="mr-4 px-2 py-1 text-xs font-bold text-white uppercase bg-desaturated-dark-cyan rounded-full">
              New!
            </span>
          )}
          {featured && (
            <span className="mr-4 px-2 py-1 text-xs font-bold text-white uppercase bg-gray-900 rounded-full">
              Featured
            </span>
          )}
        </div>
        <h2 className="mb-1 text-xl font-bold  tracking-tight hover:text-desaturated-dark-cyan cursor-pointer">
          {position}
        </h2>
        <ul className="flex items-center text-dark-gray-cyan tracking-tight">
          <li className="mr-4">{postedAt}</li>
          <li className="mr-4">&#8226;</li>
          <li className="mr-4">{contract}</li>
          <li className="mr-4">&#8226;</li>
          <li className="mr-4">{location}</li>
        </ul>
      </div>
      <div className="flex lg:justify-center lg:items-center py-4 lg:ml-auto text-sm">
        <ul className="flex flex-wrap items-center">
          {tags &&
            tags.map((tag, i) => (
              <li key={i}>
                <button
                  className="mr-4 mb-4 lg:mb-0 p-2 bg-light-gray-cyan-filters text-desaturated-dark-cyan font-bold rounded hover:bg-desaturated-dark-cyan hover:text-white"
                  onClick={() => handleFilter(tag)}
                >
                  {tag}
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default JobListing;
