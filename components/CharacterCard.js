import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

export const CharacterCard = ({ navigation }) => {
  const [characters, setCharacters] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      //   console.log("Data from API:", data);
      setCharacters(data.results);
    } catch (error) {
      // Handle errors
      console.error("There was a problem with the fetch operation:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log("characters");
  console.log(characters);
  return (
    <>
      {characters &&
        characters.map((character) => {
          return (
            <TouchableOpacity
              style={styles.characterCardContainer}
              onPress={() =>
                navigation.navigate("Character", { character: character })
              }
            >
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
            </TouchableOpacity>
          );
        })}
    </>
  );
};

const styles = StyleSheet.create({
  characterCardContainer: {
    flexDirection: "row",
    width: "100%",
    padding: 16,
    borderRadius: 16,
    marginBottom: 8,
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
    color: "#4b4b4b",
  },
});
