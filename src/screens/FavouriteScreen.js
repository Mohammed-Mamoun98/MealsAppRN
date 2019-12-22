import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
const Fav = props => {
  const favouriteMeals = useSelector(state => state.Meals.favouriteMeals);
  console.log(favouriteMeals);
  return (
    <MealList
      navigation={props.navigation}
      styles={styles}
      selectedMeals={favouriteMeals}
    />
  );
};

Fav.navigationOptions = {
  headerTitle: "Favourites",
  headerStyle: {
    textAlign: "center"
  }
};

const styles = StyleSheet.create({
  titleHeader: {
    backgroundColor: "#213A3D",
    backgroundColor: "#fff",
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  moreDetails: {
    backgroundColor: "#52695F",
    backgroundColor: "#fff",
    minHeight: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  }
});

export default Fav;
