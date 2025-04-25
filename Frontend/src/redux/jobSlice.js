import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  allJobs: [],
  allAdminJobs: [],
  singleJob: null,
  searchJobByText: "",
  allAppliedJobs: [],
  // Filters to be used in FilterCard
  searchedQuery: {
    location: "",
    technology: "",
    experience: "",
    salary: "",
  },
};

// Create job slice
const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    // Set all fetched jobs
    setAllJobs(state, action) {
      state.allJobs = action.payload;
    },

    // Set details for a single job
    setSingleJob(state, action) {
      state.singleJob = action.payload;
    },

    // Admin view of all jobs
    setAllAdminJobs(state, action) {
      state.allAdminJobs = action.payload;
    },

    // Search by free text (e.g., job title or company)
    setSearchJobByText(state, action) {
      state.searchJobByText = action.payload;
    },

    // Applied jobs for a user
    setAllAppliedJobs(state, action) {
      state.allAppliedJobs = action.payload;
    },

    // Set or update filters (used by FilterCard)
    setSearchedQuery(state, action) {
      state.searchedQuery = {
        ...state.searchedQuery,
        ...action.payload,
      };
    },
  },
});

// Export actions
export const {
  setAllJobs,
  setSingleJob,
  setAllAdminJobs,
  setSearchJobByText,
  setAllAppliedJobs,
  setSearchedQuery,
} = jobSlice.actions;

// Export reducer
export default jobSlice.reducer;
