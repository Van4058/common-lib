import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import testReducer from "./test/TestState";
import tabReducer from "./tab/TabSlice.ts";

export const store = configureStore({
    reducer: {
        counter: counterReducer, // thêm slice vào store
        test: testReducer, // thêm slice vào store
        tab: tabReducer, // thêm slice vào store
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
