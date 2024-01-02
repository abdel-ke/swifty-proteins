
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
import Ionicons from 'react-native-vector-icons/Ionicons';

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    if (email && password) {
      // const user = await SignInWithEmail(email, password);
      const user = true;
      if (user) {
        navigation.navigate('Home');
      }
    }
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
        name={<Icon size={22} name="lock-closed-outline" />}
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
        }}>
        <MyBotton width={'80%'} name="Login" color="purple" func={signIn} />
        <TouchableOpacity
          style={{
            backgroundColor: 'purple',
            padding: 20,
            borderRadius: 10,
            marginVertical: 30,
            width: '19%',
          }}>
          <Icon size={22} color="white" name="finger-print-outline" />
        </TouchableOpacity>
      </View>
      <Icon size={22} color="white" name="finger-print-outline" />
      <Icon size={22} color="white" name="3iw" />
      <Ionicons name="heart-outline" size={30} color="red" />
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
      <Icon name="3iw" size={30} color="purple" />
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
