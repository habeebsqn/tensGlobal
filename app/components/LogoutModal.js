import React from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";



const LogoutModal = ({ isVisible, onClose, onLogout }) => {
 
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={isVisible}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* <FontAwesomeIcon icon="fa-reply" size={40} style={styles.icon} /> */}
          <Image
            style={styles.icon}
            source={require("../assets/icons/logout2.png")}
          />
          <Text style={styles.modalText}>
            Are you sure you want to logout of this account?
          </Text>
          <View style={styles.modalButtonGroup}>
            <TouchableOpacity
              style={styles.modalButton("#E3EBF8")}
              onPress={onClose}
            >
              <Text style={styles.buttonText("#19325B")}>Stay here</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton("#FFEFEB")}
              onPress={onLogout}
            >
              <Text style={styles.buttonText("#FF4521")}>Logout</Text>
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
  },

  icon: {
    position: "absolute",
    top: 30,
    left: "40%",
    width: 44,
    height: 46,
    resizeMode: "contain",
  },
  modalContent: {
    width: 266,
    height: 239,
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "rgba(255, 255, 255, 0.9)", 
    borderRadius: 25,
  },
  modalText: {
    color: "#19325B",
    fontSize: 17,
    fontWeight: "400",
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
  modalButtonGroup: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  modalButton: (color) => ({
    backgroundColor: color,
    borderRadius: 10,
    height: 46,
    width: 97,
    justifyContent: "center",
    alignItems: "center",
  }),
  buttonText: (color) => ({
    color: color,
    fontSize: 14,
    fontWeight: "400",
  }),
});

export default LogoutModal;
