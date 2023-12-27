import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Characters";
import Details from "./Episodes";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarIcon from "./TabBarIcon";
import Episodes from "./Episodes";
import Characters from "./Characters";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import EpisodScreen from "./Episode";
import Episode from "./Episode";
import Character from "./Character";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const EpisodesStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Episodes" component={Episodes} />
      <Stack.Screen name="Episode" component={Episode} />
    </Stack.Navigator>
  );
};

const CharacterStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Characters" component={Characters} />
      <Stack.Screen name="Character" component={Character} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="CharacterStack"
          component={CharacterStack}
          options={{
            tabBarIcon: (props) => (
              <TouchableOpacity>
                <Entypo name="emoji-happy" size={24} color="black" />
              </TouchableOpacity>
            ),
          }}
        />
        <Tab.Screen
          name="EpisodesStack"
          component={EpisodesStack}
          options={{
            tabBarIcon: (props) => (
              <TouchableOpacity>
                <MaterialCommunityIcons name="movie" size={24} color="black" />
              </TouchableOpacity>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
