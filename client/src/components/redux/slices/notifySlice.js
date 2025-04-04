import {createSlice} from '@reduxjs/toolkit';


let initialState ={
    notifyreduxArray:[
         
    ],
}


const notifyReduxSystem = createSlice({
    name:"cart2",
    initialState,
    reducers:{
        addNotify:(state,action)=>{
            state.notifyreduxArray.push(action.payload)
        },
        removeNotify:(state,action)=>{
            action?state.notifyreduxArray.pop():""
            }
        }
    }
)


export const {addNotify,removeNotify} = notifyReduxSystem.actions;
export default notifyReduxSystem.reducer;