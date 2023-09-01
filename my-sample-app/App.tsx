import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { Chart } from "./components/Chart";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  AntDesign,
  Feather,
  FontAwesome,
  Fontisto,
} from "@expo/vector-icons";
import { HomeStackScreen } from "./components/HomeStackScreen";
import colors from "./color.config";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
            height: 60,
            paddingBottom: 10,
            paddingTop: 10,
            backgroundColor: "white",
            width: "100%",
            borderWidth: 0,
            position: "absolute",
          },
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name == "Home") {
              return !focused ? (
                <AntDesign name="home" size={24} color={"black"} />
              ) : (
                <FontAwesome name="home" size={26} color="black" />
              );
            } else if (route.name == "Chart") {
              return !focused ? (
                <Feather name="pie-chart" size={24} color={"black"} />
              ) : (
                <Fontisto name="pie-chart-1" size={24} color="black" />
              );
            } else if (route.name == "Notifications") {
              return !focused ? (
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color={focused ? "tomato" : "black"}
                />
              ) : (
                <Ionicons name="notifications-sharp" size={24} color="black" />
              );
            } else if (route.name == "Profile") {
              return !focused ? (
                <AntDesign
                  name="user"
                  size={24}
                  color={focused ? "tomato" : "black"}
                />
              ) : (
                <FontAwesome name="user" size={24} color="black" />
              );
            }
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Chart" component={Chart} />
        <Tab.Screen name="Notifications" component={Chart} />
        <Tab.Screen name="Profile" component={Chart} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
