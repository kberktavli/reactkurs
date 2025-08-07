import { useEffect, useState } from "react";
//usestate ; durum tutmak için kullanınan hook
// useEffect; component mount olduğunda veya güncellendiğinde çalışacak kodları yazmak için kullanılır, yan etkiler için (fetch gibi) kullanılır. Burada API'den veri çekmek için kullanıyoruz.
// rafce
const App = () => {
    // usss
    const [users, setUsers] = useState([]);//users-> kullanıcı listesini tutan değişken, setUser-> bu listeyi güncelleyen fonksiyon, useState ise React'in durum yönetimi için kullandığı hook, başlangıçta liste boş olarak tanımlanıyor.

    // uffs
    useEffect(() => { //useEffec(() => {}, []); bu kod, bileşen ilk kez render edildiğinde calısır, içindeki fetch() kodu, dış API'den kullanıcı verilerini çekmek için kullanılır.
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json()) // JSON'a çevir (parametre)=> işlem
            .then((users) => setUsers(users)); // gelen kullanıcı verilerini setUsers fonksiyonuyla güncelle.
    }, []);

    return (
        <>
            {users.map((user) => (
                <h1>{user.name}</h1>
            ))}
        </>
    );
};

export default App;

// users boş başlar, useEffect ile API'den veri çekilir, veri geldiğinde setUsers çalışır -> users güncellenir ve bileşen yeniden render edilir. React, güncellenen users ile tekrar render eder ve her kullanıcı için bir <h1> etiketi oluşturur. Böylece kullanıcıların isimleri ekranda görüntülenir.

//() => {} --> bu bir callback fonksiyonudur, yani bu fonksiyon, ne zaman bir şey yapılacagını tanımlar. Bu fonksiyon, bileşen her render olduğunda çalışır.
/*
            useEffect(() => {
            console.log("Bileşen yüklendi");
          });
*/
//[] --> bu bir dependency array (bağımlılık dizisi)'dir. yani bu dizide hangi veriler değişince useEffect tekrar çalışacak.
/*
| Kullanım                        | Ne zaman çalışır?                      |
| ------------------------------- | -------------------------------------- |
| `useEffect(() => { ... })`      | Her render'da (her `setState` sonrası) |
| `useEffect(() => { ... }, [])`  | Sadece **ilk renderda bir kez**        |
| `useEffect(() => { ... }, [x])` | Sadece `x` değiştiğinde tekrar çalışır |

() içi = ne yapayım?
[] içi = ne zaman yapayım?

*/

