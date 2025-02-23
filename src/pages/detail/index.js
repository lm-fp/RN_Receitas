import { View, Text, StyleSheet } from "react-native";

export default function Detail() {
  return (
    <View style={styles.container}>
      <Text>Pagina detalhe aqui!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
