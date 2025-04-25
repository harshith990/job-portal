import React, { useEffect, useState } from "react";
import Navbar from "../components_lite/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/data";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";

const Register = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "Student",
    phoneNumber: "",
    file: null,
  });

  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // 👁️ toggle state

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, user } = useSelector((store) => store.auth);

  useEffect(() => {
    if (user) navigate("/");
  }, [user]);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setInput({ ...input, file: e.target.files[0] });
  };

  const sendOtp = async () => {
    if (!input.email) {
      toast.error("Please enter email first");
      return;
    }
    try {
      const res = await axios.post(`${USER_API_ENDPOINT}/send-otp`, {
        email: input.email,
      });

      if (res.data.success) {
        toast.success("OTP sent to your email");
        setOtpSent(true);
      }
    } catch (err) {
      toast.error("Failed to send OTP");
    }
  };

  const verifyOtp = async () => {
    try {
      const res = await axios.post(`${USER_API_ENDPOINT}/verify-otp`, {
        email: input.email,
        otp,
      });
      if (res.data.success) {
        toast.success("OTP verified");
        setOtpVerified(true);
      } else {
        toast.error("Invalid OTP");
      }
    } catch (err) {
      toast.error("Invalid or expired OTP");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otpVerified) {
      toast.error("Please verify OTP before registering");
      return;
    }

    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("password", input.password);
    formData.append("role", input.role);
    formData.append("phoneNumber", input.phoneNumber);

    if (input.file) {
      formData.append("profilePic", input.file);
    }

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_ENDPOINT}/register`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Registration failed. Try again."
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="w-1/2 border border-gray-500 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5 text-center text-blue-600">
            Register
          </h1>

          <div className="my-2">
            <Label>Fullname</Label>
            <Input
              type="text"
              name="fullname"
              value={input.fullname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="my-2">
            <Label>Email</Label>
            <div className="flex gap-2">
              <Input
                type="email"
                name="email"
                value={input.email}
                onChange={handleChange}
                required
              />
              {!otpSent && (
                <button
                  type="button"
                  onClick={sendOtp}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md transition"
                >
                  Send OTP
                </button>
              )}
            </div>
          </div>

          {otpSent && !otpVerified && (
            <div className="my-2">
              <Label>Enter OTP</Label>
              <div className="flex gap-2">
                <Input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="6-digit OTP"
                  required
                />
                <button
                  type="button"
                  onClick={verifyOtp}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md transition"
                >
                  Verify OTP
                </button>
              </div>
            </div>
          )}

          <div className="my-2">
            <Label>Password</Label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                value={input.password}
                onChange={handleChange}
                required
                className="pr-10"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-2 flex items-center cursor-pointer text-gray-600"
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3l18 18M4.5 4.5C2.75 6.25 1.5 9 1.5 12c0 2.625 1.05 5.025 2.775 6.75M20.25 20.25C21.975 18.525 23.25 16.125 23.25 13.5c0-3-1.5-5.75-3.75-7.5M9.75 9.75A4.5 4.5 0 0012 16.5a4.5 4.5 0 002.25-6.75"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.522 5.25 12 5.25c4.478 0 8.268 2.693 9.542 6.75-1.274 4.057-5.064 6.75-9.542 6.75-4.478 0-8.268-2.693-9.542-6.75z"
                    />
                  </svg>
                )}
              </span>
            </div>
          </div>

          <div className="my-2">
            <Label>Phone Number</Label>
            <Input
              type="tel"
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <RadioGroup className="flex items-center gap-4 my-5">
            {["Student", "Recruiter"].map((role) => (
              <div className="flex items-center space-x-2" key={role}>
                <Input
                  type="radio"
                  name="role"
                  value={role}
                  checked={input.role === role}
                  onChange={handleChange}
                />
                <Label>{role}</Label>
              </div>
            ))}
          </RadioGroup>

          <div className="flex items-center gap-2 mb-4">
            <Label>Profile Photo</Label>
            <Input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              name="file"
            />
          </div>

          <button
            type="submit"
            disabled={loading || !otpVerified}
            className={`block w-full py-3 text-white rounded-md ${
              otpVerified ? "bg-primary hover:bg-primary/90" : "bg-gray-400"
            }`}
          >
            {loading ? "Registering..." : "Register"}
          </button>

          <p className="text-gray-500 text-md mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-700 font-semibold">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
