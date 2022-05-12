import {createStore} from 'vuex';
import axiosClient from '../axios';

const store = createStore({
    state: {
        user: {
            data: JSON.parse(sessionStorage.getItem('USER')),
            token: sessionStorage.getItem('TOKEN')
        },
        users: []
    },
    getters: {},
    actions: {
        register({commit}, user) {
            return axiosClient.post('/register', user)
                .then(({data}) => {
                    commit('setUser', data)
                    return data;
                })
        },
        login({commit}, user) {
            return axiosClient.post('/login', user)
                .then(({data}) => {
                    commit('setUser', data)
                    return data;
                })

        },
        loadUsers({commit}, userId) {
            return axiosClient.post('/getusers', {userId: userId})
                .then(({data}) => {
                    commit('setUsers', data)
                    return data;
                })
        },
        removeUser({commit}, userId, targetId) {
            console.log(userId, targetId)
            axiosClient.post('/removeuser', {userId: userId, targetId: targetId})
                .then(() => {
                    commit('removeUser', targetId)
                })
        }
    },
    mutations: {
        logout: state => {
            state.user.data = {};
            state.user.token = null;
            sessionStorage.removeItem('TOKEN');
            sessionStorage.removeItem('USER');
        },
        setUser: (state, userData) => {
            state.user.token = userData.token;
            state.user.data = userData.user;
            sessionStorage.setItem('TOKEN', userData.token);
            sessionStorage.setItem('USER', JSON.stringify(userData.user));
            //console.log(JSON.parse(Object.values(sessionStorage.getItem('USER'))))
        },
        setUsers: (state, users) => {
            state.users = users;
        },
        removeUser: (state, targetId) => {
            state.users.splice(state.users.indexOf(state.users.find(u => u.id === targetId)), 1);
        }
    },
    mldules: {}
});

export default store;
