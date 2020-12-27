import React from "react";
import Day from "./Day";
import store from "../../redux/store";
import {useSelector} from "react-redux";

// 리덕스의 데이터의 개수만큼 Day를 매핑해서 뿌려주는 역할

const DayContainer = () => {
  const {list} = useSelector((store)=> store.diary)

  return(
      list.map((data)=>{
        return(
            <Day id={data.id}/>
        )
      })
  )


};

export default DayContainer;
