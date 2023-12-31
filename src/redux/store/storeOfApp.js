import { configureStore, combineReducers } from "@reduxjs/toolkit";
import tasksReducer from "./taskSlice";

// Combine all reducers
const rootReducer = combineReducers({
  tasks: tasksReducer,
});

// Create store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
