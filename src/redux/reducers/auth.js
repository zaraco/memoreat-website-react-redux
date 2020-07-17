const DEFAULT_STATE = {
    isLoggedIn: false,
    token:null,
    user:null,
    login:{
        username: '',
        password: '',
        showPassword: false,
    }
};

const reducer = {
    LOGIN_SUCCESS: (state, {payload}) => ({
        ...state,
        token: payload.token,
        user: payload.user,
        isLoggedIn: true,
        login: null
    }),

    LOGIN_FAILURE: (state) => ({
        ...state,
        token: null,
        user: null,
        isLoggedIn: false
    }),

    LOGIN_FORM: (state, {login}) => ({
        ...state,
        login: login,
    })

}

export default (state = DEFAULT_STATE, action) =>
    !action || typeof reducer[action.type] === 'undefined'
        ? state
        : reducer[action.type](state, action);
