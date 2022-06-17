import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    number: 0
    //name: ""
    //age: 0
  },
  reducers: {
    increment: function(store)  {
      //store.number = store.number +1;
      //store.number += 1;
    store.number ++;
    },
    decrement: function(store)  {
    store.number --;
    },
    reset: function(store)  {
    store.number = 0 ;
    },
  },
})


export default counterSlice.reducer