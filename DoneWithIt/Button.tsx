import { Image } from "react-native";
import { StyleSheet, View, Pressable, Text } from "react-native";

interface props {
  label: string;
  theme?: string;
  onPress?: () => void;
}

const defaultProps = {
  theme: "primary",
};

export const Button = ({ label, theme, onPress }: props) => {
  return (
    <>
      {theme && theme === "special" ? (
        <View style={styles.buttonSpecialContainer}>
          <Pressable onPress={onPress} style={styles.buttonSpecial}>
            <Image source={require("./assets/images/image.png")} />
            <Text style={styles.buttonLabelSpecial}>{label}</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => alert("You pressed a button,")}
          >
            <Text style={styles.buttonLabel}>{label}</Text>
          </Pressable>
        </View>
      )}
    </>
  );
};

Button.defaultProps = defaultProps;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  buttonSpecialContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    borderColor: "#ffcf30",
    borderWidth: 4,
    borderStyle: "solid",
    borderRadius: 18,
  },

  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
  buttonSpecial: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  buttonLabelSpecial: {
    color: "#000",
    fontSize: 16,
    marginLeft: 5,
  },
});
