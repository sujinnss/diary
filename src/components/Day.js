import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Detail from "../screens/Detail";
import ViewWrapper from "./ViewWrapper";

const TouchableButton = styled(TouchableOpacity)`
  width: 80px;
  height: 80px;
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
  width: 80px;
  height: 80px;
  border-radius: 50px;
`;

const Day = () => {
  const navigation = useNavigation();
  const goToDetail = () => navigation.navigate("Detail");

  return (
    <TouchableButton onPress={goToDetail}>
      <Image source={require("../img/abo.png")} />
    </TouchableButton>
  );
};

export default Day;
