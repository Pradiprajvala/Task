import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Pressable,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { CharacterCard } from "./components/CharacterCard";

export default function Characters({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ paddingVertical: 10, fontSize: 24, fontWeight: "700" }}>
        Characters
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollviewContainer}
      >
        <CharacterCard navigation={navigation} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  button: {
    alignItems: "center",
    margin: 10,
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  scrollviewContainer: {
    width: "100%",
    paddingHorizontal: 16,
    flex: 1,
  },
});
