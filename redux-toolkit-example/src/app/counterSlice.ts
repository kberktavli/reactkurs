import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value : 42,
};

const counterSlice = createSlice({
    name: "counter",
    initialState : initialState,
    reducers: {
        increase(state){
            state.value +=1;
        },
        decrease(state){
            state.value -=1;
        },
    }
})
//export const increase = counterSlice.actions.increase
//actionlar komponent'E
export const {increase , decrease} = counterSlice.actions;
//reducer'a ise store'a verecegiz.
export const counterReducer = counterSlice.reducer;