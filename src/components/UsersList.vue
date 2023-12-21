<template>
    <div>
        <router-link v-for="(oneUser,index) in friendListTab"  :to="`/user/${oneUser.id}`">
            <p class="text-center">{{ oneUser.name }} - {{ index }}</p>
        </router-link>
    </div>
</template>

<script lang='js'>
import { defineComponent } from 'vue'
import userDetails from "./User.vue";

export default

    defineComponent({
    name: 'UsersList',
    components:{ 'one-user':userDetails},

    data() {
        return {
            friendListTab:[
                {
                    id:1,
                    name:'AZERTYUIOP',
                    mail:'a@a.com'
                },
                {
                    id:2,
                    name:'QWERTY',
                    mail:'Q@Q.com'
                },
                {
                    id:'abc',
                    name:'AAAA',
                    mail:'A@AAAAA.com'
                }
            ]
        };
    },

});

</script>

<style scoped lang="css"></style>