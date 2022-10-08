import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ListItem } from "src/app/stores/zustand/lists";

export type RootStackParamList = {
  Home: undefined;
  LIST_DETAILS: { details: ListItem };
};

export type RootNavigationProps = NativeStackNavigationProp<RootStackParamList>;

export type DetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  "LIST_DETAILS"
>;
