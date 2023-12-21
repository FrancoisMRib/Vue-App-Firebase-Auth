import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index.js";
import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV4l4zFCkk_Xl6RN921ufQGrp7Lw9FQm8",
  authDomain: "vue-fb-4a1ea.firebaseapp.com",
  databaseURL: "https://vue-fb-4a1ea-default-rtdb.firebaseio.com",
  projectId: "vue-fb-4a1ea",
  storageBucket: "vue-fb-4a1ea.appspot.com",
  messagingSenderId: "607287135297",
  appId: "1:607287135297:web:69bdf13e44b136dc5bcac0",
};

firebase.initializeApp(firebaseConfig);
createApp(App).use(router).mount("#app");