import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Categories from "./src/screens/Categories";
import Constants from "expo-constants";
import MealsNavigation from "./src/Navigation/MealsNavigation";
import { useScreens } from "react-native-screens";
import { Provider } from "react-redux";
import { store } from "./src/redux/Store";

useScreens();
export default function App() {
  console.disableYellowBox = true;
  const [isRenderd, setRendered] = useState(false);

  useEffect(() => {
    console.log("object");
  }, [MealsNavigation]);

  store.subscribe(() => {
    console.log(store.getState());
  });

  console.log(store.getState());

  return (
    <Provider store={store}>
      <MealsNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Constants.statusBarHeight
  }
});
