import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

const filterData = [
  {
    filterType: "location",
    label: "Location",
    options: ["Delhi", "Mumbai", "Pune", "Bengaluru", "Hyderabad", "Remote"],
  },
  {
    filterType: "experience",
    label: "Experience",
    options: ["0-3 years", "3-5 years", "5-7 years", "7+ years"],
  },
  {
    filterType: "salary",
    label: "Salary (in LPA)",
    options: ["0-3 LPA", "3-6 LPA", "6-10 LPA", "10+ LPA"],
  },
];

const FilterCard = () => {
  const dispatch = useDispatch();
  const selectedFilters = useSelector((state) => state.job.searchedQuery);

  const handleChange = (type, value) => {
    dispatch(setSearchedQuery({ [type]: value }));
  };

  const handleClearFilters = () => {
    dispatch(
      setSearchedQuery({
        location: "",
        experience: "",
        salary: "",
      })
    );
  };

  return (
    <div className="w-full bg-white p-4 rounded-md shadow-md h-full overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold">Filter Jobs</h1>
        <button
          onClick={handleClearFilters}
          className="text-blue-600 text-sm hover:underline"
        >
          Clear Filters
        </button>
      </div>

      {filterData.map((filter) => (
        <div key={filter.filterType} className="mb-5">
          <h2 className="font-semibold text-base text-gray-800 mb-2">{filter.label}</h2>
          <div className="flex flex-col gap-2">
            {filter.options.map((option, index) => (
              <label
                key={index}
                className="text-base text-gray-700 flex items-center gap-2"
              >
                <input
                  type="radio"
                  name={filter.filterType}
                  value={option}
                  checked={selectedFilters[filter.filterType] === option}
                  onChange={() => handleChange(filter.filterType, option)}
                  className="h-4 w-4"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterCard;
