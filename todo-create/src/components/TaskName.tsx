const TaskName = () => {
  return (
    <div className="flex flex-col gap-1 px-8 pb-8">
      <span className="text-gray-400">Name</span>
      <input
        type="text"
        className="border-b-1 text-2xl border-gray-500"
        placeholder="Task Name"
      ></input>
    </div>
  );
};

export default TaskName;
