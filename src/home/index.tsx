import { Pressable, View } from "react-native";

import AppLayout from "src/app/ui/Layout";
import AppList from "src/app/components/List";
import AppText from "src/app/components/Text";
import AppTitle from "src/app/components/Title";
import useLists from "src/app/stores/zustand/lists/hooks";
import useAppNavigation from "src/navigation/hooks/useAppNavigation";

function Home() {
  const { lists } = useLists();
  const { navigation } = useAppNavigation();

  return (
    <AppLayout>
      <AppTitle>Listas</AppTitle>
      <AppList
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
      />
    </AppLayout>
  );
}

export default Home;
