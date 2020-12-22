import React from "react";
import PlusPresenter from "./PlusPresenter";
import styled from "styled-components/native";
import ViewWrapper from "../../components/ViewWrapper";



// 1.상단의 날짜
// 2. 싱단 왼쪽의 날짜 조회

const ViewOuter = styled.View`
  align-items: center;
`;

const PlusContainer = ({navigation}) => {
  return (
    <ViewWrapper>
      <ViewOuter>
        <PlusPresenter navigation={navigation} />
      </ViewOuter>
    </ViewWrapper>
  );
};

export default PlusContainer;
