import React from "react";

const Submitt = ({onClick}) => {
  return (
    <div>
      <button
       onClick={onClick}
        className="flex bg-[#FF6600] w-[100px] h-[50px] hover:bg-[#E65100] text-white font-semibold rounded-xl items-center justify-center transition duration-300 shadow-md shadow-[#FF6600] hover:shadow-[#E65100]"
      >
        Submit
      </button>
    </div>
  );
};

export default Submitt;
