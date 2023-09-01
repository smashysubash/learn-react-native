import React from "react";
import { StyleSheet, Pressable, Image, Text } from "react-native";

interface iconProp {
  iconsrc: string;
  label: string;
  onPress?: () => void;
}
export const IconButton = ({ iconsrc, label, onPress }: iconProp) => {
  //   console.log(iconsrc);
  return (
    <Pressable>
      <Image
        source={{
          uri: "C:/Users/Admin/Desktop/subash/learn-react-native/DoneWithIt/assets/images/download.png",
        }}
        style={styles.iconimg}
      ></Image>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconButtonContainer: {
    color: "white",
  },
  iconimg: {
    width: 100,
    height: 100,
  },
  label: {
    color: "white",
  },
});
