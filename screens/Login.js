import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

const Login = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/login.png")} />
      <Text style={styles.welcomepg}>Welcome to CourseCompass</Text>
      <Text style={styles.loginText}>Login below</Text>
      <View style={styles.googleButton}>
        <TouchableOpacity style={styles.logInButton}>
          <AntDesign
            name="google"
            size={24}
            color="white"
            style={{ paddingRight: 15 }}
          />
          <Text style={styles.buttonText}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 15,
    backgroundColor: "#E0F7FA",
  },
  image: {
    marginTop: 25,
    paddingBottom: 5,
    borderRadius: 20,
  },
  welcomepg: {
    color: "blue",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "500",
    marginTop: 20,
  },
  loginText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  logInButton: {
    marginTop: 30,
    backgroundColor: "#4285F4", // Google Blue color
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
  },
  buttonText: {
    paddingLeft: 5,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Login;
