import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./StackNavigator";
import Splash from "./screens/Splash";
import Login from "./screens/Login";
export default function App() {
  return (
    <View style={styles.container}>
      {/* <StackNavigator /> */}
      {/* <Splash /> */}
      <Login />
      <StatusBar style="auto" />
    </View>
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
