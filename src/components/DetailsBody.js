import React from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { item } from "../screens/MealDetails";


const DetailsBody = props => {
  const { ingredients, steps } = props;
 
  return (
    <View style={{ flex: 1, alignItems: "center", width: "100%" }}>
      <Text style={{ marginTop: 30, borderWidth: 1, padding: 10 }}>
        Ingredients
      </Text>
      <View style={{ marginTop: 20, alignItems: "center", width: "100%" }}>
        {ingredients.map(item => (
          <View style={{ margin: 10, justifyContent: "center" }}>
            <Text>{item}</Text>
          </View>
        ))}
      </View>

      <Text style={{ marginTop: 30, borderWidth: 1, padding: 10 }}>Steps</Text>
      <View style={{ marginTop: 20, alignItems: "center", width: "100%" }}>
        {steps.map(item => (
          <View style={{ margin: 10, justifyContent: "center" }}>
            <Text>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default DetailsBody;
