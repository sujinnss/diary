import React, { useLayoutEffect, useState, useRef, useEffect } from "react";
import styled from "styled-components/native";
import { TouchableOpacity, StyleSheet, Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DayContainer from "../../components/Day/DayContainer";
import ViewWrapper from "../../components/ViewWrapper";
import ViewPager from "@react-native-community/viewpager";
import { useSelector } from "react-redux";
import { sortBy, groupBy } from "lodash";
import moment from "moment";
import { Ionicons } from "@expo/vector-icons";
import { HeaderLeftButton } from "../Plus/PlusPresenter";

// TODO: initialPage는 현재 년 월 을 뽑아서  allDataKeys에서 같은게 있으면 그 페이지가 initial 없으면 오늘 날에 해당하는  페이지 추가

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

const MainPresenter = ({ nav }) => {
  const today = moment().format("YYYY-MM");
  const [mainHeaderTitle, setMainHeaderTitle] = useState("123");

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

  const arrKey = objectForArray.findIndex((data) => data[0] === today);

  useLayoutEffect(() => {
    nav.setOptions({
      title: mainHeaderTitle,
    });
  }, [mainHeaderTitle]);

  const handlePagerEvent = (e) => {
    console.log(e);
    const { position } = e.nativeEvent;
    setMainHeaderTitle(allDataKeys[position]);

  };

  return (
    <ViewWrapper>
      <ViewPager
        style={{ flex: 1 }}
        initialPage={arrKey}
        orientation="vertical"
        onPageScroll={handlePagerEvent}
      >
        {allDataKeys.map((listKey) => {
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
