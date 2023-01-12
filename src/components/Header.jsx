import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FiUser, FiKey, FiLogOut } from "react-icons/fi";

function Header() {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div className="w-full h-20 px-16 flex justify-between items-center">
      <Link to="/">
        <img src={Logo} alt="Printsoft" className="h-10" />
      </Link>
      <button
        onClick={() => setDropDown(!dropDown)}
        className="flex items-center gap-3"
      >
        <FiUser className="w-6 h-6 p-2 box-content bg-slate-700 text-white stroke-white rounded-full" />
        <p className="text-lg font-bold text-slate-700">John</p>
      </button>

      {/* Dropdown Item */}
      {dropDown && (
        <div className="absolute top-16 right-16 w-52 p-4 bg-white border rounded-md shadow-md flex flex-col gap-5">
          <button className="flex items-center gap-3 text-xl ">
            <FiUser className="box-content text-slate-700" />
            <p className="text-base font-normal text-slate-700">Edit Account</p>
          </button>
          <button className="flex items-center gap-3 text-xl ">
            <FiKey className="box-content text-slate-700" />
            <p className="text-base font-normal text-slate-700">
              Change Password
            </p>
          </button>
          <Link to="/">
            <button className="flex items-center gap-3 text-xl ">
              <FiLogOut className="box-content text-slate-700" />
              <p className="text-base font-normal text-slate-700">Logout</p>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
