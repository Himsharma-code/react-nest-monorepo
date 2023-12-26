import React from "react";

const Loader = () => {
  return (
    <div className="bg-loader z-50 flex items-center justify-center w-full h-full absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">
      <img className="" src="/assets/loader.gif" alt="Loading..." />
    </div>
  );
};

export default Loader;
