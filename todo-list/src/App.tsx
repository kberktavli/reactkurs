import BottomNavigation from "./components/BottomNavigation";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import TomorrowPreview from "./components/TomorrowPreview";

const App = () => {
  return (
    <div className="p-4 text-3xl bg-orange-50">
      <Navbar />
      <TaskList />
      <TomorrowPreview />
      <BottomNavigation />
    </div>
  );
};

export default App;
