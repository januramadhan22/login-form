import Logo from "../assets/logo.png";
import LoginIllustration from "../assets/illustration.png";

import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      {/* Left Content*/}
      <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center gap-10 ">
        <img src={Logo} alt="Printsoft" />
        <div className="w-10/12 md:w-8/12 flex flex-col gap-4">
          <h2 className="text-3xl font-bold my-3">Sign In</h2>
          <form className="w-full flex flex-col gap-1">
            <label className="text-base font-medium">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="py-3 px-5 rounded-sm border-2 focus:outline-blue-300"
            />
          </form>
          <form className="w-full flex flex-col gap-1">
            <label className="text-base font-medium">Password</label>
            <input
              type="text"
              placeholder="Enter your password"
              className="py-3 px-5 rounded-sm border-2 focus:outline-blue-300"
            />
          </form>
          <div className="w-full flex items-center justify-between">
            <form className="flex gap-2">
              <input type="checkbox" />
              <label>Remember me</label>
            </form>
            <button className="font-semibold text-blue-500">
              Forgot Password?
            </button>
          </div>
          <Link to="/user">
            <button className="w-full py-3 font-semibold rounded-lg text-white bg-blue-500">
              Sign In
            </button>
          </Link>
          <p className="w-full text-center">
            Don't have an account?{" "}
            <button className="text-blue-400">Sign Up</button>
          </p>
        </div>
      </div>

      {/* Right Content */}
      <div className="hidden md:w-1/2 h-full md:flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600">
        <img src={LoginIllustration} alt="Illustration" className="w-3/4" />
        <p className="text-lg font-normal text-white text-center">
          Work from anywhere, anytime,
          <br /> and any moments
        </p>
      </div>
    </div>
  );
}

export default Login;
