import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DayContainer from "../../components/Day/DayContainer";
import ViewWrapper from "../../components/ViewWrapper";
import ViewPager from "@react-native-community/viewpager";
import { useSelector } from "react-redux";
import { sortBy, groupBy } from "lodash";
import moment from "moment";

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
  flex-wrap: wrap;
  flex-direction: row;
  align-self: stretch;
`;

const MainPresenter = () => {
  const navigation = useNavigation();
  const goToPlus = () => navigation.navigate("Plus");
  const { list } = useSelector((store) => store.diary);

  const sortDataList = sortBy(list, "date");
  const reFormatList = sortDataList.map((list) => {
    return {
      ...list,
      dateFormat: moment(list.date).format("YYYY-MM"),
    };
  });
  const groupDataList = groupBy(reFormatList, "dateFormat");
  const allDataKeys = Object.keys(groupDataList);

  const objectForArray = Object.entries(groupDataList);

  return (
    <ViewWrapper>
      <ViewPager style={{ flex: 1 }} initialPage={0} orientation="vertical">
        {allDataKeys.map((listKey) => {
          // console.log(objectForArray.findIndex((data) => data[0] === listKey));
          // console.log(objectForArray[0])
          const arrKey = objectForArray.findIndex(
            (data) => data[0] === listKey
          );
          return (
            <ContentView key={arrKey}>
              <DayContainer contents={objectForArray[arrKey]} />
            </ContentView>
          );
        })}
      </ViewPager>
      <ButtonView>
        <TouchableButton onPress={goToPlus}>
          <ButtonText>+</ButtonText>
        </TouchableButton>
      </ButtonView>
    </ViewWrapper>
  );
};

export default MainPresenter;
