import { Pressable, View } from "react-native";

import AppLayout from "src/core/ui/Layout";
import AppList from "src/core/components/List";
import AppText from "src/core/components/Text";
import AppTitle from "src/core/components/Title";
import useLists from "src/core/stores/zustand/lists/hooks";
import useAppNavigation from "src/navigation/hooks/useAppNavigation";

function Home() {
  const { lists } = useLists();
  const { navigation } = useAppNavigation();

  return (
    <AppLayout>
      <Pressable
        onPress={() => {
          navigation.navigate("LIST_DETAILS");
        }}
      >
        <AppTitle>Listas</AppTitle>
      </Pressable>
      {/* <AppList
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() => {
                navigation.navigate("LIST_DETAILS", { details: item });
              }}
            >
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
            </Pressable>
          );
        }}
        estimatedItemSize={50}
        data={lists}
        showsVerticalScrollIndicator={false}
      /> */}
    </AppLayout>
  );
}

export default Home;
