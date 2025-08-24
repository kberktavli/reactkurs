import { ArrowLeft } from "lucide-react";
import bg from "../assets/ellipsis.png";
const Header = () => {
  return (
    <div className="p-8 pt-8 flex flex-col gap-4">
      <div
        className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px]"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: 300,
        }}
      />
      <ArrowLeft />
      <span className="text-3xl flex flex-col gap-1">
        <span className="text-3xl">Create</span>
        <span className="text-3xl">New Task</span>
      </span>
    </div>
  );
};

export default Header;

/*
-js değişkenini string içine gömüyorsun.
-bg dinamik bir JS değişkeni, tailwindd className içinde direkt değişken kullanamazsın o yüzden style ={{}} ile inline yazılmıs.
-
*/
