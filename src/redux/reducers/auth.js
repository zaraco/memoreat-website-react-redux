const DEFAULT_STATE = {
    isLoggedIn: false,
    token: null,
    user: null,
    login: {
        username: '',
        password: '',
        showPassword: false,
    },
    error: null,
    register: {
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        showPassword: false,
        address: '',
        gender: 0
    },

};

const reducer = {
    LOGIN_SUCCESS: (state, {payload}) => ({
        ...state,
        token: payload.token,
        user: payload.user,
        isLoggedIn: true,
        login: null,
        error: null,
        register: null
    }),

    LOGIN_FAILURE: (state) => ({
        ...state,
        token: null,
        user: null,
        isLoggedIn: false,
        error: "wrong",

    }),

    LOGIN_FORM: (state, {login}) => ({
        ...state,
        login: login,
    }),


    REGISTER_SUCCESS: (state, {payload}) => ({
        ...state,
        token: payload.token,
        user: payload.user,
        isLoggedIn: true,
        error: null,
        register: null
    }),

    REGISTER_FAILURE: (state) => ({
        ...state,
        token: null,
        user: null,
        isLoggedIn: false,
        error: "wrong",

    }),

    REGISTER_FORM: (state, {register}) => ({
        ...state,
        register: register,
    }),

    LOGOUT: (state) => ({
        ...state,
        isLoggedIn: false,
        token: null,
        user: null,

    }),



};



export default
(state = DEFAULT_STATE, action) =>
    !action || typeof reducer[action.type] === 'undefined'
        ? state
        : reducer[action.type](state, action);
