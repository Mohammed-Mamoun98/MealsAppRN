import React, { Component } from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView , Button , FlatList } from "react-native";
import { SulpherRegular } from "../components/Fonts/SulpherRegular";
import CategoryCard from "../components/CategorySample";


import Data from "../../data/CardArray";
import uuid from 'uuid'

import CustomHeaderBtn from '../components/CustomHeaderBtn'
import {Item , HeaderButtons, HeaderButton} from 'react-navigation-header-buttons'


const Categories =  props => {

  return (
      <ScrollView style={styles.main}>
        <View style={styles.wrapper}>
          {Data.map((item) => (
            <CategoryCard {...item} onTouchStart = {()=>{ props.navigation.navigate({
              routeName : 'Meal',
              params : {
                item
              }
            })}} key = {uuid.v4()} title = {item.title} style = {styles.Category} color = {item.color}/>
          ))}
        </View>
      </ScrollView>
  );
};


Categories.navigationOptions = ({ navigation }) => ({
  title: 'Categories',
  headerLeft :( <HeaderButtons HeaderButtonComponent = {CustomHeaderBtn}>
<Item 
  title = 'favourite'
  iconName = 'menu'
  onPress = {
    ()=>{
     navigation.toggleDrawer();

    }
  }
/>
  </HeaderButtons>)
});
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom : 50,
    backgroundColor: "#F4F4F4",

  },
  main: {
    backgroundColor: "#F4F4F4",
    
  },
  Category: {
    margin: 10
  },
  wrapper: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  }
});


export default Categories

          // {/* <FlatList renderItem = {CategoryCard} numColumns = {2} keyExtractor = {(item,index) => item.id} data =  {Data} /> */}
