import * as firebase from 'firebase';

export class AuthService {
  token: string;

  signupUser(email: string, password: string) {
    console.log('sign up2');
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => console.log(error));
  }

  signinUser(email: string, password: string) {
    firebase
      .auth()
      .signInAndRetrieveDataWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response);
        firebase
          .auth()
          .currentUser.getIdToken()
          .then((token: string) => (this.token = token));
      })
      .catch(error => console.log(error));
  }

  getToken() {
    firebase
          .auth()
          .currentUser.getIdToken()
          .then((token: string) => (this.token = token))
    // return firebase.auth().currentUser.getIdToken();
    return this.token;
  }
}
