import { View } from "react-native";
import AppList from "src/app/components/List";
import AppText from "src/app/components/Text";
import AppTitle from "src/app/components/Title";
import useLists from "src/app/stores/zustand/lists/hooks";
import AppLayout from "src/app/ui/Layout";

function Home() {
  const { lists } = useLists();

  return (
    <AppLayout>
      <AppTitle>Listas</AppTitle>
      <AppList
        renderItem={({ item }) => {
          return (
            <View
              style={{
                // backgroundColor: "green",
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
        data={lists}
      />
    </AppLayout>
  );
}

export default Home;
