<template>
    <div>
        <h1>Connexion</h1>
        <form @submit.prevent="login">
            <input type="email" placeholder="Votre email" v-model="email">
            <input type="password" placeholder="Mot de passe" v-model="password">
            
               <div class="loader" v-if="authStatus === 'loading'"></div>

            <div class="btn--group" v-else>
                <button type="submit" class="btn--green">Connexion</button>
                <button class="btn--green--alt" @click="signup('Inscription')">Inscription</button>
            </div>
        </form>
         <div class="errors--list" v-if="errors && errors.length > 0">
            <div v-for="error of errors" :key="error">{{error}}</div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data () {
        return {
            email: '',
            password: '',
            error: []
        }
    },
    methods: {
        login: async function() {
            const { email, password } = this;
            await this.$store.dispatch('user/login', { email, password })
        },
        ...mapActions({
            signup: 'popup/changeMode'
        })
    },
    computed: {
        ...mapGetters({
            errors: 'user/getErrors',
            authStatus: 'user/authStatus'
        })
    }
}
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        padding: 30px 0 10px;
    }
    form input {
        margin: 5px 0;
        width: 300px;
        padding: 10px;
        border: 1px solid #dcdcdc;
        border-radius: 5px;
    }
    .btn--group button {
        width: 100%;
        margin: 5px 0;
        outline: none;
    }
</style>