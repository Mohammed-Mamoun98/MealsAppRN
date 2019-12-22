import React, { useState, useCallback, useEffect } from "react";
import { View, Text, Platform } from "react-native";
import FilterScreen from "./FilterScreen";
import { useDispatch, useSelector } from "react-redux";
import CustomHeaderBtn from "../components/CustomHeaderBtn";
import {
  Item,
  HeaderButtons,
  HeaderButton
} from "react-navigation-header-buttons";
import ICON from "../components/ICON";
import { Switch } from "react-native-gesture-handler";
import { setFilter } from "../redux/actions/setFilter";

const SwitchForm = SwitchProps => (
  <View
    style={{
      width: "100%",
      margin: 20,
      flexDirection: "row",
      justifyContent: "center"
    }}
  >
    <Text>{SwitchProps.label}</Text>
    <Switch
      value={SwitchProps.state}
      onValueChange={SwitchProps.onChange}
      thumbColor={Platform.OS === "android" ? "white" : ""}
    />
  </View>
);

const Filters = props => {
  const dis = useDispatch();
  const [isGluteFree, setGluteFree] = useState(false);
  const [isLactoseFree, setLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegiterian, setIsVegetrian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      isVegetarian: isVegetarian
    };
    dis(setFilter(appliedFilters));
  }, [isGluteFree, isVegiterian, isVegan, isLactoseFree]);

  useEffect(() => {
    props.navigation.setParams({
      save: saveFilters
    });
  }, [saveFilters]);

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text>Filters Screen</Text>

      <SwitchForm
        state={isGluteFree}
        label="Gluten-Free"
        onChange={newValue => setGluteFree(newValue)}
      />
      <SwitchForm
        state={isLactoseFree}
        label="Lactose-Free"
        onChange={newValue => setLactoseFree(newValue)}
      />
      <SwitchForm
        state={isVegan}
        label="Vegan"
        onChange={newValue => setIsVegan(newValue)}
      />
      <SwitchForm
        state={isVegiterian}
        label="Vegiterian"
        onChange={newValue => setIsVegetrian(newValue)}
      />
    </View>
  );
};

Filters.navigationOptions = ({ navigation }) => ({
  headerTitle: "Filters",
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={CustomHeaderBtn}>
      <Item
        title="favourite"
        iconName="menu"
        onPress={() => {
          navigation.toggleDrawer();
        }}
      />
    </HeaderButtons>
  ),
  headerRight: (
    <HeaderButtons HeaderButtonComponent={CustomHeaderBtn}>
      <Item
        title="favourite"
        iconName="content-save"
        onPress={() => {
          console.log("saved");
          navigation.getParam("save");
        }}
      />
    </HeaderButtons>
  )
});

export default Filters;
