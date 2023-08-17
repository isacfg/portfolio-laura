import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeNryGCahki_xQl3qdI1DmTef54zV7m6k",
  authDomain: "portfolio-laura-b59b0.firebaseapp.com",
  projectId: "portfolio-laura-b59b0",
  storageBucket: "portfolio-laura-b59b0.appspot.com",
  messagingSenderId: "682883528719",
  appId: "1:682883528719:web:2daebedc7b2be5dbe98b7a",
  measurementId: "G-SGM8QGNEJE"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
