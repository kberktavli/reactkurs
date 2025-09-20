import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = [
    {
      name: "Anasayfa",
      href: "/",
    },
    {
      name: "Hizmetler",
      href: "/services",
    },
    {
      name: "Hakkımızda",
      href: "/about",
    },
    {
      name: "İletişim",
      href: "/contact",
    },
  ];
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* max-w-7xl: Max tablet  boyutunda (1280px) olsun   */}
      {/* mx-auto: x ekseninde ortalar  */}
      {/* 
      px-4 : Telefonlar için
      sm:px-6 : Küçük tabletler için
      lg:px-8 : Desktoplar için
       */}

      {/* Max width ve diğer ilgili padding ayarları */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo,Desktop menüsü ve Burger button */}
        {/* Justify-between: sebebi logo ve metin solda duracak, diğer linkler sağda. Mobil ise burger butonu sağda.*/}
        <div className="flex justify-between items-center py-4">
          {/* Icon and Text */}
          <a href="#" className="flex items-center gap-3">
            <div className="bg-orange-500 p-3 rounded-full">
              <Heart color="white" />
            </div>
            <span className="text-2xl">Vet</span>
          </a>
          {/* Desktop Navigation */}
          {/* 
          hidden : Telefon ve iPad mini gibi küçük ekranlarda gizler
          md:flex : Büyük tabletler ve diğer büyük cihazlarda gözükmesini sağlar. 
          px-4 : Telefonlar için
          sm:px-6 : Küçük tabletler için
          lg:px-8 : Desktoplar için
       */}
          <nav className="space-x-8 hidden md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium transition-color duration-200 text-gray-700 hover:text-orange-600 hover:bg-orange-50"
              >
                {item.name}
              </a>
            ))}
          </nav>
          {/* Burger button */}
          {/* 
          md:hidden
          */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-orange-50 cursor-pointer"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        {/* Mobile Navigation */}
        {/* TODO: Gizle */}

        {isOpen && (
          <div className="md:hidden ">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 ">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-sm font-medium transition-color duration-200 text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

/*
Header Altyapısı
//Mobil menüyü göster/gizle
isOpen = useState()
//Links array


const navigation = [{}]
  <header>
  //Padding ve max width ile ilgili işlemler
    <div>
      //Logo,desktop menu, burger button
      <div>
      </div>
      //Mobile Navigation
      <div>
      </div>
    </div>
  </header>
*/
