import React, { useLayoutEffect, useRef, useState } from "react";
import DetailChild from "./DetailChild";
import ViewWrapper from "../../components/ViewWrapper";
import moment from "moment";
import { groupBy, round, sortBy } from "lodash";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

// 리덕스의 store의 개수만큼 DetailChild를 매핑한다
// 추후 내가 선택한 메모의 id를 찾아 그 아이디에 focus를 맞춰 scroll 할수있도록 한다
// useSelector을 사용
// TODO: TitleDate에 스크롤 이벤트를 줘서 위치가 0일 경우 네비게이션의 헤더 타이틀을 변경시킨다

const TitleDateContainer = styled.View`
  width: 100%;
`;
const TitleDate = styled.Text`
  width: 100%;
  height: 25px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: black;
  font-size: 20px;
`;

const DetailPresenter = ({ allDataList, navigation }) => {
  const [titleDate, setTitleDate] = useState();
  const titlePosition = useRef([]);

  const onLayout = (e) => {
    const { y: onLayoutY } = e.nativeEvent.layout;
    console.log(e.nativeEvent.layout);
    console.log(onLayoutY);
    titlePosition.current.push({ pos: onLayoutY });
    console.log(titlePosition);
  };

  const onScroll = (e) => {
    const { y: onScrollY } = e.nativeEvent.contentOffset;
    console.log("현재 스크롤 위치 ", onScrollY);
    titlePosition.current?.map((position) => {
      console.log(position.pos, onScrollY);
      if (position.pos - 20 <= onScrollY) {
        console.log("같음");
        setTitleDate(position.pos);
      }
    });
  };

  useLayoutEffect(() => {
    console.log(titleDate);
    navigation.setOptions({
      title: titleDate,
    });
  }, [titleDate]);

  // 1번 date를 정렬
  const sortDataList = sortBy(allDataList, "date");

  //2번 dateFormat 추가
  const reFormatList = sortDataList.map((list) => {
    return {
      ...list,
      dateFormat: moment(list.date).format("YYYY-MM"),
    };
  });

  const groupDataList = groupBy(reFormatList, "dateFormat");
  const allDataKeys = Object.keys(groupDataList);

  return (
    <ScrollView onScroll={onScroll}>
      <ViewWrapper>
        {allDataKeys.map((key) => {
          let listValue = groupDataList[key];
          return (
            <>
              <TitleDateContainer onLayout={onLayout}>
                <TitleDate>{key}</TitleDate>
              </TitleDateContainer>
              {listValue.map((value) => {
                return (
                  <DetailChild
                    date={value.date}
                    text={value.text}
                    key={value.id}
                  />
                );
              })}
            </>
          );
        })}
      </ViewWrapper>
    </ScrollView>
  );
};

export default DetailPresenter;
