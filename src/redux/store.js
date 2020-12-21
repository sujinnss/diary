import { configureStore } from "@reduxjs/toolkit";
import diaryReducer from "./diarySlice";

const store = configureStore({ reducer: {
    diary: diaryReducer,
        // diary: {
        //     list: []
        //   },
        // theme: {}

} });

export default store;
