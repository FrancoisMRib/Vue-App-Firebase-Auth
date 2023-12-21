<template>
  <div>
    <nav>
      <router-link to="/"> Home </router-link> |
      <router-link to="/feed"> Feed </router-link> |
      <span v-if="isLoggedIn">
        <router-link to="/admin"> Admin </router-link> |
        <button @click="signOut">Logout</button>
      </span>
      <span v-else>
        <router-link to="/register"> Register </router-link> |
        <router-link to="/sign-in"> Login </router-link>
      </span>
    </nav>
    <router-view />
  </div>
</template>
<script setup>
import { ref } from 'vue' // pour v-if  conditional rendering
import firebase from 'firebase'
import { useRouter } from 'vue-router'
const router = useRouter()
const isLoggedIn = ref(true)
// runs after firebase is initialized
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    isLoggedIn.value = true // if we have a user
    // console.log(isLoggedIn.value);
  } else {
    isLoggedIn.value = false // if we do not
    // console.log(isLoggedIn.value);
  }
})
const signOut = () => {
  firebase.auth().signOut()
  router.push('/')
}
</script>