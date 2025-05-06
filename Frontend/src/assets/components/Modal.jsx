import React from 'react'

export const CreateModal = ({isopen, onclose ,children}) => {
    if (!isopen) return null;
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/55 bg-opacity-50">
    <div
      className={`bg-white rounded-lg w-[70%] h-[50%] shadow-lg relative transform transition-all duration-300
        ${isopen ? "scale-100 opacity-100" : "scale-95 opacity-0"}
      `}
    >
      <div className="bg-red-500 w-full h-[2rem] rounded-t-lg">
        <button
          className="absolute top-1 right-4 text-gray-100 hover:text-gray-400"
          onClick={onclose}
        >
          Close
        </button>
      </div>
      {
        children
      }
    </div>
  </div>
  )
}

