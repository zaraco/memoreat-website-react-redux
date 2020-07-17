

export const authSelectors = {
    isLoggedIn: (state) => state.auth.isLoggedIn,
    user: (state) => state.auth.user,
    token: (state) => state.auth.token,
    login: (state) => state.auth.login


};
