import React from "react";

const Next = ({getQuestion}) => {
  return (
    <div>
      <button
        onClick={getQuestion}
        className="flex bg-[#FF6600] w-[100px] h-[50px] hover:bg-[#E65100] text-white font-semibold rounded-xl items-center justify-center transition duration-300 shadow-md shadow-[#FF6600] hover:shadow-[#E65100]"
      >
        Next
      </button>
    </div>
  );
};

export default Next;
