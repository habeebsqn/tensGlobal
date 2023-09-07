import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";


import OtpScreen from "../screens/OtpScreen";
import OtpVerifiedScreen from "../screens/OtpVerifiedScreen";


function RootLayout(props) {
 
  return (
    <SafeAreaView style={styles.container}>
      <OtpScreen />
      <OtpVerifiedScreen message="Thanks for being awesome, join a network of seamless delivery & hassle-free logistics" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    alignItems: "center",
  },
  imgCover: {
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#edbc1d",
    width: 32,
    height: 32,
    left: 100,
  },
});

export default RootLayout;
