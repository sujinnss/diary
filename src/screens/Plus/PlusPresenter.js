import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components/native";
import {
  Dimensions,
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { addDiary } from "../../redux/diarySlice";
import { Card, Datepicker, Modal } from "@ui-kitten/components";
import CenterImage from "../../components/CenterImage";

// TODO: 다른 페이지로 넘어갈 경우 달력 초기화 하애함
// TODO: 문제점 : ios는 cal 가운데 정렬이 됨 웹이랑 안드로이드는 가운데 정렬이 안됨
// TODO 모달의 다른 부분을 클릭시 적용 안되게 해야함
// TODO: 네비게이션의 header랑 safeArea 부분까지 모달의 back 배경으로 변경돼야함
// TODO: 모달,back유효성 검사
// TODO: 웹일 경우 textInput 높이값 조절 하기

const { width, height } = Dimensions.get("screen");

const ContainerStyles = StyleSheet.create({
  mobile: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom:30,
    borderWidth:1.4,
    borderRadius:4,
    borderColor: "black",
  },
  web: {
    width: "100%",
    height: height/2.5,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderWidth:1.4,
    borderRadius:4,
    borderColor: "black",
  },
});

export const HeaderRightButton = styled.View`
  padding-right: 15px;
`;
export const HeaderLeftButton = styled.View`
  padding-left: 15px;
`;

// const TouchableImage = styled(TouchableOpacity)`
//   width: 150px;
//   height: 120px;
//   justify-content: center;
//   align-items: center;
//   border-radius: 100px;
// `;
// const ImageDuck = styled.Image`
//   width: 150px;
//   height: 150px;
//   border-radius: 100px;
// `;

// const Container = styled.View`
//   flex: 1;
//   width: 100%;
//   border: 1.4px #4a4a4a;
//   padding: 20px;
// `;
//

const ViewDateTimePicker = styled.View`
  width: 90%;
  padding: 20px;
  background-color: #efefef;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 8px;
`;

export const TextDay = styled.Text`
  width: 50px;
  height: 25px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: black;
  font-size: 20px;
`;

const ViewText = styled.View``;

// const ViewImage = styled.View`
//   margin-bottom: 30px;
//   align-items: center;
// `;

const TextModal = styled.Text`
  font-size: 15px;
  line-height: 17px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
`;

const styles = StyleSheet.create({
  container: {
    minHeight: 192,
  },
  backdrop: {
    height: height,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

const PlusPresenter = ({ navigation }) => {
  console.log(navigation);
  console.log(height/2)

  const dispatch = useDispatch();
  // const { date, text } = useSelector((store) => store.diary.form);

  // console.log(date);
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState("");
  const [date, setDate] = useState(new Date());
  const [backModalVisible, setBackModalVisible] = useState(false);
  let scrollRef = useRef();

  // const scrollToInput = (reactNode) => {
  //   return scrollRef.props.scrollToFocusedInput(reactNode);
  // };

  const showMode = () => {
    // setShow(true);
    setModalVisible(true);
  };

  const handleSave = () => {
    setModalVisible(false);
    // dispatch(changeDate(date));
  };
  const handleDateCancel = () => {
    setModalVisible(false);
    setDate(new Date());
  };

  const handleChangeText = (nextText) => {
    console.log(nextText);
    setText(nextText);
    // dispatch(changeText(text));
  };

  const handleAddDiary = () => {
    console.log(text);
    console.log(date);
    dispatch(addDiary({ text, date: +date }));
    navigation.popToTop();
  };

  useEffect(() => {
    console.log(date);
    console.log(dayjs(date).format("MM-YYYY"));
  }, [date]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderLeftButton>
          <Ionicons
            name="ios-chevron-back"
            size={30}
            color="black"
            onPress={() => {
              setModalVisible(false);
              setBackModalVisible(true);
              Keyboard.dismiss();
            }}
          />
          <Modal
            visible={backModalVisible}
            backdropStyle={styles.backdrop}
            onBackdropPress={() => setBackModalVisible(false)}
          >
            <Card>
              <TextModal>
                작성한 내용이 저장되지 않아요.{"\n"}
                화면을 닫을까요?
              </TextModal>
              <Row>
                <TouchableOpacity onPress={() => setBackModalVisible(false)}>
                  <Ionicons name="close-sharp" size={25} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setBackModalVisible(false);
                    navigation.goBack();
                  }}
                >
                  <Ionicons name="checkmark" size={25} color="black" />
                </TouchableOpacity>
              </Row>
            </Card>
          </Modal>
        </HeaderLeftButton>
      ),
      headerRight: () => (
        <HeaderRightButton>
          <Ionicons
            onPress={handleAddDiary}
            name="md-checkmark-sharp"
            size={30}
            color="black"
          />
        </HeaderRightButton>
      ),
      title: dayjs(date).format("YYYY년 MM월"),
    });
  }, [navigation, text, date, backModalVisible, scrollRef]);

  return (
    <View
      style={
        Platform.OS === "ios" || Platform.OS === "android"
          ? ContainerStyles.mobile
          : ContainerStyles.web
      }
    >
      <TextDay onPress={showMode}>{dayjs(date).format("DD")}일</TextDay>
      <Modal
        visible={modalVisible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setModalVisible(false)}
      >
        <Card style={{ width: 230 }} disabled={true}>
          <TextModal>날짜를 선택해주세요.</TextModal>
          <Datepicker
            date={date}
            onSelect={(nextDate) => setDate(nextDate)}
            accessoryRight={() => {
              return (
                <Ionicons name="calendar-outline" size={24} color="black" />
              );
            }}
          />
          <Row>
            <TouchableOpacity onPress={handleDateCancel}>
              <Ionicons name="close-sharp" size={25} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSave}>
              <Ionicons name="checkmark" size={25} color="black" />
            </TouchableOpacity>
          </Row>
        </Card>
      </Modal>
      <CenterImage source={require("../../img/abo.png")} />
      <ViewText>
        <TextInput
          placeholder="Input message"
          placeholderTextColor={"gray"}
          style={{ borderColor: "gray", textAlign: "center" }}
          onChangeText={handleChangeText}
          value={text}
          multiline={true}
          maxLength={1000}
        />
      </ViewText>
    </View>
  );
};

export default PlusPresenter;
