import { View, Text, StyleSheet } from "react-native";

export default function Favorites() {
  return (
    <View style={styles.container}>
      <Text>Pagina de favoritos aqui!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  }
});
