import { Ellipsis, Pizza } from "lucide-react";

const tasks = [
  {
    title: "Eat Breakfast",
    date: "Dec 25, 08:00 - 09:00",
  },
  {
    title: "Read a book",
    date: "Dec 25, 08:00 - 09:00",
  },
];
const TaskList = () => {
  return (
    <div className="flex flex-col p-4">
      <span className="text-3xl">Today</span>
      <div>
        {tasks.map((task) => (
          <div className="flex bg-white p-4 rounded gap-6 items-center">
            {/*Title*/}
            <div className="bg-red-100 rounded-2xl p-4">
              <Pizza className="text-red-900" />
            </div>
            <div className="flex flex-col flex-1">
              <span className="text-2xl font-bold">{task.title}</span>
              <span className="text-basee text-gray-500">{task.date}</span>
            </div>
            <Ellipsis className="text-gray-500" />
            {/*Date*/}
            {/*Dots*/}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
