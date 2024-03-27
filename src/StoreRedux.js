import { configureStore } from "@reduxjs/toolkit";
import SliceRedux from "./LoginSlice";

export const store=configureStore({
    reducer:{
        login:SliceRedux
    }
})