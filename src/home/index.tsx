import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppList from "src/app/components/List";
import AppText from "src/app/components/Text";
import AppTitle from "src/app/components/Title";

type Item = { title: string; id: string };
type Data = Item[];
const data: Data = new Array(100).fill({ title: "test2", id: "12" });

function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <AppTitle>Listas</AppTitle>
      <AppList
        renderItem={({ item }) => {
          return (
            <View
              style={{
                backgroundColor: "green",
                justifyContent: "center",
                flex: 1,
                width: "100%",
                paddingVertical: 16,
              }}
            >
              <AppText>{item.title}</AppText>
            </View>
          );
        }}
        estimatedItemSize={50}
        data={data}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    height: "100%",
  },
});

export default Home;
