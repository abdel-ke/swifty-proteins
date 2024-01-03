import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';

const Biometric = async () => {
  const rnBiometrics = new ReactNativeBiometrics();

  const {biometryType} = await rnBiometrics.isSensorAvailable();

  if (biometryType === BiometryTypes.Biometrics) {
    //do something face id specific
    console.log('Face ID is supported');
  }
  console.log('Biometric', biometryType);
};


export default Biometric;