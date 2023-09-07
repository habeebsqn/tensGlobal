import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import ProfileIcon from "./ProfileIcon";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import LogoutModal from "./LogoutModal";

function DrawerContent({ navigation }) {
  const [isLogoutModalVisible, setLogoutModalVisible] = useState(false);

  const openLogoutModalHandler = () => {
    // Open the Logout modal
    setLogoutModalVisible(true);
  };

  const closeLogoutModalHandler = () => {
    // Close the Logout modal
    setLogoutModalVisible(false);
  };

  const onLogoutHandler = () => {
    setLogoutModalVisible(false);
    navigation.navigate("OtpScreen");
  };

  const drawerList = [
    {
      name: "Home",
      icon: require("../assets/icons/Prefrence.png"),
      width: 24,
      height: 24,
    },
    {
      name: "Payment",
      icon: require("../assets/icons/Payment.png"),
      width: 24,
      height: 24,
    },
    {
      name: "Pack History",
      icon: require("../assets/icons/History.png"),
      width: 24,
      height: 24,
    },
    {
      name: "Support",
      icon: require("../assets/icons/Support.png"),
      width: 24,
      height: 24,
    },
    {
      name: "Logout",
      icon: require("../assets/icons/logout.png"),
      color: "#FF4521",
      width: 24,
      height: 24,
    },
  ];

  return (
    <DrawerContentScrollView>
      <View style={styles.container}>
        <View>
          <ProfileIcon iw={60} il={60} cw={70} cl={70} />
        </View>
        <View style={styles.detailes}>
          <Text style={styles.profileName}>John Doe</Text>
          <TouchableOpacity style={styles.editContainer}>
            <Text style={styles.editProfile}>Edit Profile</Text>
          </TouchableOpacity>
          <Text style={styles.packsText}>
            <Text style={styles.packs}>34</Text>packs so far
          </Text>
        </View>
      </View>
      <View style={styles.drawerContainer}>
        {drawerList.map((item) => (
          <DrawerItem
            key={item.name}
            label={item.name}
            labelStyle={styles.label(item.color)}
            icon={() => (
              <Image
                style={styles.icon(item.width, item.height)}
                source={item.icon}
              />
            )}
            onPress={
              item.name === "Logout"
                ? openLogoutModalHandler
                : () => navigation.navigate(item.name)
            }
          />
        ))}
        <LogoutModal
          isVisible={isLogoutModalVisible}
          onClose={closeLogoutModalHandler}
          onLogout={onLogoutHandler}
        />
      </View>
      <View style={styles.drawerFooter}>
        <Text style={styles.footerTitle}>Become a Packer</Text>
        <Text style={styles.footerText}>
          Earn more money as a Dispatch Rider or a Mover with Packer
        </Text>
        <Text style={styles.footerLink}>Register today!</Text>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#F5F8FC",
    paddingBottom: 32,
    paddingTop: 32,
  },
  detailes: {
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  profileName: {
    color: "#19325b",
    fontSize: 21,
    fontWeight: "900",
    lineHeight: 22,
  },
  editContainer: {
    borderRadius: 23,
    backgroundColor: "#F5F8FC",
    height: 20,
    width: 114,
    alignItems: "center",
    justifyContent: "center",
  },
  editProfile: {
    color: "#96A5BE",
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 13.2, 
  },
  packs: {
    color: "#EDBC1D",
    fontSize: 13,
    fontWeight: "700",
  },
  packsText: {
    color: "#96A5BE",
    fontSize: 11,
    fontWeight: "500",
    lineHeight: 13.2, 
  },
  drawerContainer: {
    top: 45,
    left: 40,
  },
  label: (labelColor) => ({
    color: labelColor && labelColor,
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 13.2, 
  }),
  icon: (w, h) => ({
    width: w,
    height: h,
    resizeMode: "contain",
  }),
  drawerFooter: {
    width: 254,
    height: 104,
    borderRadius: 10,
    backgroundColor: "#19325b",
    position: "absolute",
    top: 656,
    left: 12,
    justifyContent: "center",
    paddingRight: 27,
    paddingLeft: 27,
    flexDirection: "column",
    justifyContent: "center",
  },
  footerTitle: {
    color: "white",
    fontSize: 13,
    fontWeight: "900",
    lineHeight: 13.2, 
    marginBottom: 5,
  },
  footerText: {
    color: "white",
    // fontFamily: "", 
    fontSize: 10,
    fontWeight: "500",
    lineHeight: 10, 
    marginBottom: 5,
  },
  footerLink: {
    color: "white",
    // fontFamily: "",
    fontSize: 10,
    fontWeight: "500",
    lineHeight: 10, 
    textDecorationLine: "underline",
    textDecorationColor: "white",
  },
});

export default DrawerContent;
