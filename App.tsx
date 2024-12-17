import { ScrollView, StyleSheet } from "react-native";
import BasicComponent from "./src/components/BasicComponent";
import Touches from "./src/components/Touches";
import AnimatedExample from "./src/components/AnimatedExample";

export default function App() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Touches text="coba coba" />
      <BasicComponent />
      <AnimatedExample />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
