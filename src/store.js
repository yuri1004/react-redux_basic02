import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from './redux/user';

let cart = createSlice({
    name:'cart',
    initialState:[
        {id:0,name:'people01',count:1},
        {id:1,name:'people02',count:3},
        {id:2,name:'people03',count:4},
        {id:3,name:'people04',count:2},
    ],
    reducers:{
        addCount(state,action){
            state[action.payload].count ++;
        }
    }
})
export let {addCount} = cart.actions;



export default configureStore({
    reducer:{
        cart:cart.reducer,
        user:user.reducer
    }
})