import { StyleSheet, Text, View } from 'react-native';

function Home() {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'TankerRegular', fontSize: 30 }}>
        Tanker Regular
      </Text>
      <Text style={{ fontFamily: 'HindRegular', fontSize: 30 }}>
        Hind Regular
      </Text>
      <Text style={{ fontSize: 30 }}>Platform Default</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
