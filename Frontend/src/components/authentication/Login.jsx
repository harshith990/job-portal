import React, { useState, useEffect } from "react";
import Navbar from "../components_lite/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { RadioGroup } from "../ui/radio-group";
import axios from "axios";
import { toast } from "sonner";
import { USER_API_ENDPOINT } from "@/utils/data.js";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, user } = useSelector((store) => store.auth);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_ENDPOINT}/login`, input, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error("Login failed");
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-500 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5 text-center text-blue-600">
            Login
          </h1>

          {/* Email Input */}
          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="johndoe@gmail.com"
            />
          </div>

          {/* Password Input + Eye Toggle */}
          <div className="my-2 relative">
            <Label>Password</Label>
            <Input
              type={passwordVisible ? "text" : "password"}
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="********"
              className="pr-10"
            />
            <span
              className="absolute top-8 right-3 cursor-pointer text-gray-600"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>

          {/* Forgot Password */}
          <div className="text-right mt-1">
            <Link
              to="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Role Selection */}
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="Student"
                  checked={input.role === "Student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label>Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="Recruiter"
                  checked={input.role === "Recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label>Recruiter</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Submit Button or Spinner */}
          {loading ? (
            <div className="flex items-center justify-center my-10">
              <div className="spinner-border text-blue-600" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <button
              type="submit"
              className="w-3/4 py-3 my-3 text-white flex items-center justify-center max-w-7xl mx-auto bg-blue-600 hover:bg-blue-800/90 rounded-md"
            >
              Login
            </button>
          )}

          {/* Register Redirect */}
          <div>
            <p className="text-gray-700 text-center my-2">
              Create new Account{" "}
              <Link to="/register">
                <button className="w-1/2 py-3 my-3 text-white flex items-center justify-center max-w-7xl mx-auto bg-green-600 hover:bg-green-800/90 rounded-md">
                  Register
                </button>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
