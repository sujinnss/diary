import { createSlice } from "@reduxjs/toolkit";

const diaryData = createSlice({
  name: "diary",
  initialState: {
    list: [],
    form: {
      date: undefined,
      text: "",
    },
  },
  reducers: {
    addDiary: (state, action) => {
      console.log("더하기", state, action);
      state.list.push(action.payload);
    },
    deleteDiary: (state, action) =>
      state.filter((state) => state.id !== action.payload),
    changeText: (state, action) => {
      state.form.text = action.payload
    },
    changeDate: (state, action) => {
      state.form.date = action.payload
    }
  },
});

export const { addDiary, deleteDiary, changeText,
  changeDate } = diaryData.actions;

export default diaryData.reducer;
