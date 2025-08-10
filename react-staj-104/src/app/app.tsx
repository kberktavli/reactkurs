import Card from "components/Card";
import { useEffect, useState } from "react";
const coffee = {
  title: "Banana Iced Coffee",
  description: "A banana iced coffee ",
  ingredients: "Coffee, Banana, Ice",
  image:
    "https://www.chiquita.fr/wp-content/uploads/2022/07/T-220706_DEC_Banana-Coffee-frappe.jpg",
  id: 7,
};

const App = () => {
  //usss
  const [coffeeList, setCoffeeList] = useState([coffee]);
  //uffs
  useEffect(() => {
    const API_URL = "https://api.sampleapis.com/coffee/iced";
    fetch(API_URL) //API'ye istek at promise zinciri mantıgı var
      .then((res) => res.json()) // gelen cevabı JSON'a çevir , json objesine dönüştürdükten sonra aşağıda ismini       coffeeList olarak kullanıyorum, sonra setCoffeeList'inin içine atıyorum coffeeList güncellenmiş oluyor.
      .then((coffeeList) => setCoffeeList(coffeeList)); //state'e ata
  }, []);

  return (
    <div className="bg-slate-100 h-screen flex flex-col items-center">
      {coffeeList.map((coffee) => (
        <Card coffee={coffee} />
      ))}
    </div>
  );
};

export default App;
