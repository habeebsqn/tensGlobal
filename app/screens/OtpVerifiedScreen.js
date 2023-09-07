import React from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";

import { useDispatch, useSelector } from "react-redux";
import { uiSliceAction } from "../../store/uiSlice";

const OtpVerifiedScreen = ({ message }) => {
  const dispatch = useDispatch();
  const visible = useSelector((state) => state.ui.openModal);
  const type = useSelector((state) => state.ui.modalType);
  const navigation = useNavigation();

  const closeModalHandler = () => {
    navigation.navigate("Home");
    dispatch(uiSliceAction.closeCartHandler());
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={type === "otp" && visible}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.iconDiv}>
            <View style={styles.iconContainer}>
              <FontAwesomeIcon icon="thumbs-up" size={40} style={styles.icon} />
            </View>
          </View>
          <View style={styles.modalRectangle}>
            <Text style={styles.modalText}>{message}</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={closeModalHandler}
            >
              <Text style={styles.buttonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  iconDiv: {
    position: "absolute",
    bottom: "80%",
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "rgba(255, 255, 255, 0.7)",
    width: 90,
    height: 90,
    zIndex: 100,
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: "#0276ff",
    height: "100%",
    width: "100%",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: "#fbfcfe",
  },
  modalContent: {
    width: 256,
    height: 215,
    alignItems: "center",
  },
  modalText: {
    color: "#617A97",
    fontSize: 13,
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: 15,
    textAlign: "center",
    padding: 10,
  },
  modalRectangle: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 19,
    height: 215,
    width: 256,
    justifyContent: "center",
    alignItems: "center",
  },
  modalButton: {
    backgroundColor: "#0276ff",
    borderRadius: 10,
    height: 31,
    position: "absolute",
    top: 150,
    width: 116,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
});

export default OtpVerifiedScreen;
