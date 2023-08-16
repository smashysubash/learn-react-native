import React from "react";
import { StyleSheet, Image } from "react-native";

interface props {
  selectedImage: string | null;
}

export const ImageViewer = ({ selectedImage }: props) => {
  const imageSouce = selectedImage
    ? { uri: selectedImage }
    : require("./assets/images/background-image.png");
  return (
    <>
      <Image style={styles.image} source={imageSouce} />
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 328,
    height: 440,
    borderRadius: 18,
  },
});
