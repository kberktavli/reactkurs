import SearchBar from "./components/SearchBar";
import BreadCrumb from "./components/BreadCrumb";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import BottomNavigation from "./components/BottomNavigation";
const App = () => {
  return (
    <div className="bg-gray-100 pb-24">
      <Navbar />
      <SearchBar />
      <BreadCrumb />
      <Categories />
      <Products />
      <BottomNavigation />
    </div>
  );
};

export default App;
