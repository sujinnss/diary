import React from "react";
import styled from "styled-components/native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";

// 모든 컴포넌트의 padding을  결정하는 부분
// 최상단에서 감싸주는 역할 공통으로 사용함

const Wrapper = styled.View`
  flex: 1;
  padding: 20px 15px 0 15px;
  background-color: #eeede6;
`;

const ViewWrapper = ({ children }) => {
  return (
    <>
      {/*<TouchableWithoutFeedback*/}
      {/*  onPress={() => {*/}
      {/*    Keyboard.dismiss();*/}
      {/*  }}*/}
      {/*>*/}
      <ApplicationProvider {...eva} theme={eva.light}>
        <Wrapper>{children}</Wrapper>
      </ApplicationProvider>
      {/*</TouchableWithoutFeedback>*/}
    </>
  );
};

export default ViewWrapper;
