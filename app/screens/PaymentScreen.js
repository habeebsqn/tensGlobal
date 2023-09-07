import React from "react";
import { Text, View, StyleSheet } from "react-native";

function PaymentScreen(props) {
  return (
    <View style={styles.container}>
      <Text>PaymentScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PaymentScreen;
