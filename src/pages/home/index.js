import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Pagina home aqui!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
