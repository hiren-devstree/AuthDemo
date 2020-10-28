import * as firebase from 'firebase';
import '@firebase/auth';


const config = {
    apiKey: "AIzaSyCTkFxjPFVUEDw73XS75GDFEVIeiXLWrJU",
    authDomain: "emzee-33423.firebaseapp.com",
    databaseURL: "https://emzee-33423.firebaseio.com",
    projectId: "emzee-33423",
    storageBucket: "emzee-33423.appspot.com",
    messagingSenderId: "163832037678",
    appId: "1:163832037678:web:81baa56e54e9a27c7ffabf",
    measurementId: "G-JPBGGNZ5FC"
};

firebase.initializeApp(config);
export default firebase;