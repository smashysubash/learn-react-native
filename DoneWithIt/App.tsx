import { StatusBar } from "react-native";
import { SafeAreaView, StyleSheet, View, Image } from "react-native";
import { ImageViewer } from "./ImageViewer";
import { Button } from "./Button";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <View style={styles.imageContainer}>
          <ImageViewer selectedImage={selectedImage} />
        </View>
        <View style={styles.footerContainer}>
          <Button
            theme="special"
            label="Choose a photo"
            onPress={pickImageAsync}
          />
          <Button label="Use this photo" />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
  },
  imageContainer: {
    flex: 3,
    paddingTop: 58,
    alignSelf: "center",
  },
  footerContainer: {
    flex: 1,
    alignItems: "center",
  },
});
