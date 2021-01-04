import React from "react";
import styled from "styled-components/native";
import dayjs from "dayjs";
import { TextDay } from "../Plus/PlusPresenter";
import CenterImage from "../../components/CenterImage";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";

const TopText = styled.Text`
  border: red;
`;
const Container = styled.View`
  width: 100%;
  border: 1.4px #4a4a4a;
  padding: 20px 20px 40px 20px;
`;
const ViewText = styled.View`
  /*  border: deeppink; */
`;

const Text = styled.Text`
  text-align: center;
`;

const Icons = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

const SettingIcon = styled(Ionicons)`
  margin: 10px 15px 10px 0;
`;

const DetailChild = ({ date, text }) => {
  return (
    <>
      <TopText>{date}</TopText>
      <Container>
        <TextDay>{dayjs(date).format("DD")}일</TextDay>
        <CenterImage source={require("../../img/abo.png")} />
        <ViewText>
          <Text>{text}</Text>
        </ViewText>
      </Container>
      <Icons>
        <SettingIcon name="create-outline" size={28} color="black" />
        <SettingIcon name="ios-trash-outline" size={28} color="black" />
      </Icons>
    </>
  );
};

export default DetailChild;
