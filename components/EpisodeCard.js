import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

export const EpisodeCard = ({ navigation }) => {
  const [characters, setCharacters] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/episode");
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
            <Pressable
              style={styles.characterCardContainer}
              onPress={() =>
                navigation.navigate("Episode", { episode: character })
              }
            >
              <View>
                <Text style={styles.characterCardHotelTitle}>Episode</Text>
                <Text style={styles.characterCardHotelTitle}>
                  {character.episode}
                </Text>
              </View>
              <View style={styles.characterCardMiddleContainer}>
                <Text style={styles.characterCardHotelTitle}>
                  {character.name}
                </Text>
                <Text style={styles.characterCardHotelTitle}>
                  {character.air_date}
                </Text>
              </View>
            </Pressable>
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
    marginBottom: 16,
    backgroundColor: "lightblue",
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
  characterCardHotelTitle: {
    fontSize: 20,
    color: "#4b4b4b",
  },
});
