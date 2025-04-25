import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import FilterCard from "./Filtercard";
import Job1 from "./Job1";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Jobs = () => {
  const { allJobs, searchedQuery } = useSelector((store) => store.job);
  const [filteredJobs, setFilteredJobs] = useState(allJobs);

  useEffect(() => {
    const { location, technology, experience, salary } = searchedQuery;

    const jobs = allJobs.filter((job) => {
      // Location match
      const matchesLocation =
        !location ||
        (job.location || "").toLowerCase().includes(location.toLowerCase());

      // Technology match
      const matchesTech =
        !technology ||
        (job.technology || "").toLowerCase().includes(technology.toLowerCase());

      // Experience match
      const experienceRanges = {
        "0-3 years": [0, 3],
        "3-5 years": [3, 5],
        "5-7 years": [5, 7],
        "7+ years": [7, 99],
      };
      const [minExp, maxExp] = experienceRanges[experience] || [0, 99];
      const matchesExp =
        !experience ||
        (job.experienceLevel >= minExp && job.experienceLevel <= maxExp);

      // ✅ Salary match in LPA (convert raw INR to LPA)
      const salaryRanges = {
        "0-3 LPA": [0, 3],
        "3-6 LPA": [3, 6],
        "6-10 LPA": [6, 10],
        "10+ LPA": [10, Infinity],
      };
      const [minSal, maxSal] = salaryRanges[salary] || [0, Infinity];
      const jobSalary = parseFloat(job.salary) / 100000; // Convert from INR to LPA
      const matchesSalary =
        !salary || (!isNaN(jobSalary) && jobSalary >= minSal && jobSalary <= maxSal);

      return matchesLocation && matchesTech && matchesExp && matchesSalary;
    });

    setFilteredJobs(jobs);
  }, [allJobs, searchedQuery]);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-1/4">
            <FilterCard />
          </div>
          <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
            {filteredJobs.length === 0 ? (
              <div className="text-center mt-10 text-gray-600">No jobs found</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredJobs.map((job) => (
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.4 }}
                    key={job.id}
                  >
                    <Job1 job={job} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
