import React from "react";
import SavedShow from "../components/SavedShow";

const Account = () => {
  return (
    <>
      <div className="w-full h-[550px] text-white  ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/ccf00e8d-5357-4dcc-ba0b-e4f2d71cfb11/DE-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
          className=" absolute w-full h-[550px] object-cover"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold ">My Shows</h1>
        </div>
      </div>
      <SavedShow />
    </>
  );
};

export default Account;
