import React from "react";

const Filters = ({ filters, removeFilter, clearFilters }) => {
  return (
    <div className="flex -mt-10 p-4 bg-white shadow-xl rounded-md text-sm">
      <div className="flex flex-wrap">
        {filters.length > 0 &&
          filters.map((filter, i) => (
            <span
              className="flex mr-4 mb-4 md:mb-0 bg-light-gray-cyan-filters text-desaturated-dark-cyan font-bold rounded"
              key={i}
            >
              <span className="p-2">{filter}</span>
              <button
                className="p-2  rounded-tr rounded-br bg-desaturated-dark-cyan hover:bg-gray-900"
                onClick={() => removeFilter(filter)}
              >
                <img src="/images/icon-remove.svg" alt="Remove Icon" />
              </button>
            </span>
          ))}
      </div>
      <button
        className="ml-auto font-bold text-gray-600 hover:text-desaturated-dark-cyan hover:underline"
        onClick={clearFilters}
      >
        Clear
      </button>
    </div>
  );
};

export default Filters;
