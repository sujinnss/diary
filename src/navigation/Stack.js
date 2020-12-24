import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "../screens/Main";
import Setting from "../screens/Setting";
import Plus from "../screens/Plus";
import Detail from "../screens/Detail";
import dayjs from "dayjs";

const StackNav = createStackNavigator();

const Stack = () => {
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
            gestureEnabled: false,
            title: "",
            cardStyle: {
              backgroundColor: "#EEEDE6",
            },
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
