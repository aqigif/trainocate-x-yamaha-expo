import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import AnimatedExample from "./src/components/AnimatedExample";
import BasicComponent from "./src/components/BasicComponent";
import Button from "./src/components/Button";
import Touches from "./src/components/Touches";
import ModalExample from "./src/components/ModalExample";

const App = () => {
  const [render, setIsRender] = useState(false);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Button onPress={() => setIsRender(!render)} title="render" />
      {render ? (
        <>
          <Touches text="coba coba" />
          <BasicComponent />
          <AnimatedExample />
        </>
      ) : (
          <ModalExample />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
