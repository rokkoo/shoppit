import { StyleProp, StyleSheet, Text as RNText, TextStyle } from "react-native";

type TextProps = {
  children: string;
  style?: StyleProp<TextStyle>;
};

const AppText: React.FC<TextProps> = ({ children, style }) => {
  return <RNText style={[styles.title, style]}>{children}</RNText>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "HindRegular",
    fontSize: 16,
  },
});

export default AppText;
