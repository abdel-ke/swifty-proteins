import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';

const HomeScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Hello from Home page!!</Text>
        <Button
          title="Logout"
          onPress={async () => {
            if (auth().currentUser) await auth().signOut();
            navigation.navigate('SignIn');
          }}
        />
        <Button
          title="Logout"
          onPress={async () => {
            const user = auth().currentUser;
            console.log(user);
          }}
        />
      </View>
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
