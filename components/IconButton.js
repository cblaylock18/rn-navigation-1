import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ icon, onPress, color }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <Ionicons name={icon} size={24} color={color} />
      </Pressable>
    </View>
  );
};
export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    margin: 4,
    paddingLeft: 2,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: {
    opacity: 0.5,
  },
});
