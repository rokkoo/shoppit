import { StyleSheet, View } from "react-native";
import AppText from "src/app/components/Text";
import AppTitle from "src/app/components/Title";

function Home() {
  return (
    <View style={styles.container}>
      <AppTitle>title</AppTitle>
      <AppText>Hind Regular</AppText>
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
