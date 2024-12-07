import React, { useState } from "react";

const CreateTask = ({tasks,addTask,sending}) => {
  const [job, setJob] = useState("");

  const handleOnchange = (event) => {
   setJob(event.target.value); 
  }
  const handleAddTask = () => {
    if(job.trim()){
      const newTask = { name: job, isDone: false };
    addTask(newTask);
    setJob("");
    }else{
      alert("Please enter your task");
    }
  }
  return (
    <div className="flex mb-5">
      <input
        type="text"
        disabled={sending}
        placeholder="Enter your task"
        value={job}
        onChange={handleOnchange}
        className="border-2 border-gray-300 p-2 flex-grow disabled:opacity-50"
      />
      <button
      onClick={handleAddTask} 
      disabled={sending}
      className="border-2 border-gray-300 px-4 py-1 bg-gray-600 text-gray-50 disabled:opacity-50">
        {sending ? "Sending..." : "Add Task"}
      </button>
    </div>
  );
};

export default CreateTask;
