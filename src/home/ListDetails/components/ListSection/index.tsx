import React from "react";
import { View } from "react-native";
import AppList from "src/core/components/List";
import AppText from "src/core/components/Text";
import { List } from "src/core/stores/zustand/lists/types";
import useListItem from "../../hooks/useListItem";
import ListItemCell from "../ListItemCell/index.";

type ListSectionProps = {
  list: List;
};

const ListSection: React.FC<ListSectionProps> = ({ list }) => {
  const { handleItemPress } = useListItem({ list });
  console.log("rerender ", list);

  // TODO: fix rerender of items
  return (
    <View style={{ flex: 1 }}>
      <AppText>ListSection</AppText>
      <AppList
        renderItem={({ item }) => {
          return <ListItemCell item={item} onPress={handleItemPress} />;
        }}
        estimatedItemSize={50}
        data={list.elements}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default React.memo(ListSection);
