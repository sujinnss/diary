import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  ImageBackground,
  StatusBar,
  View,
  SafeAreaView,
} from "react-native";
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
      "https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
      require("./assets/splash.png"),
    ]);
    const fonts = cacheFonts([Ionicons.font]);
    return Promise.all([...images, ...fonts]);
  };
  const onFinish = () => setLoading(false);

  return !loading ? (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
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
    </SafeAreaView>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={(e) => console.error(e)}
    />
  );
}
