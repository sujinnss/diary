import React from "react";
import DetailPresenter from "./DetailPresenter";
import { useSelector } from "react-redux";
import { ScrollView } from "react-native";

// 리덕스에서 id 를 조회해 데이터를 뿌려준다

const DetailContainer = ({ navigation }) => {
  const { list } = useSelector((store) => store.diary);

  return <DetailPresenter allDataList={list} navigation={navigation} />;
};

export default DetailContainer;
