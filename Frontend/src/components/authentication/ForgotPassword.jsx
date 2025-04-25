import React, { useState } from "react";
import axios from "axios";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { USER_API_ENDPOINT } from "@/utils/data";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import Navbar from "../components_lite/Navbar";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${USER_API_ENDPOINT}/forgot-password`, { email });

      // ✅ Show toast message
      toast.success(res.data.message || "Please go to reset-password");

      // ✅ Auto navigate to reset-password page
      setTimeout(() => {
        navigate("/reset-password", { state: { email } });
      }, 1000); // delay for toast to show
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-5 border rounded-md shadow-lg">
        <h2 className="text-xl mb-4 text-center">Forgot Password</h2>
        <Label>Email</Label>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md w-full">Submit</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
