import { useQuery } from "@tanstack/react-query";
type User = { // Her User nesnesinin id ve name adında iki özelliği olacak
    id: string;
    name : string;
};
export const useUsers = () => {//bir custom Hook tanımlıyoruz, useUsers cagrıldıgında kullanıcı listesini dönecek
    return useQuery<User[]>({//useQuery calıstırılıyor, <User[]> kısmı dönen verinin User tipinde bir dizi oldugunu belirtiyor.
    queryKey: ["usersData"],// react-query'de cac'leme için kullanılan anahtar, bu anahtar aynı olursa, veriyi tekrar fetch etmeden cache'den verir, burada usersData adını vermişiz.
    queryFn: () =>//api'den veriyi nasıl ceckecgimizi tarif eden fonksiyon, verilen adrese istek atıyor, gelen cevabı .json() ile js objesine ceviriyor.
      fetch("http://localhost:3001/users").then((res) => res.json()),
  });
};

/*
-useQuery, API'den veri çekme, cache'leme, loading & error durumlarını yönetme işini kolaylaştırıyor.
-
-
-
-
*/
