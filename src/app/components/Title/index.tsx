import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

type TitleProps = {
  children: string;
  style?: StyleProp<TextStyle>;
};

const AppTitle: React.FC<TitleProps> = ({ children, style }) => {
  return <Text style={[style, styles.title]}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "TankerRegular",
    fontSize: 32,
  },
});

export default AppTitle;
