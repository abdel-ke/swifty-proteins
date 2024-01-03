import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {showToaster} from '../functions/Toast';
import FireBaseErrors from '../functions/FireBaseErrors';

type props = {
  email: string;
  password: string;
};

const checkUser = async ({
  email,
  password,
}: props): Promise<FirebaseAuthTypes.UserCredential | null> => {
  return auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      console.log('User signed in!');
      return user;
    })
    .catch(error => {
      FireBaseErrors(error.code);
      return null;
    });
};

const newUser = async ({
  email,
  password,
}: props): Promise<FirebaseAuthTypes.UserCredential | null> => {
  return auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      console.log('User signed in!');
      return user;
    })
    .catch(error => {
      FireBaseErrors(error.code);
      return null;
    });
};

export {checkUser, newUser};
