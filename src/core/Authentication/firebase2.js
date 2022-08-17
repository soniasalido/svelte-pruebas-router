import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

// [START auth_google_provider_scopes_modular]
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
// [END auth_google_provider_scopes_modular]

const firebaseConfig = {
    apiKey: "AIzaSyCWKOXRCWFcecRyh1nqgpTWe5MWCeqI-ts",
    authDomain: "svelte-router-883a7.firebaseapp.com",
    projectId: "svelte-router-883a7",
    storageBucket: "svelte-router-883a7.appspot.com",
    messagingSenderId: "299665788751",
    appId: "1:299665788751:web:a7d16321a6c6c3cdc87f3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// [START auth_set_language_code_modular]
const auth = getAuth();
auth.languageCode = 'es';
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();
// [END auth_set_language_code_modular]


// [START auth_google_signin_popup_modular]
signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
    }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
});
// [END auth_google_signin_popup_modular]


export { auth, provider };