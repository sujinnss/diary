import React from "react";
import PlusPresenter from "./PlusPresenter";
import styled from "styled-components/native";
import ViewWrapper from "../../components/ViewWrapper";
import { ScrollView } from "react-native";

// 1.상단의 날짜
// 2. 싱단 왼쪽의 날짜 조회
// 안드로이드 안먹힘
const ViewOuter = styled.View`
 
`;

const PlusContainer = ({ navigation }) => {
  return (
    <ScrollView scrollEnabled={true}>
      <ViewWrapper>
          <PlusPresenter navigation={navigation} />
      </ViewWrapper>
    </ScrollView>
  );
};

export default PlusContainer;
