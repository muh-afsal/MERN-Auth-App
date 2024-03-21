import { createSlice } from "@reduxjs/toolkit";

const initialState={
    currentUser:null,
    loading:false,
    error:false
}


const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        signInStart:(state)=>{
            state.loading=true
        },
        signInSuccess:(state,action)=>{
            state.currentUser=action.payload
            state.loading=true
            state.error=false
        },
        signInfailure:(state,action)=>{
          state.loading = false;
          state.error=action.payload
        }
        }
})


export const {signInStart,signInSuccess,signInfailure}=userSlice.actions
export default userSlice.reducer