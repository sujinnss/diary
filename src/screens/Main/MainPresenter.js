import React from "react";
import styled from "styled-components/native";
import {TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import DayContainer from "../../components/Day/DayContainer";
import ViewWrapper from "../../components/ViewWrapper";

// const window = Dimensions.get("window");
// const screen = Dimensions.get("screen");
//
// console.log("window:", window);
// console.log("screen:", screen);

const Text = styled.Text`
  align-items: center;
  font-size: 20px;
  color: #d20303;
`;

const ButtonView = styled.View`
  align-items: center;
`;
const TouchableButton = styled(TouchableOpacity)`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: #38393b;
`;

const ButtonText = styled.Text`
  font-size: 40px;
  color: #ffffff;
`;

const ContentView = styled.View`
  flex: 1;
  flex-direction: row;
  align-self: stretch;
`;
// const ViewWrapper = styled.View`
//   flex: 1;
//   align-items: center;
//   background-color: white;
// `;

const MainPresenter = () => {
  const navigation = useNavigation();
  const goToPlus = () => navigation.navigate("Plus");

  return (
    <ViewWrapper>
      <ContentView>
        <DayContainer/>
      </ContentView>
      <ButtonView>
        <TouchableButton onPress={goToPlus}>
          <ButtonText>+</ButtonText>
        </TouchableButton>
      </ButtonView>
    </ViewWrapper>
  );
};




export default MainPresenter;
