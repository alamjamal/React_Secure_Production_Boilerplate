import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth, signInWithPopup,signInWithRedirect, 
  GoogleAuthProvider,GithubAuthProvider, TwitterAuthProvider,  
  OAuthProvider,getRedirectResult
} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBhxpJ8trwur_d1XL_6zV59muViUSRzw_8",
  authDomain: "alamjamaldotme.firebaseapp.com",
  projectId: "alamjamaldotme",
  storageBucket: "alamjamaldotme.appspot.com",
  messagingSenderId: "363777190647",
  appId: "1:363777190647:web:7152d408e26914be8ec1f2",
  measurementId: "G-EK3T6KMDMW"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);



const googleProvider = new GoogleAuthProvider().addScope('email');
const microsoftProvider = new OAuthProvider('microsoft.com');
const githubProvider = new GithubAuthProvider().addScope('user');
const twitterProvider = new TwitterAuthProvider();

const signInWithGoogle = () => signInWithPopup(auth, googleProvider).catch((error) => handleSignInError(error,auth));
const signInWithMicrosoft = () => signInWithPopup(auth, microsoftProvider).catch((error) => handleSignInError(error));
const signInWithGithub = () => signInWithPopup(auth, githubProvider).catch((error) => handleSignInError(error,auth));
const signInWithTwitter = () => signInWithPopup(auth, twitterProvider).catch((error) => handleSignInError(error));




const supportedPopupSignInMethods = [
  GoogleAuthProvider.PROVIDER_ID,
  GithubAuthProvider.PROVIDER_ID,
];


const handleSignInError = async (error, auth) => {
  console.log(error.email, "error")
  if (error.code === 'auth/account-exists-with-different-credential') {
    try {
      // const pendingCredential = error.customData._tokenResponse;
      // const email = pendingCredential.email;

      const pendingCredential = error.credential;

      console.log(pendingCredential, "pendingCredential")

    
    } catch (linkError) {
      console.error("Error:", linkError);
    }
  }
}




const getProviderForSignInMethod = (signInMethod) => {
  switch (signInMethod) {
    case GoogleAuthProvider.PROVIDER_ID:
      return googleProvider;
    case GithubAuthProvider.PROVIDER_ID:
      return githubProvider;
    case TwitterAuthProvider.PROVIDER_ID:
      return twitterProvider;
    case 'microsoft.com':
      return microsoftProvider;
    default:
      throw new Error(`No provider implemented for ${signInMethod}`);
  }
};


export { auth, signInWithGoogle, signInWithMicrosoft, signInWithGithub, signInWithTwitter, };
