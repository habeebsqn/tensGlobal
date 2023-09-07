import React from "react";
import { View, StyleSheet, Image } from "react-native";

function ProfileIcon({ iw, il, cw, cl }) {
  return (
    <View style={styles.imgCover(cw, cl)}>
      <Image
        style={styles.img(iw, il)}
        source={require("../assets/profile2.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imgCover: (cw, cl) => ({
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#edbc1d",
    width: cw,
    height: cl,
    right: 24,
    alignItems: "center",
    justifyContent: "center",
  }),
  img: (iw, il) => ({
    borderRadius: 100,
    width: iw,
    height: il,
    resizeMode: "cover",
  }),
});

export default ProfileIcon;
