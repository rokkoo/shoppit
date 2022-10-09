import { useListStore } from "..";

const useLists = () => {
  const state = useListStore();

  return { ...state };
};

export default useLists;
