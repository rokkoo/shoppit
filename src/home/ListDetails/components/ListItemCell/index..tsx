import React from "react";
import { Pressable, View } from "react-native";
import AppText from "src/core/components/Text";
import { ListItem } from "src/core/stores/zustand/lists/types";

type ListItemProps = {
  item: ListItem;
  onPress: (item: ListItem) => void;
};

const ListItemCell: React.FC<ListItemProps> = ({ item, onPress }) => {
  console.log("rerender ", item.id);

  return (
    <Pressable
      onPress={() =>
        onPress({
          ...item,
          checked: item.checked ? false : true,
        })
      }
    >
      <View
        style={{
          // backgroundColor: "green",
          justifyContent: "center",
          flex: 1,
          width: "100%",
          paddingVertical: 6,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              borderRadius: 16,
              borderWidth: 2,
              borderColor: "gray",
              width: 22,
              height: 22,
              backgroundColor: item.checked ? "black" : "white",
              marginRight: 4,
            }}
          />
          <AppText style={{ fontSize: 20 }}>{item.title}</AppText>
        </View>
      </View>
    </Pressable>
  );
};

export default React.memo(ListItemCell);
