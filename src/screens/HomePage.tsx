import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import SignInScreen from './SignInScreen';

const HomeScreen = ({navigation}: any) => {
//   const [user, setUser] = useState<FirebaseAuthTypes.User | null>();
// //   const [user, setUser] = useState<FirebaseAuthTypes.User | null>();

//   const setUserInfo = async () => {
//     const user = auth().currentUser;
//     setUser(user);
//   }
//   useEffect(() => {
//     setUserInfo();
//   }, [user]);

  if (!auth().currentUser) {
    console.log('user: Login: ');
    return <SignInScreen />;
  }
  else {
    console.log('user: Home: ');
    return (
        <SafeAreaView style={styles.container}>
          <View>
            <Text>Hello from Home page!!</Text>
            <Button
              title="Logout"
              onPress={async () => {
                await auth().signOut();
                navigation.navigate('SignIn');
              }}
            />
            <Button
              title="Logout"
              onPress={async () => {
                // get userInfo
                const user = auth().currentUser;
                console.log(user);
              }}
            />
          </View>
        </SafeAreaView>
      );
  }
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
});
