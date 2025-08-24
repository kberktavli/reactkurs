import { LayoutGrid, Plus, SquareCheckBig, Timer, User } from "lucide-react";

const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 right-0 left-0 border-t-2 bg-white border-slate-100 shadow-2xl flex justify-around py-4">
      <button>
        <LayoutGrid className="text-blue-500 hover:text-blue-900 transition cursor-pointer" />
      </button>
      <button>
        <Timer className="text-slate-300 hover:text-blue-900 transition cursor-pointer" />
      </button>
      <button className="bg-blue-900 rounded-full p-4 hover:bg-blue-800 cursor-pointer ">
        <Plus color="white" />
      </button>
      <button>
        <SquareCheckBig className="text-slate-300 hover:text-blue-900 transition cursor-pointer" />
      </button>
      <button>
        <User className="text-slate-300 hover:text-blue-900 transition cursor-pointer" />
      </button>
    </div>
  );
};

export default BottomNavigation;

//fixed -> sabitler, scroll işlemez
//bottom-0 -> sayfanın altına sabitler
//text-slate-300 → Yazı rengini #e2e8f0 yapar.
//hover:text-blue-900 → Üzerine gelince yazı rengi #1c398e olur.
//transition → Hover efekti sert değil, yumuşak geçişli olur.
//cursor-pointer → Üzerine gelince imleç el işareti olur (link gibi görünür).
//absolute : mutlak sabit, window'daki konumunu belirlersin. ne olursa olsun o konumda kalır.
//w-full:Soldan sağa şeri gibi kaplaması
//right-0 left-0 soldan sagdan sağ ve sol kenara yapıştırır.
//py-4: serit içine padding ekler
/*
     <LayoutGrid />
     <Timer />
     <Plus />
     <SquareCheckBig/>
     <User />
     */
