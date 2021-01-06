import React from "react";
import Day from "./Day";
import store from "../../redux/store";
import { useSelector } from "react-redux";
import { groupBy, sortBy } from "lodash";
import moment from "moment";

// 리덕스의 데이터의 개수만큼 Day를 매핑해서 뿌려주는 역할

const DayContainer = ({ contents }) => {
  console.log("content:", contents);
  // console.log("data:", contents[1]);
  // console.log(
  //   "map:",
  //   contents[1].map((d) => d.id)
  // );
  //
  // const { list } = useSelector((store) => store.diary);

  return contents[1].map((item,index) => {
    return <Day id={item.id} key={index} />;
  });
};

export default DayContainer;
