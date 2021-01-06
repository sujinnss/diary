import React from "react";
import styled from "styled-components/native";
import dayjs from "dayjs";
import {TextContainer, TextDay, TextEnDay} from "../Plus/PlusPresenter";
import CenterImage from "../../components/CenterImage";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import { ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import { deleteDiary } from "../../redux/diarySlice";
import DayContainer from "../../components/Day/DayContainer";

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

const DetailChild = ({ navigation, date, text, id }) => {
  console.log("key", id);

  const dispatch = useDispatch();
  const listId = id;

  const handleDeleteDiary = () => {
    console.log("삭제 id", listId);
    console.log("삭제 text", text);
    dispatch(deleteDiary({ id: listId }));
    navigation.navigate("Main");
  };
  return (
    <>
      <Container>
        <TextContainer>
          <TextDay>{dayjs(date).format("DD")}일</TextDay>
          <TextEnDay>{moment(date).format("ddd")}</TextEnDay>
        </TextContainer>
        <CenterImage source={require("../../img/abo.png")} />
        <ViewText>
          <Text>{text}</Text>
        </ViewText>
      </Container>
      <Icons>
        <SettingIcon name="create-outline" size={28} color="black" />
        <SettingIcon
          name="ios-trash-outline"
          size={28}
          color="black"
          onPress={handleDeleteDiary}
        />
      </Icons>
    </>
  );
};

export default DetailChild;
