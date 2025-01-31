import React from "react";

const Option = ({option,onClick}) => {
  return (
    <li onClick={onClick} className="p-2 mt-2 border-[#6D28D9] border-2 rounded-xl w-[36vw] h-12 my-1 mx-auto transition duration-500 flex items-center text-[#00E6FF] text-xl bg-[#1E293B] hover:bg-[#9D00FF] hover:text-white hover:scale-105">
      {option}
    </li>
  );
};

export default Option;
