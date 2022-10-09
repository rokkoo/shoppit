import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { List } from "src/core/stores/zustand/lists/types";

export type RootStackParamList = {
  Home: undefined;
  LIST_DETAILS: { list: List };
};

export type RootNavigationProps = NativeStackNavigationProp<RootStackParamList>;

export type DetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  "LIST_DETAILS"
>;
