import React, { useState, useEffect } from "react";
import { useSlider } from "../../store/useSlider";
import { IoMdAdd } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { LuMessageCircleMore } from "react-icons/lu";
import { CreateModal } from "./Modal";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { FaDeleteLeft } from "react-icons/fa6";

const Home = () => {
  const initialTask = {
    todo: {
      name: "To Do",
      item: [],
    },
    inprogress: {
      name: "In Progress",
      item: [],
    },
    review: {
      name: "Review",
      item: [],
    },
    done: {
      name: "Done",
      item: [],
    },
  };

  const { slideropen } = useSlider();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load from localStorage or fallback to initialTask
  const [tasklist, setTaskList] = useState(() => {
    const storedTasks = localStorage.getItem("tasklist");
    return storedTasks ? JSON.parse(storedTasks) : initialTask;
  });

  const users = ["IE", "JE", "AE"];
  const dis = 5;
  const [newTask, setNewTask] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Save to localStorage on every tasklist update
  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  }, [tasklist]);

  function handleOpenCreate() {
    setIsModalOpen(true);
  }

  function handleCreateTask(e) {
    e.preventDefault();
    if (newTask.trim() === "") return;

    const updatedTodo = [...tasklist.todo.item, newTask];

    setTaskList((prev) => ({
      ...prev,
      todo: {
        ...prev.todo,
        item: updatedTodo,
      },
    }));

    setNewTask("");
    setIsModalOpen(false);
  }

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const sourceCol = tasklist[source.droppableId];
    const destCol = tasklist[destination.droppableId];
    const copiedItems = [...sourceCol.item];
    const [movedItem] = copiedItems.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      copiedItems.splice(destination.index, 0, movedItem);
      setTaskList({
        ...tasklist,
        [source.droppableId]: {
          ...sourceCol,
          item: copiedItems,
        },
      });
    } else {
      const destItems = [...destCol.item];
      destItems.splice(destination.index, 0, movedItem);
      setTaskList({
        ...tasklist,
        [source.droppableId]: {
          ...sourceCol,
          item: copiedItems,
        },
        [destination.droppableId]: {
          ...destCol,
          item: destItems,
        },
      });
    }
  };

  function handleDelete(status, index) {
    const updatedItems = [...tasklist[status].item];
    updatedItems.splice(index, 1);

    setTaskList((prev) => ({
      ...prev,
      [status]: {
        ...prev[status],
        item: updatedItems,
      },
    }));
  }

  return (
    <div
      className={`bg-purple-100 ${
        slideropen ? "w-[90vw]" : "w-[80vw]"
      } transition-all duration-500 ease-in-out`}
    >
      <div className="sticky top-15 z-10 bg-purple-100 pb-10">
        <div className="pl-8 text-[1.5rem] font-semibold">UX-Design Team</div>

        <div className="px-8 pt-8">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-4">
              <button
                className="bg-green-400 text-white flex flex-row justify-center items-center gap-2 px-6 py-[0.5rem] rounded-sm"
                onClick={handleOpenCreate}
              >
                <IoMdAdd className="size-6" /> Create Task
              </button>
            </div>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col">
                <label htmlFor="Show">Show</label>
                <select
                  name="Show"
                  className="font-semibold"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="all">All</option>
                  <option value="todo">TODO</option>
                  <option value="inprogress">INPROGRESS</option>
                  <option value="review">REVIEW</option>
                  <option value="done">DONE</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CreateModal isopen={isModalOpen} onclose={() => setIsModalOpen(false)}>
        <div className="px-4 py-4 w-full">
          <div className="mx-5 text-2xl">Task Name</div>
          <form onSubmit={handleCreateTask}>
            <input
              type="text"
              placeholder="Please Enter the Task"
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
      </CreateModal>

      <div className="px-5 flex flex-row gap-4 pb-10">
        <DragDropContext onDragEnd={onDragEnd}>
          {Object.entries(tasklist)
            .filter(([id]) => filterStatus === "all" || id === filterStatus)
            .map(([id, column], index) => (
              <Droppable droppableId={id} key={id}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="w-1/4 bg-gray-300/20 rounded-md px-4 py-6 relative"
                  >
                    <div className="flex flex-row justify-between items-center">
                      <span className="font-semibold">{column.name}</span>
                    </div>

                    {column.item.map((box, index) => (
                      <Draggable draggableId={`${id}-${index}`} index={index} key={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-white w-full my-4 rounded-sm"
                          >
                            <div className="flex flex-row items-center justify-between px-5 pt-2">
                              <div className="text-gray-400 font-semibold text-[0.9rem]">Task</div>
                              <button onClick={() => handleDelete(id, index)}>
                                <FaDeleteLeft className="text-red-500 text-[1.3rem]" />
                              </button>
                            </div>

                            <div className="px-5 font-semibold text-[0.9rem] pt-1 break-words">
                              {box}
                            </div>

                            <div className="w-14 pl-5 pt-2">
                              <hr className="text-red-500 border-3 rounded-full" />
                            </div>

                            <div className="pt-5">
                              <hr className="text-gray-300" />
                            </div>

                            <div className="py-2 pl-5">
                              <div className="flex flex-row items-center gap-1">
                                <LuMessageCircleMore className="text-gray-400" />
                                <span className="text-gray-400 text-[0.8rem]">0</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
        </DragDropContext>
      </div>
    </div>
  );
};

export default Home;
