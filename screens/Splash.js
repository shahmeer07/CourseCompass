import { Image, StyleSheet, View, Dimensions, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Typewriter from "react-native-typewriter";

const Splash = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowText(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.background} />
      {showText && (
        <View style={styles.textContainer}>
          <Text style={styles.logo}>CourseCompass</Text>
          <Typewriter style={styles.typewriter} typing={1} maxDelay={50}>
            <Text style={styles.tagline}>Find the right course for you</Text>
          </Typewriter>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    marginTop: 900,
    position: "absolute",
    backgroundColor: "#000080", // Dark blue color
    width: 800,
    height: 820,
  },
  textContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginTop: 15,
    fontSize: 36,
    color: "#FFD700", // Bronze color
  },
  tagline: {
    fontSize: 18,
    color: "#FFD700", // Bronze color
    marginTop: 10,
  },
  typewriter: {
    marginTop: 10,
  },
});

export default Splash;
