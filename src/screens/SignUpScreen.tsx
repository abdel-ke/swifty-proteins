import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SignUpSVG from '../assets/SVG/SignUpSVG';
import {useState} from 'react';
import InputField from '../components/InputField';
import {Icon} from '@rneui/base';
import MyBotton from '../components/MyBotton';
import {showToaster} from '../functions/Toast';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {newUser} from '../auth/FireBaseAuth';

const SignUpScreen = ({navigation}: any) => {
  // const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [loading, setLoading] = useState(false);

  const SignUp = async () => {
    if (email && password && confirmPass) {
      if (password !== confirmPass) {
        showToaster('Password and Confirm Password are not the same!', 'SHORT');
        return ;
      }
      setLoading(true);
      console.log('start 1.5');
      const user: FirebaseAuthTypes.UserCredential | null = await newUser({
        email,
        password,
      });
      console.log(`user: ${user}`);
      if (user) {
        setEmail('');
        setPassword('');
        navigation.navigate('Home');
      }
    } else {
      console.log(`email and pass: ${email} ${password}`)
      showToaster('Please enter email and password!', 'SHORT');
    };
    setLoading(false);
    console.log('second');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <SignUpSVG width={300} height={300} />
      </View>
      <Text style={{fontSize: 30, fontWeight: 'bold', marginTop: 20}}>
        Register
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
        onChange={setPassword}
        secure={true}
      />
      <InputField
        name={<Icon name="lock" />}
        placeHolder="Password"
        onChange={setConfirmPass}
        secure={true}
      />
      <MyBotton
        name="Sign Up"
        color="purple"
        func={SignUp}
        loading={loading}
        containerStyle={{
          backgroundColor: 'purple',
          padding: 8,
          borderRadius: 10,
          marginVertical: 30,
        }}
      />
      <View style={{flexDirection: 'row', gap: 5, justifyContent: 'center'}}>
        <Text>Already have an account?</Text>
        <Text
          style={{color: 'purple', fontWeight: 'bold'}}
          onPress={() => navigation.navigate('SignIn')}>
          Login
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignUpScreen;
