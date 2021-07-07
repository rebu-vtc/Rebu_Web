<template>
    <div>
        <h1>Inscription</h1>
        <form @submit.prevent="signup">
            <input type="text" placeholder="Votre nom" v-model="nom">
            <input type="text" placeholder="Votre prénom" v-model="prenom">
            <input type="email" placeholder="Votre email" v-model="email">
            <input type="text" placeholder="Votre numéro de téléphone" v-model="telephone">
            <input type="password" placeholder="Mot de passe" v-model="password">
            <input type="password" placeholder="Confirmation" v-model="passwordConfirm">
            
           <div class="loader" v-if="authStatus === 'loading'"></div>

            <div class="btn--group" v-else>
                <button type="submit" class="btn--green">Inscription</button>
                <button class="btn--green--alt" @click="login('Login')">Connexion</button>
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
            nom: '',
            prenom: '',
            email: '',
            telephone:'',
            password: '',
            passwordConfirm: ''
        }
    },
    methods: {
        signup: async function() {
            const { nom, prenom, email, telephone, password, passwordConfirm } = this;
            await this.$store.dispatch('user/signup', { nom, prenom, email, telephone,password, passwordConfirm });
        },
        ...mapActions({
            login: 'popup/changeMode'
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