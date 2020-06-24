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

class FirebaseWrapper {
    auth: app.auth.Auth;
    db: app.database.Database;
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.database();
    }

    /* Auth API */

    isLoggedIn(): boolean {
        return this.auth.currentUser != null;
    }

    createUserWithEmailAndPassword(email: string, password: string): void {
        // Need to add code to save user info in the realtime database as well.
        this.auth.createUserWithEmailAndPassword(email, password);
    }

    signInWithEmailAndPassword(email: string, password: string): void {
        this.auth.signInWithEmailAndPassword(email, password);
    }

    signOut(): void {
        this.auth.signOut();
    }

    resetPassword(email: string): void {
        this.auth.sendPasswordResetEmail(email);
    }

    // Kinda redundant, but TS complains if I use the isLoggedIn function
    updatePassword(password: string): void {
        if (this.auth.currentUser) {
            this.auth.currentUser.updatePassword(password);
        }
    }

    /* -------- */

    /* Database Operations API */

    // I'm not too sure of the exact mechanics behind what the return type of an async func should be
    // but simply wrapping the type in a Promise seems to make the TS 'compiler' happy.
    async test(): Promise<void> {
        const data = await (await this.db.ref('/').once('value')).val();
        console.log(data);
    }

    /* -------- */
}

const firebase = new FirebaseWrapper();
export default firebase;
