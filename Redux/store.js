import { configureStore } from '@reduxjs/toolkit';


// Since it's a default import, you can name it anything (like counterReducer) —
//  and in this case, it’s conventional to name it something meaningful like that.

import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});
