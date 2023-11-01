import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { FontAwesome } from "react-native-vector-icons";

export default function AboutScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>This is the about screen!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <FontAwesome
          name="home"
          size={24}
          color="#000"
          style={styles.icon}
          onPress={() => navigation.navigate("Home")}
        />
        <FontAwesome
          name="user"
          size={23}
          color="#000"
          style={styles.icon}
          onPress={() => navigation.navigate("AboutScreen")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fad",
    padding: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    width: "115%",
  },
  icon: {
    flex: 1,
    width: "100",
    color: "#fff",
    textAlign: "center",
    padding: 15,
    backgroundColor: "#000",
  },
});
