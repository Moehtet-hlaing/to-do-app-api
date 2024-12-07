import React, { useEffect, useState } from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskSection from "./components/TaskSection";

const App = () => {
  const [tasks, setTasks] = React.useState([]);
  const [taskLoading, setTaskLoading] = React.useState(false);
  const [sending, setSending] = useState(false);

  const addTask = async (newTask) => {
    // setTasks([...tasks, newTask])
    setSending(true);
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
    setSending(false);
  };

  const removeTask = async (taskId) => {
    const res = await fetch(`http://localhost:5000/tasks/${taskId}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const doneTask = async (taskId, currentState) => {
    const res = await fetch(`http://localhost:5000/tasks/${taskId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isDone: !currentState }),
    });
    const data = await res.json();
    // console.log(data);
    setTasks(tasks.map((task) => (task.id === taskId ? data : task)));
  };

  const fetchTask = async () => {
    setTaskLoading(true);
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    setTasks(data);
    setTaskLoading(false);
  };

  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <div className="p-10 flex flex-col ">
      <Heading />
      <CreateTask tasks={tasks} addTask={addTask} sending={sending} />
      <TaskSection tasks={tasks} removeTask={removeTask} doneTask={doneTask} />
      {taskLoading && (
        <div className="animate-pulse">
          <div className=" border border-gray-500 p-2 mb-2 rounded-sm">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 bg-slate-200"></div>
                <div className="w-[200px] h-3 bg-slate-200"></div>
              </div>
              <div className="w-20 h-6 bg-slate-200"></div>
            </div>
          </div>
          <div className=" border border-gray-500 p-2 mb-2 rounded-sm">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 bg-slate-200"></div>
                <div className="w-[200px] h-3 bg-slate-200"></div>
              </div>
              <div className="w-20 h-6 bg-slate-200"></div>
            </div>
          </div>
          <div className=" border border-gray-500 p-2 mb-2 rounded-sm">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 bg-slate-200"></div>
                <div className="w-[200px] h-3 bg-slate-200"></div>
              </div>
              <div className="w-20 h-6 bg-slate-200"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
