import { configureStore } from "@reduxjs/toolkit";
import menu from '../MenuSlice/MenuSlice'
export const store = configureStore({
    reducer:{
        menu:menu

    }
})