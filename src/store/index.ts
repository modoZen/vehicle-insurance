import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { uiReducer } from "./slices/uiSlice";
import { userReducer } from "./slices/userSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        ui: uiReducer
    }
});


type RootState = ReturnType<typeof store.getState>

type AppDispath = typeof store.dispatch

export const useAppDispatch : ()=> AppDispath = useDispatch;

export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;

export { store }