import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Detail from "../screens/Detail";

const TouchableButton = styled(TouchableOpacity)`
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;

const Container = styled.View`
  width: 100px;
  height: 100px;
`;

const Image = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

const Day = () => {
  const navigation = useNavigation();
  const goToDetail = () => navigation.navigate("Detail");

  return (
    <TouchableButton onPress={goToDetail}>
      <Container>
        <Image source={require("../img/abo.png")} />
      </Container>
    </TouchableButton>
  );
};

export default Day;
