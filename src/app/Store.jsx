import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../features/UserReducer";


const Store=configureStore({
    reducer:{
    users: UserReducer
    }
})

export default Store