import { Image, Pressable, Text, View } from "react-native";

interface PokeCardProps {
  title: string;
  image: string;
  num: string;
  onPress: () => void;
}

export const PokeCard = ({ title, image, num, onPress }: PokeCardProps) => {
  return (
    <View style={styles.gridItem}>
      <Text style={{ textAlign: "right" }}>{num}</Text>
      <Pressable onPress={onPress}>
        <Image source={{ uri: image }} style={styles.imageList} />
      </Pressable>

      <Text style={{ fontWeight: 500, textAlign: "center" }}>{title}</Text>
    </View>
  );
};

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  gridItem: {
    width: "30%",
    marginBottom: 10,
    backgroundColor: "#eee",
    padding: 15,
    borderRadius: 15,
  },
  imageList: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    resizeMode: "contain",
  },
});

export default styles;
