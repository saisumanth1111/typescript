import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginReducer";


const appStore=configureStore({
    reducer:{
       login:loginReducer,
    }
})

export default appStore