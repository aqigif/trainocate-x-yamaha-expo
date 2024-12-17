import { Pressable, Text, View } from "react-native";

export default function Button({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      style={{ backgroundColor: "green" }}
      onPress={onPress}
    >
      {({ pressed }) => (
        <View
          style={pressed ? { paddingVertical: 20 } : { paddingVertical: 10 }}
        >
          <Text style={{ color: "black", textAlign: "center" }}>{title}</Text>
        </View>
      )}
    </Pressable>
  );
}
