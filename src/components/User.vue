<template>
    <div class="user">
        <div class="container-fluid text-center">
            <h1>User numéro :  {{ $route.params.id }}</h1>
            <router-link to="/users">
                <button class="btn btn-primary">Retour à la liste</button>
            </router-link>

        </div>
        
    </div>
</template>

<script lang='js'>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'one-user',
    components: {
    },
    props: ['userName','userMail'],
    data() {
        return {
        };
    },
    methods: {
    },
});
</script>

<style scoped lang="css">
.user{
    background-color: aquamarine;
}
</style>