import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name:"user",
    initialState:{
        people:'people01',age:20
    },
    reducers:{
        changeAge(state,action){
            state.age += action.payload
        }
    }
})
export let {changeAge} = user.actions;

export default user;