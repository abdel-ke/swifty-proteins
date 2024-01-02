import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LoginSVG from '../assets/SVG/LoginSVG';
import InputField from '../components/InputField';
import {useState} from 'react';
import MyBotton from '../components/MyBotton';
import Icon from '../components/Icons';
import auth,  {FirebaseAuthTypes} from '@react-native-firebase/auth';
import checkUser from '../auth/FireBaseAuth';
import { showToaster } from '../functions/Toast';

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    const currentUser = auth().currentUser;
    console.log(`userInfo: ${currentUser?.email}`);
    if (currentUser) {
        console.log('User exist');
        // auth().signOut();
      return;
    }
    if (email && password) {
      console.log('start');
      const user: FirebaseAuthTypes.UserCredential | null = await checkUser({
        email,
        password,
      });
      console.log(`user: ${user}`);
      if (user) {
        setEmail('');
        setPassword('');
        navigation.navigate('Home');
      } else {
        showToaster('User not found!');
      }
    } else console.log(`email and pass: ${email} ${password}`);
    console.log('second');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <LoginSVG width={300} height={300} />
      </View>
      <Text style={{fontSize: 30, fontWeight: 'bold', marginTop: 20}}>
        Login
      </Text>
      <InputField
        name={<Icon size={22} name="at-sharp" />}
        placeHolder="Email-ID"
        onChange={setEmail}
        keyboardType="email-address"
      />
      <InputField
        name={<Icon size={22} name="lock" />}
        placeHolder="Password"
        actionText="Forgot?"
        onChange={setPassword}
        secure={true}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
          gap: 10,
        }}>
        <MyBotton width={'80%'} name="Login" color="purple" func={signIn} />
        <TouchableOpacity
          onPress={() => console.log('Fingerprint button')}
          style={{
            backgroundColor: 'purple',
            borderRadius: 10,
            marginVertical: 30,
            // width: 70,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon size={42} color="white" name="fingerprint" />
        </TouchableOpacity>
      </View>
      <View
        style={[
          {
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          },
        ]}>
        <Text style={{textAlign: 'center'}}>New to the app?</Text>
        <Text
          style={[
            {
              textAlign: 'center',
              color: 'purple',
              marginLeft: 5,
              fontWeight: 'bold',
            },
          ]}
          onPress={() => console.log('Hello from Register')}>
          Register
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
  },
  stretch: {
    height: 200,
    width: Dimensions.get('window').width,
    resizeMode: 'cover',
    backgroundColor: 'red',
  },
  input: {
    margin: 12,
    padding: 10,
    height: 40,
    borderBottomWidth: 1,
  },
  button: {
    backgroundColor: 'purple',
  },
});

export default LoginScreen;
