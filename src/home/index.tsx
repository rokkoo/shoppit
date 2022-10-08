import { StyleSheet, View } from "react-native";
import Text from "src/app/components/Text";
import Title from "src/app/components/Title";

function Home() {
  return (
    <View style={styles.container}>
      <Title>title</Title>
      <Text>Hind Regular</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
