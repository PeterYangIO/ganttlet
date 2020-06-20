import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: 'AIzaSyAFCnshUKjdme_1QFXaSFzkTxjLtGpztF0',
    authDomain: 'ganttlett.firebaseapp.com',
    databaseURL: 'https://ganttlett.firebaseio.com',
    projectId: 'ganttlett',
    storageBucket: 'ganttlett.appspot.com',
    messagingSenderId: '783372525556',
    appId: '1:783372525556:web:37eb04f4ccfdbd62fae3a1',
    measurementId: 'G-WH23WGKNYZ',
};

class Firebase {
    auth: app.auth.Auth;
    db: app.database.Database;
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.database();
    }

    async test(): Promise<void> {
        const data = await (await this.db.ref('/').once('value')).val();
        console.log(data);
    }

    /* Auth API */

    doCreateUserWithEmailAndPassword = (email: string, password: string): Promise<app.auth.UserCredential> =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email: string, password: string): Promise<app.auth.UserCredential> =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = (): Promise<void> => this.auth.signOut();

    doPasswordReset = (email: string): Promise<void> => this.auth.sendPasswordResetEmail(email);

    // https://stackoverflow.com/questions/58496176/how-to-properly-annotate-object-to-fix-object-is-possibly-null
    doPasswordUpdate = (password: string): Promise<void> =>
        this.auth.currentUser ? this.auth.currentUser.updatePassword(password) : Promise.resolve();

    /* -------- */

    /* Auth API */

    /* -------- */
}

const firebase = new Firebase();
export default firebase;
