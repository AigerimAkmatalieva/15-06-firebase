import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (store) => {
     return store + 1
    },
    decrement: (store) => {
      return store - 1
    },
  },
})


export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer