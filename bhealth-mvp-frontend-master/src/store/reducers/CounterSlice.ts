import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    count: number;
}

const initialState: CounterState = {
    count: 0
}

export const CounterSlice = createSlice({
    name: 'Counter',
    initialState,
    reducers: {
        increment(state, action: PayloadAction<number>) {
            state.count += action.payload;
        },
        decrement(state, action: PayloadAction<number>) {
            state.count -= action.payload;
        }
    }
})

export const CounterActions = CounterSlice.actions;
export const CounterReducer = CounterSlice.reducer;
