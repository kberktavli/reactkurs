import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { usersApi } from "./api";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [usersApi.reducerPath]: usersApi.reducer
  },
  middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware),
});
//Store'un içindeki kısımları tiplendiriyoruz.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Hooks
// Store'a action'lar dispatch edilir (gönderilir)
export const useAppDispatch: () => AppDispatch = useDispatch;
//Store'dan action'lar dispatch edilir (gönderilir)
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;