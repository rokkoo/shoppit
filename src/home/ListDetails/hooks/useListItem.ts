import { useCallback } from "react";
import useLists from "src/core/stores/zustand/lists/hooks";
import { List, ListItem } from "src/core/stores/zustand/lists/types";

type UseListItemProps = {
  list: List;
};

const useListItem = ({ list }: UseListItemProps) => {
  const { updateLists } = useLists();

  const handleItemPress = useCallback(
    (item: ListItem) => {
      const listItems = list.elements.map((element) => {
        if (element.id === item.id) {
          return { ...element, ...item };
        }

        return element;
      });

      updateLists({ ...list, elements: listItems });
    },
    [list, updateLists]
  );

  return { handleItemPress };
};

export default useListItem;
