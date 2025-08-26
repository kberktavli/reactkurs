import BottomNavigation from "./components/BottomNavigation";
import Categories from "./components/Categories";
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div className="mini-h-screen bg-background max-w-md mx-auto relative ">
      <Navigation />
      <SearchBar />
      <Categories />
      <Products />
      <BottomNavigation />
    </div>
  );
};

export default App;
