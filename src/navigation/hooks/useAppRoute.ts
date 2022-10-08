import { useRoute, RouteProp, ParamListBase } from "@react-navigation/native";

function useAppRoute<T extends ParamListBase, S extends keyof T>() {
  const route = useRoute<RouteProp<T, S>>();

  return { route };
}

export default useAppRoute;
