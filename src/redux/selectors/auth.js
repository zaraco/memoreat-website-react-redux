

export const authSelectors = {
    isLoggedIn: (state) => state.auth.isLoggedIn,
    user: (state) => state.auth.user,
    token: (state) => state.auth.token,
    login: (state) => state.auth.login,
    error: (state) => state.auth.error,
    register: (state) => state.auth.register,
    isLoadingLogin: (state) => state.auth.isLoadingLogin,
    isLoadingRegister: (state) => state.auth.isLoadingRegister,
    isLoadingLogout: (state) => state.auth.isLoadingLogout,


};
