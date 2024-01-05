import {SafeAreaView, StyleSheet, Text} from 'react-native';

const HomeScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontWeight: 'bold', fontSize: 22}}>Proteins</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
});

export default HomeScreen;
