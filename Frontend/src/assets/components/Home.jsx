import React, { useState } from "react";
import { useSlider } from "../../store/useSlider";
import { IoMdAdd } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { LuMessageCircleMore } from "react-icons/lu";
import { CreateModal } from "./Modal";

const Home = () => {
  const { slideropen } = useSlider();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenCreate() {
    setIsModalOpen(true);
  }

  const tasks = ["TO Do", "In Progress", "Review", "Done"];
  const user = ["IE", "JE", "AE"];
  const dis = 5;

  return (
    <div
      className={`bg-purple-100 ${
        slideropen ? "w-[90vw]" : "w-[80vw]"
      }  transition-all duration-500 ease-in-out  `}
    >
      <div className="sticky top-15 z-10 bg-purple-100 pb-10">
        <div className=" pl-8 text-[1.5rem] font-semibold">UX-Design Team</div>

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
              <button
                className="bg-green-400  text-white flex flex-row justify-center items-center gap-2 px-6 py-[0.5rem]  rounded-sm"
                onClick={handleOpenCreate}
              >
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
      </div>

      {/* mainSection */}

      {/* todo */}
      <div className="px-5 flex flex-row gap-4 pb-10 ">
        {tasks.map((task, index) => {
          return (
            <div
              className="w-1/4  bg-gray-300/20 rounded-md px-4 py-6 relative"
              key={index}
            >
              <div className="flex flex-row justify-between items-center">
                <span className="font-semibold">{task}</span>
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

              {/* Task Cart */}

              <div className="bg-white w-full my-4 rounded-sm ">
                <div className="flex flex-row items-center justify-between px-5 pt-2">
                  <div className="text-gray-400 font-semibold text-[0.9rem]">
                    TD-001
                  </div>
                  <PiDotsThreeOutlineFill className="text-gray-400" />
                </div>

                <div className="px-5 font-semibold text-[0.9rem] pt-1">
                  User Stories
                </div>

                <div className="w-14 pl-5 pt-2">
                  <hr className="text-red-500 border-3 rounded-full" />
                </div>

                <div className="pt-5">
                  <hr className="text-gray-300" />
                </div>

                <div className="py-2  pl-5">
                  <div className="flex flex-row items-center gap-1">
                    <LuMessageCircleMore className="text-gray-400" />
                    <span className="text-gray-400 text-[0.8rem]">8</span>
                  </div>
                </div>
              </div>

              <div className="bg-white w-full my-4 rounded-sm ">
                <div className="flex flex-row items-center justify-between px-5 pt-2">
                  <div className="text-gray-400 font-semibold text-[0.9rem]">
                    TD-001
                  </div>
                  <PiDotsThreeOutlineFill className="text-gray-400" />
                </div>

                <div className="px-5 font-semibold text-[0.9rem] pt-1">
                  User Stories
                </div>

                <div className="w-14 pl-5 pt-2">
                  <hr className="text-red-500 border-3 rounded-full" />
                </div>

                <div className="pt-5">
                  <hr className="text-gray-300" />
                </div>

                <div className="py-2  pl-5">
                  <div className="flex flex-row items-center gap-1">
                    <LuMessageCircleMore className="text-gray-400" />
                    <span className="text-gray-400 text-[0.8rem]">8</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <CreateModal isopen={isModalOpen} onclose={() => setIsModalOpen(false)}>
        {" "}
        <div>
          <h2 className="text-xl font-semibold mb-4">Create a new Task</h2>
          <input
            type="text"
            placeholder="Task Title"
            className="w-full border border-gray-300 p-2 rounded mb-3"
          />
          <textarea
            placeholder="Task Details"
            className="w-full border border-gray-300 p-2 rounded mb-3"
          ></textarea>
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Submit
          </button>
        </div>
      </CreateModal>
    </div>
  );
};

export default Home;
