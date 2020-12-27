import firebase from 'firebase/app'
import 'firebase/firestore'

//Firebase Authenticationを使用するために、firebase/authを読み込む
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBRjzMizQ4RZhjik4nD1Qjvx_YDvMPSEOg",
    authDomain: "chat-app-1a3ac.firebaseapp.com",
    projectId: "chat-app-1a3ac",
    storageBucket: "chat-app-1a3ac.appspot.com",
    messagingSenderId: "649483265059",
    appId: "1:649483265059:web:ef8a5f27efc3450cb5fd96"    
}

//認証情報を引数に与えてFirebase Appの初期化
firebase.initializeApp(firebaseConfig)

export default firebase