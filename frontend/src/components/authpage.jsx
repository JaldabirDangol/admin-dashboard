import React, { useState ,useEffect} from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { backendurl} from "../../configurl";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [user,setUser] = useState(null)
  const [userinfo, setUserInfo] = useState({
    username:"",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setUserInfo({ ...userinfo, [e.target.name]: e.target.value });
  };

  const logInHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        `${backendurl}/api/v1/user/${isLogin ? 'login' :'register'}`,
        userinfo,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        toast.success(res.data.msg);
        setUserInfo({ email: "", password: "" ,username:""});
 

        setUser(res.data.user ? res.data.user : false)
        if(isLogin){
            navigate(res.data.user.role === "user" ? "/userpage" : "/" );
        }else{
           setIsLogin(true)
        }
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.msg || "Something went wrong. Try again."
      );
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
   

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#1e1e3f] px-4">
      <div className="bg-[#2c2c54] w-full max-w-md p-8 rounded-2xl shadow-xl text-white">
        <ToastContainer />
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {isLogin ? "Login to Dashboard" : "Create an Account"}
        </h2>
        <form className="space-y-4" onSubmit={logInHandler}>
          {!isLogin && (
            <input
              type="text"
              name="username"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg bg-[#3a3a69] border border-[#3c3c6c] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
              value={userinfo.username || ""}
              onChange={changeEventHandler}
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-[#3a3a69] border border-[#3c3c6c] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
            value={userinfo.email}
            onChange={changeEventHandler}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-[#3a3a69] border border-[#3c3c6c] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
            value={userinfo.password}
            onChange={changeEventHandler}
          />
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition duration-300"
            disabled={loading}
          >
            {loading ? "Loading..." : isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-300">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-400 cursor-pointer ml-1 font-semibold hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}
