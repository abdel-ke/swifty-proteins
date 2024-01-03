import {showToaster} from './Toast';

const firebaseErrors = (error: string) => {
  switch (error) {
    case 'auth/email-already-in-use': {
      console.log('That email address is already in use!');
      showToaster('That email address is already in use!', 'SHORT');
      break;
    }
    case 'auth/user-not-found': {
      console.log('User not found!');
      showToaster('User not found!', 'SHORT');
      break;
    }
    case 'auth/invalid-disabled-field': {
      console.log('User disabled!');
      showToaster('User disabled!', 'SHORT');
      break;
    }
    case 'auth/invalid-email': {
      console.log('That email address is invalid!');
      showToaster('That email address is invalid!', 'SHORT');
      break;
    }

    case 'auth/invalid-email': {
      console.log('That email address is invalid!');
      showToaster('That email address is invalid!', 'SHORT');
      break;
    }
    case 'auth/invalid-credential': {
      console.log(
        'The supplied auth credential is incorrect, malformed, or has expired.',
      );
      break;
    }
    case 'auth/weak-password': {
      console.log('Password should be at least 6 characters');
      showToaster('Password should be at least 6 characters', 'SHORT');
      break;
    }
    default: {
      console.log(`error code: ${error}`);
      break;
    }
  }
};

export default firebaseErrors;
