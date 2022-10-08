import { StyleProp, StyleSheet, Text as RNText, TextStyle } from "react-native";

type TextProps = {
  children: string;
  style?: StyleProp<TextStyle>;
};

const Text: React.FC<TextProps> = ({ children, style }) => {
  return <RNText style={[style, styles.title]}>{children}</RNText>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "HindRegular",
    fontSize: 16,
  },
});

export default Text;
