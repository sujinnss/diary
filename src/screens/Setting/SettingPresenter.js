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
  background-color: black;
`;

const SettingPresenter = () => {
  return (
    <Container>
      <Text>Setting View</Text>
    </Container>
  );
};

export default SettingPresenter;
