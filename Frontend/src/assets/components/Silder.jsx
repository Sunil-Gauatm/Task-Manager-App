import React from "react";
import { IoMdAdd } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { useSlider } from "../../store/useSlider";
import { FaRegCircle } from "react-icons/fa";

const Silder = () => {
  const { toggleSlider, slideropen } = useSlider();
  function handleAddTeam() {}
  function handleSliderMove() {
    toggleSlider();
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
      <div className={`  ${slideropen ? "hidden" : "block"}  ${slideropen ? "py-8" : "p-8"} text-[1.5rem]  `}>
        Tasker Manager App
      </div>

      <div className={` ${slideropen ? "px-2" : "px-8"} `}>
        <div className="flex flex-row justify-between items-center">
          <div className="font-semibold text-[1.4rem]">Teams</div>
          <button
            className="bg-green-400 size-6 flex items-center justify-center rounded-full"
            onClick={handleAddTeam}
          >
            <IoMdAdd />
          </button>
        </div>

        <div className="pt-8">
          <div> My teams</div>
        </div>

      </div>

      <div className="py-2">
      <div className="hover:bg-gray-600">
        <div className={`${slideropen ? 'px-2': 'px-8'} py-2 cursor-pointer`}>
        {/* <div className={`${slideropen ? 'px-5' : 'px-8'} py-2 cursor-pointer`}> */}

        <div className="flex flex-row items-center gap-2">
        <FaRegCircle className={`${slideropen ? "text-[1rem]" : "text-[2.2rem]"} text-red-500`}/>
        <div className="flex flex-col ">
            <span className={`${slideropen ? 'text-[0.6rem]' : 'text-[1rem]'} `}>
                Management
            </span>
            <span className="text-[0.7rem] text-gray-300">
                5 Members
            </span>
        </div>
        </div>
        </div>

      </div>
      </div>


      <div className="absolute right-[-10px] top-18">
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
    </div>
  );
};

export default Silder;
