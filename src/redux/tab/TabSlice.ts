import {createSlice} from "@reduxjs/toolkit";

export type TabSlice = {
    active?: string;
    items: {
        key: string;
        name: string;
        value: string;
    }[]
};

const initialState: TabSlice = {
    items: []
};

const tabSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        setActive: (state, action) => {
            state.active = action.payload;
        },
        setItems: (state, action) => {
            state.items = action.payload;
        },
    },
});

export const {setActive, setItems} = tabSlice.actions;
export default tabSlice.reducer;
