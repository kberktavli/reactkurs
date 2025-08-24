import bg from "../assets/bg.png";
import NavbarBody from "./NavbarBody";
import NavbarFooter from "./NavbarFooter";
import NavbarTitle from "./NavbarTitle";

const Navbar = () => {
  return (
    <div
      className="h-64 p-4 pt-8 flex flex-col gap-4"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <NavbarTitle />
      <NavbarBody />
      <NavbarFooter />
    </div>
  );
};
export default Navbar;
