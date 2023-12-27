import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import ImageGrid from "./ImageGrid";

const Episode = () => {
  const route = useRoute();
  const { episode } = route.params;

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", paddingVertical: 8 }}>
        <Text style={styles.boldText}>Name: </Text>
        <Text style={styles.boldText}>{episode.name}</Text>
      </View>
      <View style={{ flexDirection: "row", paddingVertical: 8 }}>
        <Text style={styles.boldText}>Air Date: </Text>
        <Text style={styles.boldText}>{episode.air_date}</Text>
      </View>
      <View style={{ flexDirection: "row", paddingVertical: 8 }}>
        <Text style={styles.boldText}>Episode No: </Text>
        <Text style={styles.boldText}>{episode.episode}</Text>
      </View>
      <Text
        style={{
          paddingVertical: 8,
          fontSize: 20,
          fontWeight: "bold",
          paddingHorizontal: 24,
        }}
      >
        Characters
      </Text>
      <ImageGrid characterLinks={episode.characters} />
    </View>
  );
};

export default Episode;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 10,
    flex: 1,
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 26,
  },
});
