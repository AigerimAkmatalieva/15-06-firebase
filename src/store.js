import { configureStore } from '@reduxjs/toolkit'
import reducer from './components/counterSlice';

export default configureStore({
  reducer: {
    counter: reducer
  },
});