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
    isLoadingLogin: false,
    isLoadingRegister: false,


};

const reducer = {

    LOGIN_REQUEST: (state) => ({
        ...state,
        isLoadingLogin: true,

    }),

    LOGIN_SUCCESS: (state, {payload}) => ({
        ...state,
        token: payload.token,
        user: payload.user,
        isLoggedIn: true,
        login: null,
        error: null,
        register: null,
        isLoadingLogin: false,

    }),

    LOGIN_FAILURE: (state) => ({
        ...state,
        token: null,
        user: null,
        isLoggedIn: false,
        error: "wrong",
        isLoadingLogin: false,


    }),

    LOGIN_FORM: (state, {login}) => ({
        ...state,
        login: login,
    }),

    REGISTER_REQUEST: (state) => ({
        ...state,
        isLoadingRegister: true,

    }),


    REGISTER_SUCCESS: (state, {payload}) => ({
        ...state,
        token: payload.token,
        user: payload.user,
        isLoggedIn: true,
        error: null,
        register: null,
        isLoadingRegister: false,

    }),

    REGISTER_FAILURE: (state) => ({
        ...state,
        token: null,
        user: null,
        isLoggedIn: false,
        error: "wrong",
        isLoadingRegister: false,


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
