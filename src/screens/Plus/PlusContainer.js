import React from "react";
import PlusPresenter from "./PlusPresenter";
import styled from "styled-components/native";

// 1.상단의 날짜
// 2. 싱단 왼쪽의 날짜 조회
export const Container = styled.View`
  align-items: center;
  height: 100%;
  padding: 10px;
  background-color: white;
`;

const PlusContainer = () => {
  return (
    <Container>
      <PlusPresenter />
    </Container>
  );
};

export default PlusContainer;
