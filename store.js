import { configureStore, createAction, createSlice } from "@reduxjs/toolkit";

const addDiary = createAction("ADD");
const deleteDiary = createAction("DELETE");


const diaryData = createSlice({
  name: "diaryReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
        console.log("더하기",state,action)
      state.push({ text: action.payload, id: Date.now() });
    },
    delete: (state, action) =>
      state.filter((state) => state.id !== action.payload),
  },
});

const store = configureStore({ reducer: diaryData.reducer });

export default store;
