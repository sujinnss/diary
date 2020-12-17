import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Image, ImageBackground, StatusBar, View } from "react-native";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./src/navigation/Stack";
import * as Font from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";

const cacheImages = (images) => {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};

const cacheFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));
const backImage = {
  uri:
    "https://cdn.crowdpic.net/list-thumb/thumb_l_E77B43B230AC43C64681B28CB9646E43.jpg",
};

export default function App() {
  const [loading, setLoading] = useState(true);

  const loadAssets = () => {
    const images = cacheImages([
      "https://images.unsplash.com/photo-1571847140471-1d7766e825ea?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvc3RlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      require("./assets/favicon.png"),
    ]);
    const fonts = cacheFonts([Ionicons.font]);
    return Promise.all([...images, ...fonts]);
  };
  const onFinish = () => setLoading(false);

  return loading ? (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={{
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center",
            alignSelf: "stretch",
          }}
          source={backImage}
        >
          <NavigationContainer>
            <Stack />
          </NavigationContainer>
          <StatusBar barStyle={"light-content"} />
        </ImageBackground>
      </View>
    </SafeAreaProvider>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={(e) => console.error(e)}
    />
  );
}
