import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        previous: [],
        increment: 1
    },
    reducers: {
        setCount: (state, action) => ({ ...state, value: action.payload }),
        setIncrement: (state, action) => ({ ...state, increment: action.payload }),
        stackPrevious: (state, action) => ({ ...state, previous: [...state.previous, action.payload] }),
        unstackPrevious: (state, action) => ({ ...state, previous: state.previous.slice(0, -1) })
    }
})