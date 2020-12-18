import React, { useState } from "react";
import styled from "styled-components/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  TextInput,
  Button,
  Modal,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

// 다른 페이지로 넘어갈 경우 달력 초기화 하애함
const Container = styled.View`
  height: 70%;
  width: 95%;
  border: black;
  padding: 20px;
`;

const ModalContainer = styled.View`
  background-color: #f1eee2;
  opacity: 0.97;
  flex: 1;
`;

const Row = styled.View`
  flex-direction: row;
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
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("default");
  const [show, setShow] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [value, setValue] = useState("Input Text");
  const day = 13;

  // const DateTimePicker = require("@react-native-community/datetimepicker");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    // setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setModalVisible(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <Container>
      <TextDay onPress={showDatepicker}>{day} 일</TextDay>

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
            <View
              style={{ width: "90%", height: 260, backgroundColor: "white" }}
            >
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
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
                  <Text
                    style={{
                      fontSize: "20px",
                      backgroundColor: "blue",
                      width: 50,
                    }}
                  >
                    Hide
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text
                    style={{
                      fontSize: "20px",
                      backgroundColor: "orange",
                      width: 50,
                    }}
                  >
                    OK
                  </Text>
                </TouchableOpacity>
              </Row>
            </View>
          </ModalContainer>
        )}
      </Modal>

      <TextInput
        placeholderTextColor={"red"}
        style={{ height: 40, borderColor: "gray", textAlign: "center" }}
        onChangeText={(text) => setValue(text)}
        value={value}
      />
    </Container>
  );
};

export default PlusPresenter;
