import React, { Component } from "react";
import { Text, View, Button, StyleSheet, FlatList, Image } from "react-native";
import Meals from "../../data/Meals";
import MealSample from "../components/MealSample";
import CustomHeaderBtn from "../components/CustomHeaderBtn";
import {
  Item,
  HeaderButtons,
  HeaderButton
} from "react-navigation-header-buttons";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";

const CategoryMeals = props => {
  const item = props.navigation.state.params.item;
  const { title, id } = item;

  const availableMeals = useSelector(state => state.Meals.filteredMeals);

  const selectedMeals = availableMeals.filter(Meal => {
    return Meal.categoryIds.indexOf(id) >= 0;
  });

  return (
    <MealList
      navigation={props.navigation}
      selectedMeals={selectedMeals}
      styles={styles}
    />
  );
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

export default CategoryMeals;

// console.log(props.navigation.getParam('item'))

//   const MealRender = ({item}) => {

//     const {title,imageUrl,complexity, duration , affordability} = item

//     console.log(title, imageUrl , complexity , duration , affordability)
//     return (
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//         <Text>{title}</Text>
//       </View>
//     );
//   };

// const MealSample = ({ item }) => {
//     const { title, imageUrl, complexity, duration, affordability } = item;

//     return (
//       <View style={{ margin: 10 , justifyContent : 'center' }} onTouchEnd = {() => {props.navigation.navigate({routeName : 'MealDetails' , params : {item}})}}>
//         <View style={styles.titleHeader}>
//         <Text>{title}</Text>
//         </View>
//         <Image source={{ uri: imageUrl }} style={{width: '100%', height: 400 }}  />
//         <View style={styles.moreDetails}>
//           <Text>{duration}</Text>
//           <Text>{affordability}</Text>
//           <Text>{complexity}</Text>
//         </View>
//       </View>
//     );
//   };

// CategoryMeals.navigationOptions = ({ navigation }) => ({
//   title: 'Categories',
//   headerLeft :( <HeaderButtons HeaderButtonComponent = {CustomHeaderBtn}>
// <Item
//   title = 'favourite'
//   iconName = 'star'
//   onPress = {
//     ()=>{
//       console.log(navigation)

//      navigation.toggleDrawer();

//     }
//   }
// />
//   </HeaderButtons>)
// });

// <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//   <FlatList
//     renderItem={MealSample}
//     data={selectedMeals}
//     keyExtractor={(item, index) => item.id}
//     style={{ width: "100%" }}
//   />
// </View>
