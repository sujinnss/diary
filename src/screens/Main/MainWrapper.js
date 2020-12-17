import React from "react";
import styled from "styled-components/native";
import { Dimensions, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

console.log("window:", window);
console.log("screen:", screen);

const Text = styled.Text`
  align-items: center;
  font-size: 20px;
  color: #d20303;
`;

const TouchableButton = styled(TouchableOpacity)`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: orange;
`;

const ButtonText = styled.Text`
  font-size: 35px;
  color: #fa1c1c;
`;

const ContentView = styled.View`
  flex: 1;
  align-self: stretch;
`;
const ViewWrapper = styled.View`
  flex: 1;
  align-items: center;
`;

const MainWrapper = () => {
  const navigation = useNavigation();
  const goToPlus = () => navigation.navigate("Plus");

  return (
    <ViewWrapper>
      <ContentView>
        <Text>main View</Text>
      </ContentView>
      <TouchableButton onPress={goToPlus}>
        <ButtonText>+</ButtonText>
      </TouchableButton>
    </ViewWrapper>
  );
};

export default MainWrapper;
