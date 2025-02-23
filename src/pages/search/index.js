import { View, Text, StyleSheet } from "react-native";

export default function Search() {
  return (
    <View style={styles.container}>
      <Text>Pagina buscar aqui!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
});
