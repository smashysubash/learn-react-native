import { StatusBar } from "react-native";
import { SafeAreaView, StyleSheet, View, Image } from "react-native";
import { ImageViewer } from "./ImageViewer";
import { Button } from "./Button";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { IconButton } from "./IconButton";
import { CircleButton } from "./CircleButton";

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAppOptions, setShowAppOptions] = useState(true);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("You did not select any image.");
    }
  };
  console.log(showAppOptions);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <View style={styles.imageContainer}>
          <ImageViewer selectedImage={selectedImage} />
        </View>
        {showAppOptions ? (
          <View style={styles.iconContainer}>
            <IconButton
              iconsrc="./assets/images/restart.png"
              label="Reset"
            ></IconButton>
            <CircleButton></CircleButton>
            <IconButton
              iconsrc="./assets/images/download.png"
              label="Save"
            ></IconButton>
          </View>
        ) : (
          <View style={styles.footerContainer}>
            <Button
              theme="special"
              label="Choose a photo"
              onPress={pickImageAsync}
            />
            <Button
              label="Use this photo"
              onPress={() => setShowAppOptions(true)}
            />
          </View>
        )}
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
  iconContainer: {
    flex: 1,
  },
});
