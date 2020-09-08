import React from "react";

const JobListing = ({ job }) => {
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
      className={`${
        featured && `border-solid border-teal-500 border-l-4`
      } flex flex-row mx-auto mb-6 w-9/12 max-w-screen-xl bg-white shadow-xl rounded-md`}
    >
      <div className="flex flex-row justify-center items-center p-4">
        <div className="h-20 w-20 ml-8">
          <img src={logo} alt={company} />
        </div>
      </div>
      <div className="flex-1 py-8 px-4">
        <div className="flex flex-row items-center text-sm">
          <h3 className="mr-4 text-desaturated-dark-cyan font-bold py-2">
            {company}
          </h3>
          {job.new && (
            <span className="mr-4 text-xxs font-bold text-white uppercase bg-desaturated-dark-cyan px-2 py-2 rounded-full leading-none align-middle">
              New!
            </span>
          )}
          {featured && (
            <span className="mr-4 text-xxs font-bold text-white uppercase px-2 py-2 bg-black rounded-full leading-none align-middle">
              Featured
            </span>
          )}
        </div>
        <h2 className="text-xl font-bold mb-1 tracking-tight">{position}</h2>
        <ul className="flex flex-row items-center text-dark-gray-cyan tracking-tight">
          <li className="mr-4">{postedAt}</li>
          <li className="mr-4">&#8226;</li>
          <li className="mr-4">{contract}</li>
          <li className="mr-4">&#8226;</li>
          <li className="mr-4">{location}</li>
        </ul>
      </div>
      <div className="flex flex-row justify-center flex-1 p-4 text-sm">
        <ul className="flex flex-row flex-wrap items-center">
          {tags.map((tag, i) => (
            <li key={i}>
              <button className="mr-4 p-2 bg-light-gray-cyan-filters text-desaturated-dark-cyan font-bold rounded hover:bg-desaturated-dark-cyan hover:text-white">
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
