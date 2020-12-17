import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "../screens/Main";
import Setting from "../screens/Setting";

const StackNav = createStackNavigator();

const Stack = () => {
  return (
    <StackNav.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "black",
          borderBottomColor: "black",
          shadowColor: "black",
        },
        headerTintColor: "white",
        headerBackTitleVisible: false,
      }}
    >
      <StackNav.Screen name="Main" component={Main} />
      <StackNav.Screen name="Setting" component={Setting} />
    </StackNav.Navigator>
  );
};

export default Stack;
