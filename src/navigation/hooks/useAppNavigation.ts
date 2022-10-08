import { useNavigation } from "@react-navigation/native";
import { RootNavigationProps } from "../types";

const useAppNavigation = () => {
  const navigation = useNavigation<RootNavigationProps>();

  return {
    navigation,
  };
};

export default useAppNavigation;
