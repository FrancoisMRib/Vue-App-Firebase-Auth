<template>
    <h1>Créer un compte</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="register">S'inscrire</button></p>
</template>

<script setup>
import { ref } from 'vue'
import firebase from 'firebase'
import { useRouter } from 'vue-router' // import router
const email = ref('')
const password = ref('')
const router = useRouter() // get a reference to our vue router
const register = () => {
    firebase
        .auth() // get the auth api
        .createUserWithEmailAndPassword(email.value, password.value) // need .value because ref()
        .then((data) => {
            console.log('SUPER WELCOME GRO!');
            router.push('/feed') // redirect to the feed
        })
        .catch(error => {
            console.log(error.code)
            alert(error.message);
        });
}
</script>

<style scoped lang="css"></style> 