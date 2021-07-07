export const state = () => ({
    status: '',
    authenticated: false,
    errors: []
})

export const getters = {
    isAuthenticated: (state) => state.authenticated,
    authStatus: (state) => state.status,
    getErrors: (state) => state.errors
}

export const actions = {
    signup: async function ({ commit }, user) {
        let errs = [];
        commit('authRequest');
        if (user.prenom.length === 0) {
            errs.push('Veuillez rentrez votre prénom');
        }
        if (user.nom.length === 0) {
            errs.push('Veuillez rentrez votre nom');
        }
        if (user.email.length === 0) {
            errs.push('Une adresse e-mail est requise');
        }
        if (user.password.length === 0) {
            errs.push('Un mot de passe est requis');
        }
        if (user.telephone.length === 0) {
            errs.push('Un numéro de téléphone est requis');
        }
        if (user.password !== user.passwordConfirm) {
            errs.push('Les mots de passe doit être identique');
        }
        if (errs.length > 0) {
            commit('authError', errs);
            return;
        }
        await this.$axios.$put(process.env.apiUrl + '/v1/users/add', user)
        .then(resp => {
            commit('authSuccess');
            commit('popup/hide', null, { root: true });
        })
        .catch(err => {
            commit('authError', [err.response.data]);
        });
    },
    login: async function({ commit }, user) {
        let errs = [];
        commit('authRequest');
        if (user.email.length === 0) {
            errs.push('email_required');
        }
        if (user.password.length === 0) {
            errs.push('password_required');
        }
        if (errs.length > 0) {
            commit('authError', errs);
            return;
        }
        await this.$axios.$post(process.env.apiUrl + '/v1/users/auth', user)
        .then(resp => {
            commit('authSuccess');
            commit('popup/hide', null, { root: true });
        })
        .catch(err => {
            commit('authError', [err.response.data]);
        });
    },
    logout: async function({ commit }) {
        commit('logout');
    },
    setAuthenticated: async function({ commit }) {
        commit('authSuccess');
    }
}

export const mutations = {
    authRequest: (state) => {
        state.status        = 'loading';
        state.authenticated = false;
        state.errors        = [];
    },
    authSuccess: (state) => {
        state.status        = 'success';
        state.authenticated = true;
        state.errors        = [];
    },
    authError: (state, errors) => {
        state.status        = 'error';
        state.authenticated = false;
        state.errors        = errors;
    },
    logout: (state) => {
        state.status        = '';
        state.authenticated = false;
        state.errors        = [];
    },
    reset: (state) => {
        state.status = '';
        state.errors =  [];
    }
}