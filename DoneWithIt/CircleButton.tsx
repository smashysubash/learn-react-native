import React from "react";
import { StyleSheet, Pressable, View, Image } from "react-native";

export const CircleButton = () => {
  return (
    <View>
      <Pressable>
        <Image source={require("./assets/images/plus.png")}></Image>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  circleButtonContainer: {},
  circleButton: {},
});
