import React from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";

function PrefrenceScreen(props) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>PrefrenceScreen</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
  },
});

export default PrefrenceScreen;
