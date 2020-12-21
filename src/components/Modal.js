import React,{useState} from "react";
import { Alert, TouchableOpacity, View, Modal } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import styled from "styled-components/native/dist/styled-components.native.esm";

// const ModalContainer = styled.View`
//   background-color: #f1eee2;
//   opacity: 0.97;
//   flex: 1;
// `;
//
// const Row = styled.View`
//   flex-direction: row;
// `;
//
// const Text = styled.Text`
//   align-items: center;
//   color: red;
// `;
//
// const Modal = ({props}) => {
//     console.log(props)
//
//   const [date, setDate] = useState(new Date());
//   const [mode, setMode] = useState("default");
//   const [show, setShow] = useState(false);
//   const [modalVisible, setModalVisible] = useState(false);
//
//     // const [value, setValue] = useState("Input Text");
//     // const day = 13;
//
//   // const onChange = (event, selectedDate) => {
//   //   const currentDate = selectedDate || date;
//   //   // setShow(Platform.OS === "ios");
//   //   setDate(currentDate);
//   // };
//   return (
//     <Modal
//       animationType="slide "
//       transparent={true}
//       visible={modalVisible}
//       onRequestClose={() => {
//         Alert.alert("Modal has been closed.");
//       }}
//     >
//       {modalVisible && (
//         <ModalContainer
//           style={{ justifyContent: "center", alignItems: "center" }}
//         >
//           <View style={{ width: "90%", height: 260, backgroundColor: "white" }}>
//             <DateTimePicker
//               testID="dateTimePicker"
//               value={date}
//               mode={mode}
//               is24Hour={false}
//               display="spinner"
//               onChange={props.onChange}
//             />
//             <Row>
//               <TouchableOpacity
//                 onPress={() => {
//                   setModalVisible(!modalVisible);
//                 }}
//               >
//                 <Text
//                   style={{
//                     fontSize: "20px",
//                     backgroundColor: "blue",
//                     width: 50,
//                   }}
//                 >
//                   Hide
//                 </Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 onPress={() => {
//                   setModalVisible(!modalVisible);
//                 }}
//               >
//                 <Text
//                   style={{
//                     fontSize: "20px",
//                     backgroundColor: "orange",
//                     width: 50,
//                   }}
//                 >
//                   OK
//                 </Text>
//               </TouchableOpacity>
//             </Row>
//           </View>
//         </ModalContainer>
//       )}
//     </Modal>
//   );
// };

export default Modal;
