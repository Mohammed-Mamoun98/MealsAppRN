import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";

const MealList = props => {
  const styles = props.styles;

  const MealSample = itemProps => {
    const {
      title,
      imageUrl,
      complexity,
      duration,
      affordability
    } = itemProps.item;

    return (
      <View
        style={{ margin: 10, justifyContent: "center" }}
        onTouchEnd={() => {
          console.log(itemProps.item);
          props.navigation.navigate({
            routeName: "MealDetails",
            params: { item: itemProps.item }
          });
        }}
      >
        <View style={styles.titleHeader}>
          <Text>{title}</Text>
        </View>
        <Image
          source={{ uri: imageUrl }}
          style={{ width: "100%", height: 400 }}
        />
        <View style={styles.moreDetails}>
          <Text>{duration}</Text>
          <Text>{affordability}</Text>
          <Text>{complexity}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <FlatList
        renderItem={MealSample}
        data={props.selectedMeals}
        keyExtractor={(item, index) => item.id}
        style={{ width: "100%" }}
      />
    </View>
  );
};

export default MealList;
