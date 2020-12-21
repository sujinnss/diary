import React from "react";
import styled from "styled-components/native";

// 모든 컴포넌트의 padding을  결정하는 부분
// 최상단에서 감싸주는 역할 공통으로 사용함

const Wrapper = styled.View`
  flex: 1;
  padding-top: 20px;
  background-color: #eeede6;
`;

const ViewWrapper = ({ children }) => {
  return (
    <>
      <Wrapper style={{ paddingHorizontal: 15 }}>{children}</Wrapper>
    </>
  );
};

export default ViewWrapper;
