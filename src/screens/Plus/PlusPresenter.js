import React, { useState } from "react";
import styled from "styled-components/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Alert, Modal, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { changeDate, changeText } from "../../redux/diarySlice";

// 다른 페이지로 넘어갈 경우 달력 초기화 하애함
const Container = styled.View`
  height: 70%;
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
  height: 50px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: black;
  font-size: 20px;
`;

const Text = styled.Text`
  align-items: center;
  color: red;
`;

const PlusPresenter = () => {
  const dispatch = useDispatch();
  const { date, text } = useSelector((store) => store.diary.form);

  // const [date, setDate] = useState(dayjs());
  console.log(date);
  const [mode, setMode] = useState("default");
  const [show, setShow] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState("");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    // setShow(Platform.OS === "ios");
    // setDate(currentDate);
    dispatch(changeDate(currentDate));
  };

  const showMode = (currentMode) => {
    setShow(true);
    setModalVisible(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const handleSave = () => {
    setModalVisible(!modalVisible);
  };
  const handleChangeText = (text) => {
    dispatch(changeText(text));
  };

  return (
    <Container>
      <TextDay onPress={showDatepicker}>{dayjs(date).format("DD")}일</TextDay>
      <Modal
        animationType="slide "
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        {modalVisible && (
          <ModalContainer
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <ViewDateTimePicker>
              <DateTimePicker
                value={new Date(+date)}
                mode={mode}
                is24Hour={false}
                display="spinner"
                onChange={onChange}
              />
              <Row>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(!modalVisible);
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
      </Modal>

      <TextInput
        placeholder="input"
        placeholderTextColor={"gray"}
        style={{ height: 40, borderColor: "gray", textAlign: "center" }}
        onChangeText={handleChangeText}
        value={text}
      />
    </Container>
  );
};

export default PlusPresenter;
