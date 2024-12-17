import { StyleSheet, Text, View, Image, TextInput, ScrollView } from "react-native";

export default function App() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={{ height: 400, backgroundColor: "blue" }}>
        <Text style={{ color: "white", fontSize: 45, fontWeight: "bold" }}>
          test
        </Text>
        <Text style={{ color: "white", fontSize: 30 }}>test</Text>
      </View>
      <View
        style={{
          height: 400,
          backgroundColor: "yellow",
          paddingVertical: 20,
          paddingHorizontal: 20,
        }}
      >
        <TextInput style={{backgroundColor: 'white'}} placeholder="input" />
        <View style={{height: 20}} />
        <TextInput style={{backgroundColor: 'white'}} placeholder="password" secureTextEntry={true} />
      </View>
      <View
        style={{
          height: 400,
          backgroundColor: "red",
          paddingVertical: 20,
          paddingHorizontal: 20,
        }}
      >
        <Image
          style={{ height: 40, width: 40 }}
          source={require("./assets/favicon.png")}
        />
        <Image
          style={{ height: 40, width: 40 }}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <Image
          style={{ height: 40, width: 40 }}
          source={{
            uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
