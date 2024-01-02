import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {showToaster} from '../functions/Toast';

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
              if (error.code === 'auth/email-already-in-use') {
                  console.log('That email address is already in use!');
                  showToaster('That email address is already in use!');
              }

              if (error.code === 'auth/invalid-email') {
                  console.log('That email address is invalid!');
                  showToaster('That email address is invalid!');
              }

              if (error.code === 'auth/invalid-credential') {
                console.log('The supplied auth credential is incorrect, malformed, or has expired.');
                showToaster('The supplied auth credential is incorrect, malformed, or has expired.');
              }
              console.error(`error code: ${error.code}`);
              console.error(error);
              return null;
          });
};

//   try {
//     console.log('start 2');
//     const userv = await auth().signInWithEmailAndPassword(email, password);
//     console.log('start 3', userv);
//     return userv;
//   } catch (error) {
//     if (error.code === 'auth/email-already-in-use') {
//       console.log('That email address is already in use!');
//     }

//     if (error.code === 'auth/invalid-email') {
//       console.log('That email address is invalid!');
//     }
//     console.error(`error code: ${error.code}`);
//     console.error(error);
//   }

export default checkUser;
