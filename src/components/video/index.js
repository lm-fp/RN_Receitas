import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";

import { Feather } from "@expo/vector-icons";

import { WebView } from "react-native-webview";

export function VideoView({ handleClose, videoUrl }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleClose}>
        <Feather name="arrow-left" size={24} color="#fff" />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

      <WebView style={styles.contantView} source={{ uri: videoUrl }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  backButton: {
    width: "100%",
    backgroundColor: "#4cbe6c",
    flexDirection: "row",
    height: 48,
    alignItems: "center",
    paddingStart: 14,
  },
  backText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 500,
    marginLeft: 14,
  },
  contantView: {
    flex: 1,
    width: "100%",
  },
});
