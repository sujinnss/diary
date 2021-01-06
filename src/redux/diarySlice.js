import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const diaryData = createSlice({
  name: "diary",
  initialState: {
    list: [
      {
        text: "2020-01-23",
        date: 1579705200000,
        id: 1609084305318,
      },
      {
        text: "2021-01-04",
        date: 1609737310624,
        id: 1609737313722,
      },
      {
        text: "2021-01-07",
        date: 1609945200000,
        id: 1609737322753,
      },
      {
        text: "2021-01-13",
        date: 1610463600000,
        id: 1609737329614,
      },
      {
        text: "2021-02-10",
        date: 1612882800000,
        id: 1609737338635,
      },
      {
        text: "2021-02-24",
        date: 1614092400000,
        id: 1609737347641,
      },
      {
        text: "2021-05-14",
        date: 1620918000000,
        id: 1609808982288,
      },
      {
        text: "2021-06-25",
        date: 1624546800000,
        id: 1609809104315,
      },
      {
        text: "2021-06-28",
        date: 1624806000000,
        id: 1609809117353,
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
    deleteDiary: (state, action) => {
      console.log("state", state);
      console.log("action", action);

      // 1. 리턴하지 않는 방법
      const indexNum = state.list.findIndex(
        (item) => item.id === action.payload.id
      );
      state.list.splice(indexNum, 1);

      // 2. 리턴 하는 방법
      // const newList = {
      //   ...state,
      //   list: state.list.filter((data) => data.id !== action.payload.id),
      // };
      // return newList;
    },
  },
});

export const {
  addDiary,
  deleteDiary,
  changeText,
  changeDate,
} = diaryData.actions;

export default diaryData.reducer;
