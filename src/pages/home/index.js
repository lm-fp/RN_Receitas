import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Logo } from "../../components/logo";

import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <Text style={styles.title}>Encontre sua receita</Text>
      <Text style={styles.title}>que combina com voce</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Digite o nome da comida..."
          style={styles.input}
        />
        <TouchableOpacity>
          <Ionicons name="search" size={28} color="#4cbe6c" />
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f9ff",
    paddingTop: 36,
    paddingStart: 14,
    paddingEnd: 14,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0e0e0e",
  },
  form: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ececec",
    paddingLeft: 8,
    paddingRight: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input:{
     width: "90%",
     maxWidth: "90%",
     height: 54,
  }
});
