import { configureStore } from '@reduxjs/toolkit';
import featureReducer from './slices/featureSlice'


const store = configureStore({
    reducer: {
      feature: featureReducer,
        // other reducers...
    },
    devTools: true
  });
  
  export default store;
  