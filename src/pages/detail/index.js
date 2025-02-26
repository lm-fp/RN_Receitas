import { useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

export default function Detail() {
  const route = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.data ? route.params?.data.name : "Detalhes da receita",
      headerRight: () => (
        <Pressable onPress={() => console.log("Favoritar")}>
          <Ionicons name="heart"
            size={28}
            color="#ff4141"
          />
        </Pressable>
      )
    });
  }, [navigation, route.params?.data]);

  return (
    <View style={styles.container}>
      <Text>{route.params?.data.name}</Text>
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
