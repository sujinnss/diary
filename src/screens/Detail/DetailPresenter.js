import React, { useLayoutEffect, useRef, useState } from "react";
import DetailChild from "./DetailChild";
import ViewWrapper from "../../components/ViewWrapper";
import moment from "moment";
import { groupBy, round, sortBy } from "lodash";
import { Dimensions, ScrollView, View } from "react-native";
import styled from "styled-components/native";

// 리덕스의 store의 개수만큼 DetailChild를 매핑한다
// 추후 내가 선택한 메모의 id를 찾아 그 아이디에 focus를 맞춰 scroll 할수있도록 한다
// useSelector을 사용
// TODO: TitleDate에 스크롤 이벤트를 줘서 위치가 0일 경우 네비게이션의 헤더 타이틀을 변경시킨다
// TODO: 스크롤이 가장 아래로 내려갔을 경우 allDataList의 가장 마지막 요소의 date를 가지고 온다
// TODO: titleText 안보이게 해애함

const TitleDateContainer = styled.View`
  width: 100%;
`;
const TitleDate = styled.Text`
  width: 100%;
  height: 1px;
  justify-content: center;
  align-items: center;
  color: #eeede6;
  font-size: 1px;
`;

const DetailPresenter = ({ allDataList, navigation }) => {
  const titlePosition = useRef([]);
  const firstDate = moment(allDataList[0].date).format("MMMM YYYY");
  const [titleDate, setTitleDate] = useState(firstDate);

  // 1번 date를 정렬
  const sortDataList = sortBy(allDataList, "date");

  //2번 dateFormat 추가
  const reFormatList = sortDataList.map((list) => {
    return {
      ...list,
      dateFormat: moment(list.date).format("MMMM YYYY"),
    };
  });

  const groupDataList = groupBy(reFormatList, "dateFormat");
  const allDataKeys = Object.keys(groupDataList);

  const onLayout = (e, key) => {
    const { y: onLayoutY } = e.nativeEvent.layout;
    console.log(e.nativeEvent.layout);
    console.log(onLayoutY);

    titlePosition.current.push({ pos: onLayoutY, title: key });
    console.log(titlePosition);
  };

  const onScroll = (e) => {
    const { y: onScrollY } = e.nativeEvent.contentOffset;
    console.log("현재 스크롤 위치 ", onScrollY);
    const sortPosition = sortBy(titlePosition.current, "pos").reverse();
    console.log(titlePosition);
    console.log(sortPosition);
    const titleUpdatable = sortPosition.filter((position) => {
      console.log(position.pos - 60, onScrollY);
      return position.pos - 60 <= onScrollY;
    });
    if (titleUpdatable.length > 0) {
      setTitleDate(titleUpdatable[0].title);
    }
  };

  useLayoutEffect(() => {
    console.log(titleDate);
    navigation.setOptions({
      title: titleDate,
    });
  }, [titleDate]);

  return (
    <ScrollView onScroll={onScroll}>
      <ViewWrapper>
        {allDataKeys.map((key) => {
          let listValue = groupDataList[key];
          return (
            <>
              <TitleDateContainer
                onLayout={(e) => {
                  onLayout(e, key);
                }}
              >
                <TitleDate>{key}</TitleDate>
              </TitleDateContainer>
              {listValue.map((value) => {
                return (
                  <DetailChild
                    navigation={navigation}
                    date={value.date}
                    text={value.text}
                    id={value.id}
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
