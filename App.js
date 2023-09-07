import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ProfileIcon from "./app/components/ProfileIcon";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faThumbsUp,
  faBars,
  faGear,
  faCreditCard,
  faCircleQuestion,
  faScroll,
  faReply,
  faLocationCrosshairs,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";

import { Provider } from "react-redux";
import store from "./store";

import PrefrenceScreen from "./app/screens/PrefrenceScreen";
import PaymentScreen from "./app/screens/PaymentScreen";
import DrawerContent from "./app/components/DrawerContent";
import HomeScreen from "./app/screens/HomeScreen";
import OtpScreen from "./app/screens/OtpScreen";
import RootLayout from "./app/layout/RootLayout";

library.add(
  faThumbsUp,
  faBars,
  faGear,
  faCreditCard,
  faCircleQuestion,
  faScroll,
  faReply,
  faLocationCrosshairs,
  faLocationArrow
);

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="OtpScreen"
          screenOptions={{
            headerStyle: styles.headerStyle,
            headerTitle: "",
            headerRight: () => <ProfileIcon iw={26} il={26} cw={32} cl={32} />,
          }}
          drawerContent={(props) => <DrawerContent {...props} />}
        >
          <Drawer.Screen name="OtpScreen" component={RootLayout} />
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Support" component={PrefrenceScreen} />
          <Drawer.Screen name="Payment" component={PaymentScreen} />
          <Drawer.Screen name="Pack History" component={PaymentScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
      {/* <RootLayout/> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    alignItems: "center",
  },
  topBar: {
    flexDirection: "row",
    position: "absolute",
    top: 40,
  },
  headerStyle: {
    borderBottomWidth: 0,
  },
});
