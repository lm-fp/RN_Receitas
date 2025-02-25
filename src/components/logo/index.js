import { View, Text, StyleSheet } from "react-native";

export function Logo() {
  return (
    <View style={styles.logoArea}>
      <Text style={styles.textArea}>Receita Facil</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    logoArea:{
        backgroundColor: "#4cbe6c",
        alignSelf: "flex-start",
        padding: 8,
        paddingLeft: 16,
        paddingRight: 20,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 32,
        marginBottom: 8,
        marginTop: 8,
    },
    textArea:{
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
    }
});