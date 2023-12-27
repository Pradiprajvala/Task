import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import ImageGrid from "./ImageGrid";
import CharacterImageGrid from "./CharacterImageGrid";

const Character = () => {
  const route = useRoute();
  const { character } = route.params;
  console.log("character", character.episode);

  return (
    <View style={styles.container}>
      <View style={styles.characterCardContainer}>
        <Image
          style={styles.characterCardImage}
          source={{ uri: character.image }}
        />
        <View style={styles.characterCardMiddleContainer}>
          <Text style={styles.characterCardTitle}>{character.name}</Text>
          <Text style={styles.characterCardTitle}>
            Status: {character.status}
          </Text>
        </View>
      </View>
      {/* <View style={{ flexDirection: "row", paddingVertical: 8 }}>
        <Text style={styles.boldText}>Name: </Text>
        <Text style={styles.boldText}>{character.name}</Text>
      </View> */}
      <Text
        style={{
          paddingBottom: 8,
          fontSize: 20,
          fontWeight: "bold",
          paddingHorizontal: 24,
        }}
      >
        Episodes
      </Text>
      <CharacterImageGrid characterLinks={character.episode} />
    </View>
  );
};

export default Character;

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
  characterCardContainer: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 0,
    borderRadius: 16,
    marginBottom: 16,
  },
  characterCardImage: {
    height: 100,
    width: 100,
    borderRadius: 16,
  },
  characterCardMiddleContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    marginHorizontal: 16,
  },
  characterCardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4b4b4b",
  },
});
