import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const diaryData = createSlice({
  name: "diary",
  initialState: {
    list: [],
    // form: {
    //   date: +dayjs(),
    //   text: "",
    // },
  },
  reducers: {
    addDiary: (state, action) => {
      console.log(state);
      console.log(action);
      state.list.push({
        text: action.payload.text,
        date: action.payload.date,
        id: Date.now(),
      });
    },
    deleteDiary: (state, action) =>
      state.filter((state) => state.id !== action.payload),
    // changeText: (state, action) => {
    //   state.form.text = action.payload;
    // },
    // changeDate: (state, action) => {
    //   // console.log(state)
    //   console.log(dayjs(action.payload).format("YYYY-MM-DD"))
    //   state.form.date = action.payload;
    // },
  },
});

export const {
  addDiary,
  deleteDiary,
  changeText,
  changeDate,
} = diaryData.actions;

export default diaryData.reducer;
