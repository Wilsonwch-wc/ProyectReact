import { createSlice } from '@reduxjs/toolkit'

const initialState = {

  resultado:10,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
    
      state.resultado += 1
    },
    decrement: (state) => {
      state.resultado -= 1
    },
    incrementByAmount: (state, action) => {
      state.resultado += action.payload
    },
  },
})


export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer