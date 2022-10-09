import create from "zustand";

export type ListItem = { title: string; id: string };

type State = {
  lists: ListItem[];
};

type Action = {
  updateLists: (lists: State["lists"]) => void;
};

// Create your store, which includes both state and (optionally) actions
export const useListStore = create<State & Action>((set) => ({
  lists: new Array(100).fill({ title: "test", id: "12" }),
  updateLists: (lists) => set(() => ({ lists })),
}));
