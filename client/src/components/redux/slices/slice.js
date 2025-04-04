import {createSlice} from '@reduxjs/toolkit';

let initialState={
    cartArray:[
      
    ],
}
 const cartSystem = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addCart:(state,action)=>{
                state.cartArray.push(action.payload);
        }
    }
})


export const {addCart} = cartSystem.actions;
export default cartSystem.reducer;

