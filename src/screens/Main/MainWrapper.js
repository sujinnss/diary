import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: black;
`;
const Text = styled.Text`
  flex: 1;
  align-items: center;
  color: antiquewhite;
  background-color: black;
`;

const MainWrapper = () => {
  return (
    <Container>
      <Text>main View</Text>
    </Container>
  );
};

export default MainWrapper;
