import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./api";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


export const store = configureStore({
    /*Store'un bağlı olduğu reducer'lar, reducer : store'dan gelen isteği işleyen birimlerdir. */
    reducer:{
        [usersApi.reducerPath] : usersApi.reducer
    },
    //Store'a giden istekleri arka planda çalıştırıp işleyen birimlerdir
    //Reducer'Lar haricinde arka planda bişiyler yapmak istiyorsak burada yaparız
    //middleware'ler neler yapar.
    //Loglama: Redux'a hangi istekler gidiyor
    //LocalStorage: Verilerin kalıcı olarak kaydedilmesi
    //Web istekleri : Store'a giden isteklerini middleware ile karşılarız
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware),
})

// TypeScript ile uyumlu hale getirmek için
// Store'un içindeki kısımları tiplendiriyoruz
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Hooks
// Store'a action'lar dispatch edilir (gönderilir)
export const useAppDispatch: () => AppDispatch = useDispatch;
// Store'dan veriler seçilir (select edilir)
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;