import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";

const ImageGrid = ({ characterLinks }) => {
  const [images, setImages] = useState([]);
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
        const imagesT = characterData.map((character) => character.image);
        setImages(imagesT); // Store the fetched character data in state
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacterData();
  }, []);

  const pairs = [];
  for (let i = 0; i < images.length; i += 2) {
    pairs.push(images.slice(i, i + 2));
  }
  console.log(images);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {pairs.map((pair, index) => (
        <View key={index} style={styles.row}>
          {pair.map((image, idx) => (
            <Image
              source={{ uri: image }} // Image source from the images array
              style={styles.image}
            />
          ))}
        </View>
      ))}
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
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    marginBottom: 16,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 16,
    marginHorizontal: 8,
  },
});

export default ImageGrid;
