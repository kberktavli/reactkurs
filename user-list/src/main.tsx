import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "app/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

//queryClient nedir ?
/*
react-query kendi içinde QueryClient adında bir sınıf kullanır, bu, tüm cacahe,fetch ayaları, retry denemeleri, global config gibi şeyleri tutar, biz bu sınıftan bir tane oluştururuz.
react context: " bir değeri uygulamanın her yerine, prop zinciri kurmadan ver"
react query'nin QueryClientProvider'i "tüm veri çekme & cacheleme işlemleri için kullanacgın queryClient örneğini context aracılığıyla her yere dağıt."
 */
/*
 react query'nin çalışması için bir beyin lazım
 bu beynin adı queryClient
 bu beyni tüm uygulamanın görebilmesi için onu bir kutunun içine(context) koyuyoruz.
 queryclientprovider client = {queryClient} dedigimizde;
 "bu beynin kopyasını tüm uygualmaya dağıt, herkes kullanabilsin."
 */
