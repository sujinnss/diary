import React, { useLayoutEffect, useState, useEffect } from "react";
import styled from "styled-components/native";
import { Alert, Modal, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { addDiary, changeDate, changeText } from "../../redux/diarySlice";
import { Datepicker } from "@ui-kitten/components";

// 다른 페이지로 넘어갈 경우 달력 초기화 하애함

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

const ModalContainer = styled.View`
  background-color: #dbd8ce;
  opacity: 0.98;
  flex: 1;
`;

const ViewDateTimePicker = styled.View`
  width: 90%;
  padding: 20px;
  background-color: #efefef;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
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

// const Text = styled.Text`
//   align-items: center;
//   color: red;
// `;

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
  const handleChangeText = (nextText) => {
    console.log(nextText);
    setText(nextText);
    // dispatch(changeText(text));
  };

  const handleAddDiary = () => {
    console.log(text);
    console.log(date);
    dispatch(addDiary({text, date}));
  };

  useEffect(() => {
    console.log(text);
  }, [text]);

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
    });
  }, [navigation]);

  return (
    <Container>
      <TextDay onPress={showMode}>{dayjs(date).format("DD")}일</TextDay>

      {modalVisible && (
        <ModalContainer
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <ViewDateTimePicker>
            {/*<DateTimePicker*/}
            {/*  value={new Date(+date)}*/}
            {/*  mode="date"*/}
            {/*  display*/}
            {/*  onChange={onChange}*/}
            {/*/>*/}
            <Datepicker
              date={date}
              onSelect={(nextDate) => setDate(nextDate)}
            />
            <Row>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                <Ionicons name="close-sharp" size={30} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSave}>
                <Ionicons name="checkmark" size={30} color="black" />
              </TouchableOpacity>
            </Row>
          </ViewDateTimePicker>
        </ModalContainer>
      )}

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
