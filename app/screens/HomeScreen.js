import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Platform,
  KeyboardAvoidingView,
} from "react-native";

import MapView from "react-native-maps";


function HomeScreen(props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      enabled
      style={styles.container}
    >
      <View style={styles.previewContainer}>
        <View style={styles.promptContainer}>
          <Text style={styles.promptTitle}>Hey peter!</Text>
          <Text style={styles.promptText}>What are you packing today?</Text>
        </View>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825, // Initial latitude
              longitude: -122.4324, // Initial longitude
              latitudeDelta: 0.0922, // Zoom level (latitude)
              longitudeDelta: 0.0421, // Zoom level (longitude)
            }}
          ></MapView>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          <Image
            style={styles.icon}
            source={require("../assets/icons/Vector2.png")}
          />
          <TextInput
            style={styles.searchInput}
            keyboardType="ascii-capable"
            placeholder="Enter pickup address"
            onChangeText={(text) => {}}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            style={styles.icon}
            source={require("../assets/icons/Vector.png")}
          />
          <TextInput
            style={styles.searchInput}
            keyboardType="ascii-capable"
            placeholder="Where are you packing to?"
            onChangeText={(text) => {}}
          />
        </View>
        <TouchableOpacity style={styles.searchBotton}>
          <Text style={styles.searchText}>Select a Packer</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  previewContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    top: "12%",
  },
  promptContainer: {
    position: "absolute",
    bottom: 330,
    right: 130,
    width: 175,
    height: 72,
    borderRadius: 19,
    backgroundColor: "rgba(25, 50, 91, 0.09)",
    zIndex: 100,
    justifyContent: "space-evenly",
    paddingLeft: 15,
  },
  promptTitle: {
    fontWeight: "900",
    fontSize: 18,
    lineHeight: 18,
    color: "#19325B",
  },
  promptText: {
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 15,
    color: "#19325B",
  },
  mapContainer: {
    height: 366,
    width: 290,
    backgroundColor: "white",
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    flex: 1,
    width: "100%",
    borderRadius: 32,
  },
  searchContainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 271,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 26,
    height: 26,
    marginRight: 5,
    resizeMode: "contain",
  },
  searchInput: {
    width: 247,
    height: 40,
    backgroundColor: "#F1F1F1",
    borderRadius: 5,
    paddingLeft: 15,
  },
  searchBotton: {
    width: 288,
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFC405",
    borderRadius: 15,
    ...Platform.select({
      ios: {
        shadowColor: "rgba(255, 245, 213, 9)",
        shadowOffset: {
          width: 2,
          height: 10,
        },
        shadowOpacity: 30,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  searchText: {
    fontWeight: "900",
    color: "#19325B",
  },
});

export default HomeScreen;
