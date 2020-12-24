import React, { useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components/native";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { addDiary } from "../../redux/diarySlice";
import { Card, Datepicker, Modal } from "@ui-kitten/components";

// 다른 페이지로 넘어갈 경우 달력 초기화 하애함
// 문제점 : ios는 cal 가운데 정렬이 됨 웹이랑 안드로이드는 가운데 정렬이 안됨
// 모달의 다른 부분을 클릭시 적용 안되게 해야함

const TouchableImage = styled(TouchableOpacity)`
  width: 150px;
  height: 120px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;
const ImageDuck = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 100px;
`;

const Container = styled.View`
  height: auto;
  width: 100%;
  border: 1.5px #2d2d2d;
  padding: 20px;
`;

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

const TextDay = styled.Text`
  width: 50px;
  height: 25px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: black;
  font-size: 20px;
`;

const ViewText = styled.View`
  /* border: 1px solid pink; */
  margin-bottom: 10px;
`;

const ViewImage = styled.View`
  margin-bottom: 30px;
  align-items: center;
`;

const TextDatepicker = styled.Text`
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
`;

const styles = StyleSheet.create({
  container: {
    minHeight: 192,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

const PlusPresenter = ({ navigation }) => {
  console.log(navigation);
  const dispatch = useDispatch();
  // const { date, text } = useSelector((store) => store.diary.form);

  // console.log(date);
  const [show, setShow] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState(new Date());

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
  };

  useEffect(() => {
    console.log(date);

    console.log(dayjs(date).format("MM-YYYY"));
  }, [date]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons
          onPress={handleAddDiary}
          name="checkmark"
          size={30}
          color="black"
        />
      ),
      title: dayjs(date).format("YYYY년 DD월"),
    });
  }, [navigation, text, date]);

  return (
    <Container>
      <TextDay onPress={showMode}>{dayjs(date).format("DD")}일</TextDay>

      <Modal
        visible={modalVisible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setModalVisible(false)}
      >
        <Card style={{ width: 230 }} disabled={true}>
          <TextDatepicker>날짜를 선택해주세요.</TextDatepicker>
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

      <ViewImage>
        <TouchableImage>
          <ImageDuck source={require("../../img/abo.png")} />
        </TouchableImage>
      </ViewImage>
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
    </Container>
  );
};

export default PlusPresenter;
