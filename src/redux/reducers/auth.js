const DEFAULT_STATE = {
    isLoggedIn: false,
    token:null,
    user:null
};

const reducer = {
    LOGIN_SUCCESS: (state, {payload}) => ({
        ...state,
        token: payload.token,
        user: payload.user,
        isLoggedIn: true
    }),

    LOGIN_FAILURE: (state) => ({
        ...state,
        token: null,
        user: null,
        isLoggedIn: false
    }),
}

export default (state = DEFAULT_STATE, action) =>
    !action || typeof reducer[action.type] === 'undefined'
        ? state
        : reducer[action.type](state, action);
