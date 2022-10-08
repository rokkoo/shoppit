import { FlashList, FlashListProps } from "@shopify/flash-list";
import React from "react";

interface AppListProps<T> extends FlashListProps<T> {}

const AppList: React.FC<AppListProps<any>> = (props) => {
  return <FlashList {...props} />;
};

export default AppList;
