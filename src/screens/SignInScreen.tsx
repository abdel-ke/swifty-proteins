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
import {useEffect, useState} from 'react';
import MyBotton from '../components/MyBotton';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {checkUser} from '../auth/FireBaseAuth';
import {showToaster} from '../functions/Toast';
import {Icon} from '@rneui/themed';
import {isSupported, pressHandler} from '../functions/TouchId';

const SignInScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);

  useEffect(() => {
    const checkBiometricSupport = async () => {
      const biometryType = await isSupported();
      setIsBiometricSupported(biometryType);
    };

    checkBiometricSupport();
  }, []);

  const signIn = async () => {
    console.log('start');
    if (email && password) {
      setLoading(true);
      console.log('start 1.5');
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
        showToaster('User not found!', 'SHORT');
      }
    } else {
      console.log(`email and pass: ${email} ${password}`);
      showToaster('Please enter email and password!', 'SHORT');
    }
    setLoading(false);
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
        name={<Icon name="email" />}
        placeHolder="Email-ID"
        onChange={setEmail}
        keyboardType="email-address"
      />
      <InputField
        name={<Icon name="lock" />}
        placeHolder="Password"
        // actionText="Forgot?"
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
        <MyBotton
          name="Login"
          color="purple"
          func={signIn}
          loading={loading}
          containerStyle={{
            backgroundColor: 'purple',
            padding: 8,
            borderRadius: 10,
            marginVertical: 30,
            flex: 4,
          }}
        />
        {isBiometricSupported && (
          <TouchableOpacity
            onPress={async () => {
              const handler = await pressHandler();
              if (handler == true) {
                navigation.navigate('Home');
              } else {
                showToaster('Authentication failed!', 'SHORT');
              }
            }}
            style={{
              backgroundColor: 'purple',
              borderRadius: 10,
              marginVertical: 30,
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon size={32} color="white" name="fingerprint" />
          </TouchableOpacity>
        )}
      </View>
      <View style={{flexDirection: 'row', gap: 5, justifyContent: 'center'}}>
        <Text>New to the app?</Text>
        <Text
          style={{color: 'purple', fontWeight: 'bold'}}
          onPress={() => navigation.navigate('SignUp')}>
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

export default SignInScreen;
