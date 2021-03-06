import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Detail from "../../screens/Detail";
import store from "../../redux/store";

const TouchableButton = styled(TouchableOpacity)`
  width: 68px;
  height: 68px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;

//
// const Container = styled.View`
//   border: 1px solid blue;
//   width: 100px;
//   height: 100px;
// `;

const Image = styled.Image`
  width: 69px;
  height: 69px;
  border-radius: 50px;
`;

const Day = () => {
  const navigation = useNavigation();
  const goToDetail = () => navigation.navigate("Detail");

  return (
    <TouchableButton onPress={goToDetail}>
      <Image source={require("../../img/abo.png")} />
    </TouchableButton>
  );
};

export default Day;
