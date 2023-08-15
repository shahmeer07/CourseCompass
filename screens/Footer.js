import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Import the FontAwesome icon library

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.copyright}>
        © {new Date().getFullYear()} Shahmeer07
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#4285F4", // Blue color
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    height: 40,
    width: 400,
  },
  copyright: {
    marginRight: 40,
    color: "white",
    fontSize: 14,
  },
});

export default Footer;
