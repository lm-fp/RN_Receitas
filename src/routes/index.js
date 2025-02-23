import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../pages/home";
import Favorites from "../pages/favorites";

import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, //top nao aparece
        tabBarHideOnKeyboard: true, //esconde quando teclado aparece
        tabBarShowLabel: false, //esconde txt do tabBar e deixa so o icon
        tabBarActiveTintColor: "#121212", //cor do icone ativo
        tabBarStyle: {
          backgroundColor: "#fff", //cor de fundo do tabBar
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="home" color="#000" size={size} />;
            }
            return <Ionicons name="home-outline" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="heart" color="#ff4141" size={size} />;
            }
            return <Ionicons name="heart-outline" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
