import React, { useState } from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Header = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { allJobs } = useSelector((store) => store.job);

  const searchjobHandler = () => {
    const match = allJobs.find((job) =>
      job.title.toLowerCase().includes(query.toLowerCase())
    );

    dispatch(
      setSearchedQuery({
        title: query,
        location: "",
        technology: "",
        experience: "",
        salary: "",
      })
    );

    if (!match) {
      toast.error("Job not found, browse other jobs");
    }

    navigate("/browse");
  };

  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className="px-4 mx-auto flex justify-center items-center py-2 gap-2 rounded-full bg-gray-200 text-red-600 font-medium">
          <span className="text-[#614232]">
            <PiBuildingOfficeBold />
          </span>
          No.1 Job Hunt Website
        </span>

        <h2 className="text-5xl font-bold">
          Search Apply & <br />
          Get Your <span className="text-[#6A38C2]">Dream Job</span>
        </h2>
        <p>
          Start your hunt for the best, life-changing career opportunities
          from here in your <br />
          selected areas conveniently and get hired quickly.
        </p>
        <div className="flex w-[40%] shadow-lg border border-gray-300 pl-3 rounded-full items-center gap-4 mx-auto">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Find Your Dream Job"
            className="outline-none border-none w-full"
          />
          <Button onClick={searchjobHandler} className="rounded-r-full">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
