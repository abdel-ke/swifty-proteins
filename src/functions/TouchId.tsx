import TouchID from 'react-native-touch-id';

const pressHandler = async (): Promise<boolean> => {
  return TouchID.authenticate('Use your fingerprint to log in to the app.')
    .then((success: any) => {
      if (success == true) return true;
      return false;
    })
    .catch(() => {
      return false;
    });
};

const isSupported = async (): Promise<boolean> => {
  return TouchID.isSupported()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
};

export {pressHandler, isSupported};