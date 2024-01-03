import {ToastAndroid} from 'react-native';

const showToaster = (msg: string, time: 'SHORT' | 'LONG' | 'CENTER' | 'TOP' | 'BOTTOM') => {
  ToastAndroid.show(msg, ToastAndroid[time]);
};

export {showToaster};
