import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer, // thêm slice vào store
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
