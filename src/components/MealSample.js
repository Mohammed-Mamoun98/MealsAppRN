import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const MealSample = ({ item }) => {
  const { title, imageUrl, complexity, duration, affordability } = item;

  return (
    <View style={{ margin: 10 , justifyContent : 'center' }}>
      <View style={styles.titleHeader}>
      <Text>{title}</Text></View>
      <Image source={{ uri: imageUrl }} style={{ width: 380, height: 400 }} />
      <View style={styles.moreDetails}>
        <Text>{duration}</Text>
        <Text>{affordability}</Text>
        <Text>{complexity}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleHeader: {
    backgroundColor: "#213A3D",
    height: 50,
    justifyContent : 'center',
    alignItems : 'center'
  },
  moreDetails: {
    backgroundColor: "#52695F",
    minHeight: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems : 'center'
  }
});

export default MealSample;
