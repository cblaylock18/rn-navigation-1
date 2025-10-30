import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import React, { useLayoutEffect } from "react";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

const MealDetailsScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonPressHandler() {
    console.log("Pressed");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
      headerRight: () => (
        <IconButton
          onPress={headerButtonPressHandler}
          icon="star"
          color="white"
        />
      ),
    });
  }, [mealId, navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.root}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List listItems={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List listItems={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};
export default MealDetailsScreen;

const styles = StyleSheet.create({
  root: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
