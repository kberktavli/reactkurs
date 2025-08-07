import { useState } from "react"
const App = () => {
  //usss
  const [yas, setYas] = useState(42);
  const [cinsiyet, setCinsiyet] = useState("erkek");
  const [sonuc, setSonuc] = useState(0);
  return (
    <>
      <button onClick={() => {
        if (cinsiyet === "erkek") {
          setSonuc(75 - yas);
        } else {
          setSonuc(80 - yas);
        }
      }}>Hesapla</button>
      <h2>Yaş : {yas}</h2>
      <h2>Cinsiyet : {cinsiyet}</h2>
      <h2>Sonuç : {sonuc}</h2>
    </>
  )
}

export default App
