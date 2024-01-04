import {configureStore} from "@reduxjs/toolkit";
import {characterReducer} from "./slices/charactersSlice";

const store = configureStore({
    reducer: {
        characters: characterReducer
    }
})

export {store};