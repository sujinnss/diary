import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const diaryData = createSlice({
  name: "diary",
  initialState: {
    list: [
      {
        text: "첫화면에 항상 나오는 내생일",
        date: 1579705200000,
        id: 1609084305318,
      },
      {
        text: "text1",
        date: 1609737310624,
        id: 1609737313722,
      },
      {
        text: "text2",
        date: 1609945200000,
        id: 1609737322753,
      },
      {
        text: "text3",
        date: 1610463600000,
        id: 1609737329614,
      },
      {
        text: "text4",
        date: 1612882800000,
        id: 1609737338635,
      },
      {
        text: "text5",
        date: 1614092400000,
        id: 1609737347641,
      },
    ],
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
