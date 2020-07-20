

export const authSelectors = {
    isLoggedIn: (state) => state.auth.isLoggedIn,
    user: (state) => state.auth.user,
    token: (state) => state.auth.token,
    login: (state) => state.auth.login,
    error: (state) => state.auth.error,
    register: (state) => state.auth.register,

};
