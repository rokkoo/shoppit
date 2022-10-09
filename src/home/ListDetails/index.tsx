import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import AppText from "src/core/components/Text";
import { ListItem } from "src/core/stores/zustand/lists";
import AppLayout from "src/core/ui/Layout";
import useAppNavigation from "src/navigation/hooks/useAppNavigation";
import useAppRoute from "src/navigation/hooks/useAppRoute";
import {
  DetailsScreenRouteProp,
  RootStackParamList,
} from "src/navigation/types";

type ListsDetailsProps = {
  details: ListItem;
};

const ListDetails = () => {
  const { route } = useAppRoute<RootStackParamList, "LIST_DETAILS">();
  const params = route.params?.details;

  console.log({ params });

  return (
    <AppLayout>
      <View>
        <AppText>Details screen</AppText>
      </View>
    </AppLayout>
  );
};

export default ListDetails;
