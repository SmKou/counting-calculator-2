import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        previous: [],
        step: 1
    },
    reducers: {
        setCount: (state, action) => ({...state, value: action.payload}),
        setStep: (state, action) => ({...state, step: action.payload}),
        stackPrevious: (state, action) => ({...state, previous: [...state.previous, action.payload]}),
        unstackPrevious: (state, action) => ({...state, previous: state.previous.slice(0, -1) }),
        incrementValue: (state) => ({...state, value: state.value + state.step}),
        decrementValue: (state) => {
            if (state.value - state.step < 0) {
                return {...state, value: 0}
            }
            else {
                return {...state, value: state.value - state.step}
            }
        },
        incrementStep: (state) => ({...state, step: state.step + 1}),
        decrementStep: (state) => {
            if (state.step - 1 < 0) {
                return {...state, step: 0}
            }
            else {
                return {...state, step: state.step - 1}
            }
        }
    }
})

export const selectCount = state => state.counter.value
export const selectPrevious = state => state.counter.previous
export const selectStep = state => state.counter.step
export const {
    setCount,
    setStep,
    stackPrevious,
    unstackPrevious,
    incrementValue,
    decrementValue,
    incrementStep,
    decrementStep,
} = counterSlice.actions
export default counterSlice.reducer