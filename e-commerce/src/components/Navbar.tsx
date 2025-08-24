import { Menu, User, WavesIcon } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-2 px-4">
      <Menu />
      <div className="flex items-center gap-2">
        <WavesIcon color="#1111ff" />
        <span className="text-2xl font-bold">WoodMart.</span>
      </div>
      <User />
    </div>
  );
};

export default Navbar;
