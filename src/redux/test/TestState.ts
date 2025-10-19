import {ELoadingStatus} from "../../const/Event.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

export type TestStateType = {
    items: any[],
    isLoading: ELoadingStatus,
    error?: any,
}

export const initState: TestStateType = {
    items: [],
    isLoading: ELoadingStatus.idle
}

type TestSlice = {
    items: any[];
};

const initialState: TestSlice = {items: []};

const testSlice = createSlice({
    name: "test",
    initialState,
    reducers: {
        updateState: (state, action: PayloadAction<any>) => {
            state.items = action.payload;
        },
    },
});

export const {updateState} = testSlice.actions;
export default testSlice.reducer;
