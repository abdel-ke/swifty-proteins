// import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
// const rnBiometrics = new ReactNativeBiometrics();

// const Biometric = async () => {
//   const {biometryType} = await rnBiometrics.isSensorAvailable();

//   if (biometryType === BiometryTypes.Biometrics) {
//     //do something face id specific
//     console.log('Face ID is supported');
//   }
//   console.log('Biometric', biometryType);
//   if (biometryType) return true;
//   else return false;
// };

// const createKeys = async () => {
//   rnBiometrics.createKeys().then(resultObject => {
//     const {publicKey} = resultObject;
//     console.log(publicKey);
//     // sendPublicKeyToServer(publicKey)
//   });
// };

// const keyExist = async () => {
//   rnBiometrics.biometricKeysExist().then(resultObject => {
//     const {keysExist} = resultObject;
//     console.log(keysExist);
//   });
// };

// const deleteKeys = async () => {
//   rnBiometrics.deleteKeys().then(resultObject => {
//     const {keysDeleted} = resultObject;

//     if (keysDeleted) {
//       console.log('Successful deletion');
//     } else {
//       console.log('Unsuccessful deletion because there were no keys to delete');
//     }
//   });
// };

// export {Biometric, createKeys, keyExist, deleteKeys};
