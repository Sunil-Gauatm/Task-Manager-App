import React from "react";
import { ImCross } from "react-icons/im";

export const CreateModal = ({ isopen, onclose, children }) => {
  if (!isopen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/55 bg-opacity-50">
      <div
        className={`bg-white rounded-lg w-[50%] h-[30%] shadow-lg relative transform transition-all duration-300
        ${isopen ? "scale-100 opacity-100" : "scale-95 opacity-0"}
      `}
      >
        <div className=" bg-blue-950  w-full h-[3rem] rounded-t-lg flex flex-row justify-between items-center px-10">
          <span className="text-white font-semibold text-[1.5rem] ">
            Add New Task
          </span>
          <button
            className=" text-gray-100 hover:text-gray-400"
            onClick={onclose}
          >
            <ImCross className="" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export const TeamsModel = ({ isopen, onclose, children }) => {
  if (!isopen) return null;
  return (
    <div className="fixed inset-0  flex   z-50 bg-black/55 bg-opacity-50">
      <div
        className={`bg-white left-40 top-40 rounded-lg w-[30%] h-[30%] shadow-lg relative transform transition-all duration-300
        ${isopen ? "scale-100 opacity-100" : "scale-95 opacity-0"}
      `}
      >
        <div className=" bg-blue-950  w-full h-[3rem] rounded-t-lg flex flex-row justify-between items-center px-10">
          <span className="text-white font-semibold text-[1.5rem] ">
            Team Name
          </span>
          <button
            className=" text-gray-100 hover:text-gray-400"
            onClick={onclose}
          >
            <ImCross className="" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
