import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "../screens/Main";
import Setting from "../screens/Setting";
import Plus from "../screens/Plus";
import Detail from "../screens/Detail";

const StackNav = createStackNavigator();

const Stack = () => {
  // const insets = useSafeAreaInsets();

  return (
    // <View style={{ paddingBottom: insets.bottom ,flex:1}}>
    <>
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
        <StackNav.Screen name="Plus" component={Plus} />
        <StackNav.Screen name="Setting" component={Setting} />
        <StackNav.Screen name="Detail" component={Detail} />
      </StackNav.Navigator>
    </>
  );
};

export default Stack;
