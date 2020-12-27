import React from "react";
import DetailChild from "./DetailChild";
import ViewWrapper from "../../components/ViewWrapper";

// 리덕스의 store의 개수만큼 DetailChild를 매핑한다
// 추후 내가 선택한 메모의 id를 찾아 그 아이디에 focus를 맞춰 scroll 할수있도록 한다
// useSelector을 사용

const DetailPresenter = ({ allDataList }) => {
  console.log(allDataList);

  return (
    <ViewWrapper>
      {allDataList.map((list) => {
        return <DetailChild date={list.date} text={list.text}  key={list.id} />;
      })}
    </ViewWrapper>
  );
};

export default DetailPresenter;
