import { Pressable, View, Text, StyleSheet, Platform } from "react-native";
// import { useNavigation } from "@react-navigation/native";

const CategoryGridTile = ({ title, color, onPress }) => {
  // const navigation = useNavigation();

  return (
    <View style={styles.gridItem}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#ccc", foreground: true }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.pressed : null,
        ]}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};
export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 5,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  pressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
