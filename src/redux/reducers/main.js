const DEFAULT_STATE = {
   app_token:null,
    languages: [],
    categories: []
};

const reducer = {
    INDEX_SUCCESS: (state, {payload}) => ({
        ...state,
        app_token: payload.app_token,
        languages: payload.languages,
        categories: payload.categories
    }),




}

export default (state = DEFAULT_STATE, action) =>
    !action || typeof reducer[action.type] === 'undefined'
        ? state
        : reducer[action.type](state, action);
