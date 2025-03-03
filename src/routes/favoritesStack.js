import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favorites from "../pages/favorites";
import Detail from "../pages/detail";

const Stack = createNativeStackNavigator();

export function FavoritesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{ headerShown: false, }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ title: "Detalhes da receita" }}
      />
    </Stack.Navigator>
  );
}
