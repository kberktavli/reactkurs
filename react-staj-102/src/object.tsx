const App = () => {
    const insan = {
        ad: "Bircan",
        yas: 22,
        cinsiyet: "Erkek",
        meslek: "Yazılım Geliştirici",
    };

    return (
        <div>
            <li>Ad: {insan.ad}</li>
            <li>Yaş: {insan.yas}</li>
            <li>Cinsiyet: {insan.cinsiyet}</li>
            <li>Meslek: {insan.meslek}</li>
        </div>
    )
}

export default App
