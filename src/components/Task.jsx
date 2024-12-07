import React from "react";

const Task = ({ task: { id, name, isDone }, removeTask , doneTask}) => {
  const handleDelete = () => {
    removeTask(id);
  }

  const handleCheckbox = () => {
    doneTask(id, isDone);
  }

  return (
    <div className="">
      <div className=" border border-gray-500 p-2 mb-2 rounded-sm">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <input 
            onChange={handleCheckbox} checked={isDone} type="checkbox" className="w-3 h-3" />
            <p className={`${isDone ? "line-through" : ""}`}>{name}</p>
          </div>
          <div>
          <button 
          onClick={handleDelete}
          className="border rounded-sm border-gray-800 px-4 py-0.5 text-gray-800">
            Delete
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
