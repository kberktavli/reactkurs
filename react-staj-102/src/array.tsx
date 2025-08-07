//rafce
const App = () => {
    const isimler = ["Ahmet", "Mehmet", "Ayşe", "Fatma", "Zeynep"]; // Example array
    return (
        <div>
            {isimler.map((isim) => (<li>{isim}</li>))}
        </div>
    )
}

export default App

//map() diziyi döner, her eleman için JSX döner.
//isim her döngüde dizinin elemanıdır.
//<li>{isim}</li> JSX elemanı, isim değişkenini liste elemanı olarak gösterir. jsx öğesi üretir.
//sonuçta react bir <li> listesi render eder.