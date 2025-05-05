import React from "react";
import { useSlider } from "../../store/useSlider";
import { IoMdAdd } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";
import { PiDotsThreeOutlineFill } from "react-icons/pi";

const Home = () => {
  const { slideropen } = useSlider();

  const user = ["IE", "JE", "AE"];
  const dis = 5;

  return (
    <div
      className={`bg-purple-100 ${
        slideropen ? "w-[90vw]" : "w-[80vw]"
      }  transition-all duration-500 ease-in-out  `}
    >
      <div className="pt-2 pl-8 text-[1.5rem] font-semibold">
        UX-Design Team
      </div>

      {/* Team and invite */}
      <div className="flex flex-row pt-8 pl-8  items-center gap-10">
        <div className="flex flex-row ">
          {user.map((data, index) => {
            const leftValue = dis + 10;
            return (
              <div className="relative" key={index}>
                <div
                  className={`size-8 bg-red-100 rounded-full flex justify-center items-center text-red-500 border border-red-500  absolut `}
                  style={{ left: `${leftValue}px` }}
                >
                  {data}
                </div>
              </div>
            );
          })}
        </div>

        <button className="flex flex-row items-center gap-1 text-gray-500 font-semibold">
          <IoMdAdd /> Invite
        </button>
      </div>

      {/* Buttons */}
      <div className="px-8 pt-8">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-4">
            <button className="bg-green-400  text-white flex flex-row justify-center items-center gap-2 px-6 py-[0.5rem]  rounded-sm">
              <IoMdAdd className="size-6" /> Create
            </button>

            <button className="flex flex-row items-center justify-center gap-3 bg-white px-7 rounded-sm font-bold">
              <IoFilterSharp /> Filter
            </button>
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col ">
              <label htmlFor="Show">Show</label>
              <select name="Show" id="Show" className="font-semibold ">
                <option value="AllCards">All Cards</option>
                <option value="TODO">To Do</option>
                <option value="ONPROGRESS">On Progress</option>
                <option value="REVIEW">Review</option>
                <option value="DONE">Done</option>
              </select>
            </div>
            <div className="flex flex-col ">
              <label htmlFor="Show">Sort by</label>
              <select name="Show" id="Show" className="font-semibold ">
                <option value="AllCards">Date Created</option>
                <option value="TODO">To Do</option>
                <option value="ONPROGRESS">On Progress</option>
                <option value="REVIEW">Review</option>
                <option value="DONE">Done</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* mainSection */}

      {/* todo */}
      <div className="px-5 pt-8 flex flex-row gap-4  ">
        <div className="w-1/4  bg-gray-200 px-4 py-6 relative">
          <div className="flex flex-row justify-between items-center">
            <span className="font-semibold">To DO</span>
            <div className="flex flex-row gap-4">
              <div className="size-6 bg-gray-300 flex justify-center items-center rounded-full">
                <IoMdAdd className="text-gray-500" />
              </div>
              <div className="size-6 bg-gray-300 flex justify-center items-center rounded-full">
                <PiDotsThreeOutlineFill className="text-gray-500" />
              </div>
            </div>
          </div>

          <div className=" absolute bottom-0 flex flex-row items-center gap-3  text-gray-400">
            <IoMdAdd /> <span>Add New Card</span>
          </div>

          
        </div>


        <div className="w-1/4 bg-gray-200 px-4 py-6 ">
          <div className="flex flex-row justify-between items-center">
            <span className="font-semibold">To DO</span>
            <div className="flex flex-row gap-4">
              <div className="size-6 bg-gray-300 flex justify-center items-center rounded-full">
                <IoMdAdd className="text-gray-500" />
              </div>
              <div className="size-6 bg-gray-300 flex justify-center items-center rounded-full">
                <PiDotsThreeOutlineFill className="text-gray-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/4 bg-gray-200 px-4 py-6 ">
          <div className="flex flex-row justify-between items-center">
            <span className="font-semibold">To DO</span>
            <div className="flex flex-row gap-4">
              <div className="size-6 bg-gray-300 flex justify-center items-center rounded-full">
                <IoMdAdd className="text-gray-500" />
              </div>
              <div className="size-6 bg-gray-300 flex justify-center items-center rounded-full">
                <PiDotsThreeOutlineFill className="text-gray-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/4 bg-gray-200 px-4 py-6 ">
          <div className="flex flex-row justify-between items-center">
            <span className="font-semibold">To DO</span>
            <div className="flex flex-row gap-4">
              <div className="size-6 bg-gray-300 flex justify-center items-center rounded-full">
                <IoMdAdd className="text-gray-500" />
              </div>
              <div className="size-6 bg-gray-300 flex justify-center items-center rounded-full">
                <PiDotsThreeOutlineFill className="text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Home;
