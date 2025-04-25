import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { USER_API_ENDPOINT } from "@/utils/data";
import { toast } from "sonner";
import Navbar from "../components_lite/Navbar";
const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const emailFromNav = location?.state?.email || "";

  const [email, setEmail] = useState(emailFromNav);
  const [newPassword, setNewPassword] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${USER_API_ENDPOINT}/reset-password`, { email, password: newPassword });
      toast.success("Password updated successfully");
      navigate("/login");
    } catch {
      toast.error("Failed to update password");
    }
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <form onSubmit={handleReset} className="max-w-md mx-auto mt-10 p-5 border rounded-md shadow-lg">
        <h2 className="text-xl mb-4 text-center">Reset Password</h2>
        <Label>Email</Label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled // Disable editing if needed
        />
        <Label className="mt-4">New Password</Label>
        <Input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded-md w-full">
          Update Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
