import create from "zustand";
import uuid from "react-native-uuid";

import { List } from "./types";

type State = {
  lists: List[];
};

type Action = {
  updateLists: (lists: List) => void;
};

const generateRandomItems = () => {
  return new Array(10)
    .fill({ title: "test", checked: false })
    .map((e) => ({ ...e, id: uuid.v4() }));
};

// Create your store, which includes both state and (optionally) actions
export const useListStore = create<State & Action>((set) => ({
  lists: [
    {
      id: uuid.v4().toString(),
      title: "List name",
      elements: generateRandomItems(),
    },
  ],
  updateLists: (list) =>
    set((prev) => {
      console.log("update");

      const lists = prev.lists.map((item) => {
        if (item.id === list.id) {
          return {
            ...item,
            ...list,
          };
        }

        return item;
      });

      return { ...prev, lists };
    }),
}));
