import { createSlice } from "@reduxjs/toolkit";



const loginSlice=createSlice({
    name:"login",
    initialState:{
        isLoggedIn:"false"
    },
    reducers:{
        updateLoggedIn:(state)=>{
           state.isLoggedIn=!state.isLoggedIn;
        }

    }
})

export const {updateLoggedIn}=loginSlice.actions

export default loginSlice.reducer   