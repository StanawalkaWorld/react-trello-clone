import { configureStore } from "@reduxjs/toolkit";
import entriesReducer from "./entry";
import tagReducer from "./tags";

const store = configureStore({
    reducer: {
        entries: entriesReducer,
        tags: tagReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
