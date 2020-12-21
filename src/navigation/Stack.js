import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "../screens/Main";
import Setting from "../screens/Setting";
import Plus from "../screens/Plus";
import Detail from "../screens/Detail";
import LogoTitle from "../components/LogoTitle";
import { Button } from "react-native";

const StackNav = createStackNavigator();

const Stack = () => {
  // const insets = useSafeAreaInsets();

  return (
    // <View style={{ paddingBottom: insets.bottom ,flex:1}}>
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
        <StackNav.Screen name="Main" component={Main} />
        <StackNav.Screen
          options={{
            headerTitle: "DECEMBER",
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="SAVE"
                color="black"
              />
            ),
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
