import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const CharacterImageGrid = ({ characterLinks }) => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const fetchCharacterData = async () => {
      try {
        const characterPromises = characterLinks.map(async (link) => {
          const response = await fetch(link);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        });

        const characterData = await Promise.all(characterPromises);
        const characterT = characterData.map((character) => character);
        setCharacters(characterT); // Store the fetched character data in state
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacterData();
  }, []);

  console.log("chatacters", characters);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {characters &&
        characters.map((character) => {
          return (
            <View style={styles.characterCardContainer}>
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
            </View>
          );
        })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
  row: {
    flexDirection: "row",
    width: "100%",
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 16,
    marginHorizontal: 8,
  },
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

export default CharacterImageGrid;
