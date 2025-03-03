import { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import { FoodList } from "../../components/foodlist";
import { getFavorites } from "../../utils/storage";

export default function Favorites() {
  const [receipes, setReceipes] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    let isActive = true;

    async function getReceipes() {
      const result = await getFavorites("@appreceitas");
      if (isActive) {
        setReceipes(result);
      }
    }
    if (isActive) {
      getReceipes();
    }

    return () => {
      isActive = false;
    };
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Receitas Favoritas</Text>

      {receipes.length === 0 && (
        <Text style={{marginTop: 8}}>Voce ainda nao tem nenhuma receita salva.</Text>
      )}

      <FlatList
        data={receipes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FoodList data={item} />}
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 14}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "pink",
    backgroundColor: "#f3f9ff",
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 36,
  },
  title: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 24,
  },
});
