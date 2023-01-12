import React from "react";
import Header from "../components/Header";
import UserIllustration from "../assets/illustration-2.png";

function UserPager() {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <div className="w-10/12 px-16 py-12 mx-auto my-6 flex items-start rounded-lg bg-gradient-to-r from-purple-300 to-blue-200">
        <div className="w-7/12 flex flex-col items-start gap-3">
          <h1 className="text-3xl font-bold text-slate-700">
            Hi John, Have a nice day!
          </h1>
          <button className="px-4 py-2 text-slate-700 rounded-md font-semibold bg-white">
            Account Information
          </button>
        </div>
        <img src={UserIllustration} alt="Illustration" className="w-60 -mt-6" />
      </div>
      <div className="w-10/12 mx-auto">
        <div className="w-72 p-3 border rounded-md flex flex-col gap-3">
          <h3 className="font-semibold text-slate-800">
            Your current information!
          </h3>
          <div className="w-full flex items-center">
            <p className="w-4/12">Username</p>
            <p>: john</p>
          </div>
          <div className="w-full flex items-center">
            <p className="w-4/12">Name</p>
            <p>: John C.</p>
          </div>
          <div className="w-full flex items-center">
            <p className="w-4/12">Address</p>
            <p>: Surabaya</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPager;
