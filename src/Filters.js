import React from "react";

const Filters = ({ filters, removeFilter, clearFilters }) => {
  return (
    <div className="flex flex-wrap p-4 -mt-10 mx-auto w-11/12 lg:w-9/12 max-w-screen-xl bg-white shadow-xl rounded-md text-sm font-spartan">
      {filters.length > 0 &&
        filters.map((filter, i) => (
          <span
            className="flex mr-4 mb-4 sm:mb-0 bg-light-gray-cyan-filters text-desaturated-dark-cyan font-bold rounded"
            key={i}
          >
            <span className="p-2">{filter}</span>
            <button
              className="p-2 bg-desaturated-dark-cyan rounded-tr rounded-br hover:bg-gray-900"
              onClick={() => removeFilter(filter)}
            >
              <img src="/images/icon-remove.svg" alt="Remove Icon" />
            </button>
          </span>
        ))}
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
