import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "../screens/Main";
import Setting from "../screens/Setting";
import Plus from "../screens/Plus";
import Detail from "../screens/Detail";
import { Ionicons } from "@expo/vector-icons";
import dayjs from "dayjs";
import { useSelector } from "react-redux";

const StackNav = createStackNavigator();

const Stack = () => {
  const form = useSelector((state) => state.diary.form);
  return (
    <>
      <StackNav.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#EEEDE6",
          },
          headerTintColor: "black",
          headerBackTitleVisible: false,
        }}
      >
        <StackNav.Screen
          options={{
            title: dayjs().format("MM월 YYYY"),
          }}
          name="Main"
          component={Main}
        />
        <StackNav.Screen
          options={{
            title: "DECEMBER",
            // headerRight: () => (
            //   <Ionicons
            //     onPress={() => alert(form.date)}
            //     name="checkmark"
            //     size={30}
            //     color="black"
            //   />
            // ),
          }}
          name="Plus"
          component={Plus}
        />
        <StackNav.Screen name="Setting" component={Setting} />
        <StackNav.Screen name="Detail" component={Detail} />
      </StackNav.Navigator>
    </>
  );
};

export default Stack;
