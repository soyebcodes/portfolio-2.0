import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      <div className="w-16 h-16 border-4 border-[#008236] border-dashed rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
