import { configureStore } from '@reduxjs/toolkit';

// Create a simple store with no reducers for now
// You can add reducers here as needed
const store = configureStore({
  reducer: {
    // Add your reducers here
    // projects: projectsReducer,
  },
});

export default store;