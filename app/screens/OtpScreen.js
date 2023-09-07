import React from "react";
import { StyleSheet } from "react-native";
import { Text, TextInput, View, Button } from "react-native";
import { useDispatch } from "react-redux";
import { uiSliceAction } from "../../store/uiSlice";

function OtpScreen() {
  const dispatch = useDispatch();

  const viewModalHandler = () => {
    dispatch(uiSliceAction.openCartHandler("otp"));
  };

  return (
    <React.Fragment>
      <View style={styles.div}>
        <Text style={styles.text1}>Complete your onboarding process</Text>
        <Text style={styles.text2}>
          A verification code has been sent to your phone number. Kindly verify
        </Text>
      </View>
      <Text style={styles.text3}>Enter verification code</Text>
      <View style={styles.otpContainer}>
        <TextInput
          style={styles.otpInput}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={(text) => {}}
        />
        <TextInput
          style={styles.otpInput}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={(text) => {}}
        />
        <TextInput
          style={styles.otpInput}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={(text) => {}}
        />
        <TextInput
          style={styles.otpInput}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={(text) => {}}
        />
        <TextInput
          style={styles.otpInput}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={(text) => {}}
        />
        <TextInput
          style={styles.otpInput}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={(text) => {}}
        />
      </View>
      <View style={styles.otpButton}>
        <Button title="Verify" onPress={viewModalHandler} />
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  div: {
    backgroundColor: "rgba(24, 50, 91, 0.04)", // RGBA equivalent to #18325b0a
    borderRadius: 19,
    height: 145,
    position: "absolute",
    top: 154,
    width: 256,
    alignItems: "center",
    justifyContent: "center",
  },

  text1: {
    color: "#19325b",
    // fontFamily: "",
    fontSize: 18,
    fontWeight: "900",
    left: 29,
    letterSpacing: 0,
    lineHeight: 22, 
    position: "absolute",
    textAlign: "center",
    top: 34,
    width: 199,
  },

  text2: {
    color: "#617996",
    // fontFamily: "", 
    fontSize: 10,
    fontWeight: "400",
    left: 42,
    letterSpacing: 0,
    lineHeight: 12, 
    position: "absolute",
    top: 86,
    width: 194,
  },

  text3: {
    color: "#a6b8ce",
    // fontFamily: "", 
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 16,
    position: "absolute",
    top: 350,
  },

  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    position: "absolute",
    top: 384,
    width: "100%",
    marginTop: 10, 
    paddingStart: 54,
    paddingEnd: 54,
  },

  otpInput: {
    width: 31, 
    height: 40, 
    backgroundColor: "#ebeef4",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 16, 
    fontWeight: "bold",
  },

  otpButton: {
    backgroundColor: "#ffc405",
    borderRadius: 10,
    height: 51,
    position: "absolute",
    top: 458,
    width: 184,
    justifyContent: "center",
  },
});

export default OtpScreen;
