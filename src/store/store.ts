import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {messagesAPI} from "../services/MessagesService";

const rootReducer = combineReducers({
    [messagesAPI.reducerPath]: messagesAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => (
            getDefaultMiddleware().concat(messagesAPI.middleware)
        )
    })
}
