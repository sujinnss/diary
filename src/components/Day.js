import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Detail from "../screens/Detail";

const Container = styled.View`
 
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
    <TouchableOpacity onPress={goToDetail}>
      <Container>
        <Image source={require("../img/abo.png")} />
      </Container>
    </TouchableOpacity>
  );
};

export default Day;
