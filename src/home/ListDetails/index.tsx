import { useMemo } from "react";
import AppText from "src/core/components/Text";
import useLists from "src/core/stores/zustand/lists/hooks";
import AppLayout from "src/core/ui/Layout";
import useAppRoute from "src/navigation/hooks/useAppRoute";
import { RootStackParamList } from "src/navigation/types";
import ListSection from "./components/ListSection";

const ListDetails = () => {
  const { route } = useAppRoute<RootStackParamList, "LIST_DETAILS">();
  const { list } = route.params;
  const { lists } = useLists();

  const listData = useMemo(() => {
    return lists.find((item) => item.id === list.id);
  }, [lists]);
  // console.log({ list });

  if (!listData) return null;

  return (
    <AppLayout>
      <AppText>Details screen</AppText>
      <ListSection list={listData} />
    </AppLayout>
  );
};

export default ListDetails;
