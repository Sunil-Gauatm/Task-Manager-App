import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { useSlider } from "../../store/useSlider";
import { FaRegCircle } from "react-icons/fa";
import { TeamsModel } from "./Modal";

const Silder = () => {
  const { toggleSlider, slideropen } = useSlider();
  const [openTeam, setOpenTeam] = useState(false);
  const [newTask, setNewTask] = useState("");
  const[team , setTeam] = useState(["UX-Design"])
  function handleAddTeam() {
    setOpenTeam(true);
  }
  function handleSliderMove() {
    toggleSlider();
  }

  function handleCreateTeam(e) {
    e.preventDefault();
    if (newTask.trim() === "") return;
    setTeam(t => [...t, newTask])
    setNewTask("");
    setOpenTeam(false);
  }

  return (
    <div
      className={`
  bg-blue-950 
  ${slideropen ? "w-[10vw]" : "w-[20vw]"} 
  h-screen sticky top-0 left-0 text-white 
  transition-all duration-500 ease-in-out z-20
`}
    >
      <div
        className={`  ${slideropen ? "hidden" : "block"}  ${
          slideropen ? "py-8" : "p-8"
        } text-[1.5rem]  `}
      >
        Tasker Manager App
      </div>

      <div className={` ${slideropen ? "px-2" : "px-8"} `}>
        <div className="flex flex-row justify-between items-center">
          <div className="font-semibold text-[1.4rem]">Teams</div>
          {/* <button
            className="bg-green-400 size-6 flex items-center justify-center rounded-full"
            onClick={handleAddTeam}
          >
            <IoMdAdd />
          </button> */}
        </div>

        <div className="pt-8">
          <div> My teams</div>
        </div>
      </div>

      {
        team.map((data, index)=>(
          <div className="py-2" key={index}>
          <div className="hover:bg-gray-600">
            <div
              className={`${slideropen ? "px-2" : "px-8"} py-2 cursor-pointer`}
            >
              {/* <div className={`${slideropen ? 'px-5' : 'px-8'} py-2 cursor-pointer`}> */}
  
              <div className="flex flex-row items-center gap-2">
                <FaRegCircle
                  className={`${
                    slideropen ? "text-[1rem]" : "text-[2.2rem]"
                  } text-red-500`}
                />
                <div className="flex flex-col ">
                  <span
                    className={`${slideropen ? "text-[0.6rem]" : "text-[1rem]"} `}
                  >
                    {data}
                  </span>
                  <span className="text-[0.7rem] text-gray-300"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        ))
      }
    

      <div className="absolute right-[-10px] top-18 ">
        <button
          className="bg-white size-7 flex justify-center items-center rounded-full border border-black"
          onClick={handleSliderMove}
        >
          {slideropen ? (
            <FaArrowRightLong className="text-black" />
          ) : (
            <FaArrowLeftLong className="text-black" />
          )}
        </button>
      </div>

      <TeamsModel isopen={openTeam} onclose={() => setOpenTeam(false)}>
        <div className="px-4 py-4 w-full text-black">
          <div className="mx-5 text-2xl text-black">Team Name</div>
          <form onSubmit={handleCreateTeam}>
            <input
              type="text"
              placeholder="Please the team Name"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="border-2 border-blue-900 rounded-sm mx-5 mt-2 px-4 py-2 w-[90%] placeholder:text-[1rem]"
              autoFocus
            />
            <button
              type="submit"
              className="bg-green-400 font-semibold text-[1rem] text-white mx-5 my-5 px-4 py-2 w-[90%] rounded-sm"
            >
              Add
            </button>
          </form>
        </div>
      </TeamsModel>
    </div>
  );
};

export default Silder;
