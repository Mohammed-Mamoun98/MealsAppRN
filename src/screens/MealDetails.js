import React, { Component, useEffect, useCallback } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  Alert
} from "react-native";
import { useDispatch } from "react-redux";
import DetailsBody from "../components/DetailsBody";
import * as Animatable from "react-native-animatable";
import {
  Item,
  HeaderButtons,
  HeaderButton
} from "react-navigation-header-buttons";
import CustomHeaderBtn from "../components/CustomHeaderBtn";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { addFav } from "../redux/actions/addFav";

const mealDetails = props => {
  const item = props.navigation.getParam("item");
  const { title, imageUrl, complexity, duration, affordability, id } = item;
  console.log("id :", item.id);
  // console.log(item)
  const dis = useDispatch();

  const toggleFavouriteHandler = useCallback(() => {
    dis(addFav({ id }));
  }, [dis, id]);

  useEffect(() => {
    props.navigation.setParams({
      toggleFav: toggleFavouriteHandler
    });
  }, [toggleFavouriteHandler]);

  return (
    <ScrollView styles={{ width: "100%" }}>
      <Animatable.View
        style={{ flex: 1, alignItems: "center" }}
        duration={2000}
        easing="ease-out"
        animation="bounceInDown"
      >
        <Image
          source={{ uri: imageUrl }}
          style={{ width: "100%", height: 400 }}
        />
        <View style={styles.moreDetails}>
          <Text>{duration}</Text>
          <Text>{affordability}</Text>
          <Text>{complexity}</Text>
        </View>
        <DetailsBody {...item} />
      </Animatable.View>
    </ScrollView>
  );
};

// console.log(mealDetails.navigationOptions)

mealDetails.navigationOptions = ({ navigation }) => {
  const toggleFav = navigation.getParam("toggleFav");
  return {
    title: navigation.state.params.item.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderBtn}>
        <Item
          title="favourite"
          iconName="heart-outline"
          color="black"
          onPress={toggleFav}
        />
      </HeaderButtons>
    )
  };
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
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%"
  }
});

export default mealDetails;
