import {ToastAndroid} from 'react-native';

const showToaster = (msg: string) => {
  ToastAndroid.show(msg, ToastAndroid.SHORT);
};

export {showToaster};
